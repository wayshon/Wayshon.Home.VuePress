## ReactNative是怎么在iOS上跑起来的
`2019-02-25`

- 本文所有观点并不权威，都是平时看文档和实践中概括的，可能有错的地方，如有发现麻烦指出`wayshongg@gmail.com`谢谢。
- 初始化流程:
	- 创建根Controller:RCTRootView
	- 创建桥接对象:RCTBridge,用来处理js的jsccore，js、c++和OC交互。
	- 加载JS:[RCTBatchedBridge loadSource]
	- 创建模块表:[RCTBatchedBridge initModulesWithDispatchGroup],用来告诉js有哪些native模块可被调用
	- 往JS中插入OC模块表:[RCTJSCExecutor injectJSONText]
	- jscore解析js
	- js取native模块(属性模块)
	- c++返回模块及其属性和方法
	- 编译render生成虚拟树
	- Framework解析后维护一个消息队列MessageQueue.js(比如创建xx  view)
	- native周期性去队列拉消息执行
- native布局flex的神器：`Yoga`
- jscore执行到 import X(比如Image)时，去模块表拿这个对象的属性和方法(不是每次都去native取，会有缓存映射表。每个组件有唯一tag和增删改查方法。reder的时候给MessageQueue队列塞事件，native通过c++去队列取事件，native通过调用yoga渲染出native ui
- 通信机制：
	- js与native的通信绝大部分都是异步通信，又少部分同步的api，但我不知道干吗用的。
	- jscore编译了js，jscore只能通过c++调用native。
	- 推(背压)：同步api，jscore调用c++,c++主动调用native。缺点，js疯狂执行，超过native执行能力导致主线程死掉
	- 拉：异步api，js另起线程，向MessageQueue队列扔事件，native层在runtime每帧回调后去队列捞，取队列的新值或者并值执行，更新UI的逻辑在主线程执行。据说这次RN重构要推同步方法，但是怎么做到不阻塞主线程就不知道了。
	- 总之，js是不能与oc(或者java)直接通信的，都是native层去捞事件，或者jscore编译后通过c++调用native。
- js库: RN安卓与iOS统一用的jscore，weex安卓里用的v8。rn重构据说会高度抽象jscore那层方便换引擎。
- 优化分割: RN是一次性加载Framework和业务js，新打开一个页面的时候是打开空的View，加载整个Framework和业务js。weex和crn是分割开这两个，比如预先new一个加载好Framework的View，打开新页面的时候直接加载业务js。这样解决了白屏问题，且容器可复用，业务代码销毁了可以加载另一份业务代码。
- 我有一个问题：RN为什么卡。
	- 这个问题我暂时还没有答案，下面纯属乱猜
	- 首先白屏的问题第一条就讲了，基础js重复加载的问题
	- 为什么运行时会卡呢，猜测和RN的通信机制有关。假设做一个滑块，在native里面完全可以在主线程里同步执行，识别到手势立马改变位置。但是在RN里就绕圈圈了：
		- 首先识别到手势后，native调用c++
		- c++再执行js里面的回调函数
		- js执行完之后向MessageQueue队列塞任务
		- native在一帧结束后来队列捞取并执行
		- 综上所述，RN与native比，起码是落后一帧，玩意再复杂点一帧的间隔时间比较长，就明显很卡了。
	- 还有一个长列表的假设：
		- 在native里table(list)是有一个identifer，用来标志是那种cell，假如页面能展示10行，内存里会有12个cell的实例，当页面滚动时，每次cell移除屏幕就会放入内存池备用，新进入屏幕的cell则去内存池取cell复用，而不是每次都是创建很多个cell。
		- 在RN里就不是native式的渲染了，RN也做了cell绑定key并复用，但是首先滚动事件得调一层c++传到js，js在去内存池取缓存的js cell，diff重绘Virtual Dom，再扔消息给MessageQueue队列，native捞了对了再扔给Yoga渲染。多出了一套流程。