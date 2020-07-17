# Wayshon 专注前端领域开发

### 怎么开发一个 flutter ios 插件

`Jul 16, 2020`

创建插件模板 <br />
iOS native 代码开发 <br />
dart 代码开发 <br />
发布

[...阅读全文](/2020/怎么开发一个flutter-ios插件.html)
___

`May 1, 2020`

hybrid, jsbridge, UIWebView, WKWebView <br />
小程序, 同层渲染 <br />
React Native <br />
Flutter

[...阅读全文](/2020/常见的跨端方案.html)
___

### review-2019

`Nov 12, 2019`

浏览器渲染流程, v8引擎, 函数的this, shadow-dom<br />
性能优化, 浏览器与http缓存, Event Loop<br />
vue, react

[...阅读全文](https://github.com/wayshon/review-2019)
___

### 面试-扑克牌问题

`Aug 13, 2019`

有一堆扑克牌, 将牌堆第一张放到桌子上, 再将接下来的牌堆的第一张放到牌底, 如此往复<br />
最后桌子上的牌顺序为:(牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)<br />
问: 原来那堆牌的顺序，用函数实现

[...阅读全文](/2019/面试-扑克牌问题.html)
___

### ios app内页面添加到桌面

`Apr 18, 2019`

app 用safari打开html<br />
html 配置meta<br />
保存网页到桌面<br />
打开桌面标签唤起app，避免系统确认弹窗

[...阅读全文](/2019/ios-app内页面添加到桌面.html)
___

### ReactNative是怎么在iOS上跑起来的

`Feb 25, 2019`

创建根Controller:RCTRootView<br />
创建桥接对象:RCTBridge,用来处理js的jsccore，js、c++和OC交互。<br />
加载JS:[RCTBatchedBridge loadSource]<br />
创建模块表:[RCTBatchedBridge initModulesWithDispatchGroup],用来告诉js有哪些native模块可被调用

[...阅读全文](/2019/ReactNative是怎么在iOS上跑起来的.html)
___

### 前端页面优化常见方法

`Feb 22, 2019`

压缩代码<br />
defer<br />
使用webp高压缩图片<br />
减少请求数量：雪碧图，字体图标<br />
CDN<br />
CDN Combo，可以将多个文件打包成一个文件的形式返回<br />
组件请求可以添加 Expires / Cache-control: max-age=xx 头，下次进入的时候可以从缓存拿<br />
合理使用 Etag 和 Last-Modified 使浏览器读缓存

[...阅读全文](/2019/前端页面优化常见方法.html)
***

### virtual-dom learning

`Dec 12, 2018`

key 是用来标志一个组件的唯一身份，他不是给开发者用的，他是方便 diff 的时候唯一确定组件的。<br />
diff的过程中，找到key相同的组件时，react认为这是同一个组件，就不会为新的组件创建vd，而是直接用新的属性修改老的组件。<br />
当遍历完也没找到相同的key，就认为这是一个新的组件，需要创建vd。

[...阅读全文](/2018/virtual-dom-learning.html)
***

### 网络请求相关

`Sep 10, 2018`

http 请求的具体步奏<br />
http 内容结构<br />
http1.x 与 http2<br />
常见 http 状态码<br />
常见 restful 方法

[...阅读全文](/2018/网络请求相关.html)
***

### JavaScript常见排序

`Jul 06, 2018`

快排就是找一个基数用来比较, 把比他大的放他前面，比他小的放他后面, 然后把前后两部分重复此方法排序<br />
归并是将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。所以前提是先细化到数组只有一个值，然后才能比较，返回一个两个值的有序数组，将这个含有两个值的有序数组与其他有序数组排序合并得到更大的有序数组，最终达到给整个数列排序的目的。

[...阅读全文](/2018/JavaScript常见排序.html)
***

### Review JavaScript

`Jul 04, 2018`

script加载js会阻塞渲染，标签中 defer 指异步加载js，在文档load之后按顺序执行。async指异步加载，加载完立即执行，不保证顺序<br />
`<noscropt>`用来在不支持脚本的浏览器显示内容<br />
函数没有重载，自己判断 arguments。arguments.callee指向函数自己，递归时用到。arguments.callee.caller指调用函数的函数<br />
在读取基本类型时，相当于为基本类型创建了对应的基本包装类对象，方便数据操作，如：2.toString()。操作基本类型值的语句一旦完成就立刻销毁创建的包装对象

[...阅读全文](/2018/Review_JavaScript.html)
***

### 样式小记

`Mar 11, 2018Sep 10, 201`

正常流宽度：除非有明显的width设置，否则div流的宽度不会超过父级容器。格式化宽度：出现在绝对定位，是包裹性，除非是left,right同时出现就是计算的格式化宽度<br />
width是作用在content-box上的<br />
margin只在width为auto时可以改变元素尺寸，利用这个特性可以两端宽度固定并float，中间元素两端固定就可以自适应了<br />
width父级auto子元素100%也是ok，height不行(除非绝对定位)，除非父元素的height有可以生效的值

[...阅读全文](/2018/样式小记.html)
***

### 判断浏览器终端

`Oct 31, 2017`

简单封装一个函数，根据`userAgent`合`appVersion`返回当前是跑在哪种浏览器环境。

[...阅读全文](/2017/判断浏览器终端.html)
***

### 正则小记

`Sep 11, 2017`

regexp.exec(string) 返回一个匹配结果数组<br />
regexp.test(string) 返回一个是否匹配的BOOL值<br />
string.match(regexp) 同regexp.exec，返回一个匹配结果数组

[...阅读全文](/2017/正则小记.html)
***

### js event-loop

`Aug 15, 2017`

所有同步任务在主线程执行栈执行<br />
主线程之外有一个任务队列(事件/消息队列)，异步任务有了结果就会在任务队列中添加一个事件，表示异步任务可以进入执行栈了。只要指定过回调函数，事件发生时就会进入任务队列，等待主线程读取。任务队列是先进先出的队列<br />
主线程中所有同步任务执行完之后会，读取任务队列，异步任务进入执行。由于存在"定时器"，主线程首先要检查一下执行时间，某些事件只有到了规定的时间，才能返回主线程。

[...阅读全文](/2017/js_event-loop.html)
***

### js addEventListener与removeEventListener

`Aug 15, 2017`

addEventListener接受三个参数。<br />
第一个是事件类型，如click,keypress，主意没有on，并且全是小写。<br />
第二个是处理函数，有一个event参数，event包括type,target等等属性。<br />
第三个是bool值，不写是false，false为冒泡事件处理函数，true为捕获事件处理函数。

[...阅读全文](/2017/js_addEventListener&removeEventListener.html)
***

### 浏览器渲染流程

`Aug 09, 2017`

自上而下加载，加载过程中解析渲染<br />
加载中遇到外部css,img会发出异步请求，不会影响文档加载<br />
加载中遇到js文件会挂起渲染进程，要等js加载和执行完，才恢复html渲染线程(因为js会修改DOM,document.write,解决方法是把js引用放在`</body>`前)

[...阅读全文](/2017/浏览器渲染流程.html)
***

### 蝴蝶书学习笔记

`Aug 03, 2017`

JS引擎的处理是同名变量和形参都引用同一个内存地址，所以才会有二中的修改arguments会影响到局部变量的情况出现<br />
ActiveObject，执行全局和方法时有一个ActiveObject，里面有参数variables，函数functions，parameters，arguments

[...阅读全文](/2017/蝴蝶书学习笔记.html)
***

### 再学vue

`Jul 25, 2017`

不要在实例属性或者回调函数中（如 `vm.$watch('a', newVal => this.myMethod())`）使用箭头函数。因为箭头函数绑定父上下文，所以 this 不会像预想的一样是 Vue 实例，而是 `this.myMethod` 未被定义。<br />
“Mustache” 语法（双大括号）中的js只能包含单个表达式，双大括号会将数据解释为纯文本，而非 HTML 。为了输出真正的 HTML ，你需要使用 `v-html` 指令。通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。

[...阅读全文](/2017/再学vue.html)
***

### git使用笔记

`Jul 15, 2017`

创建分支 git branch temp 或者git checkout -b temp<br />
推送本地分支到远程 git push origin temp<br />
删除本地分支 git branch -d temp 有时候你可能需要一个大写的D

[...阅读全文](/2017/git使用笔记.html)
***

### Cordova搭配Vue开发混合app实践

`Dec 15, 2016`

Cordova 能够将你的 HTML/JS 代码打包在一个原生的容器中运行，并且可以调用系统的各类软硬件接口（JavaScript API）。我们将这种架构称之为 `hybrid app` , 得益于这种架构，我们能将前端代码跨平台运行，并且得到接近原生应用的系统特性。最终发布到各大应用市场，包括苹果的 App Store。<br />
Vue.js 是一套构建用户界面的 渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和Vue 生态系统支持的库开发的复杂单页应用。基于 Vue 框架，开发单页面的 hybrid app 将会变的非常高效。

[...阅读全文](/2016/Cordova搭配Vue开发混合app实践.html)
***

### CodePush使用调研

`Nov 25, 2016`

CodePush是一个微软开发的云服务器。通过它，开发者可以直接在用户的设备上部署手机应用更新。CodePush相当于一个中心仓库，开发者可以推送当前的更新（包括JS/HTML/CSS/IMAGE等）到CoduPush，然后应用将会查询是否有更新。<br />
安装CodePush CLI, 在CodePush服务器上注册app, 在app中添加SDK, 部署APP相关命令

[...阅读全文](/2016/CodePush使用调研.html)
***

### ES6学习笔记

`Sep 25, 2016`

let相当于var，块级作用域，不存在变量提升，暂时性死区，不允许重复声明，块级作用域的出现，实际上使得获得广泛应用的立即执行匿名函数（IIFE）不再必要了。块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。

[...阅读全文](/2016/ES6学习笔记.html)
***

### 栈,堆,全局区,常量区,代码区的区别

`May 25, 2016`

栈区（stack）— 由编译器自动分配释放 ，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。
堆区（heap） — 一般由程序员分配释放， 若程序员不释放，程序结束时可能由OS回收 。（ios中alloc都是存放在堆中）

[...阅读全文](/2016/栈,堆,全局区,常量区,代码区的区别.html)
***

### iOS自带的宏

`Apr 11, 2016`

C标准中一些预定义的宏
C标准中指定了一些预定义的宏，对于编程经常会用到。下面这个表中就是一些常常用到的预定义宏。

[...阅读全文](/2016/iOS自带的宏.html)
***

### iOS获取当前屏幕的视图控制器

`Apr 11, 2016`

在一些子View中经常需要知道当前是跑在哪个ViewController里，经常由于嵌套太深获取承载VC比较麻烦，这里封装一个方法，用来获取当前屏幕的ViewController.

[...阅读全文](/2016/iOS获取当前屏幕的视图控制器.html)
***

### iOS sqlite3外键级联删除问题解决

`Apr 08, 2016`

经过实验证明关联了外键并没有级联删除，即SystemModel中删除了，本表中关于PlanModel的id对应的纪录并没有删除。经过查阅发现，sqlite支持级联，但默认级联属性是关闭的。

[...阅读全文](/2016/iOS-sqlite3外键级联删除问题解决.html)
***

### 使用FMDB事务批量存入数据

`Apr 08, 2016`

在iOS编程中使用FMDB来存储数据，在inssert一大串对象时发现用了超过20秒，如果插入1000条数据，相当于进行了1000次磁盘存储。而使用事务之后相当于只执行一次sql语句，插入速度大大提升。

[...阅读全文](/2016/使用FMDB事务批量存入数据.html)
***


#### <a href="http://www.beian.miit.gov.cn">备案号 苏ICP备17053896号-2</a>