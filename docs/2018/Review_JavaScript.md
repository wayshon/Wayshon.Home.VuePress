## Review JavaScript
`2018-07-04`

### 红宝书

#### **综合**
- script加载js会阻塞渲染，标签中 defer 指异步加载js，在文档load之后按顺序执行。async指异步加载，加载完立即执行，不保证顺序
  - 注意 defer 只是外链起作用，即 src 引进来的起作用，直接编写的代码无效
- `<noscropt>`用来在不支持脚本的浏览器显示内容 
- js 选中文字：
	- 1、document.createRange()
	- 2、range.selectNodeContents(element);
	- 3、window.getSelection()  .removeAllRanges()  .addRange(range)
        - 4、document.execCommand("copy");// 复制
- 数组队列与栈方法
	- .push(a, b, …)  在数组末尾推进数个值
	- .pop()  数组末尾删除一个值并返回这个值
	- .shift() 数组开头删除一个值并返回这个值
	- .unshift(a, b, …)  在数组开头推进数个值
- 数组的 sort 方法默认是把成员调用 .toString() 然后比较字符，会有bug，最好传一个比较函数
- 数组与字符串截取：
	- 1、slice(start, end),返回一个新的数组(字符串), 不会修改原来的   —  数组/字符串
	- 2、substring(start, end) 提取两个指定index之间的字符, 包括start不包括end, 不接受负的参数。  —  字符串
	- 3、splice(start, length, p1, …., pn)向/从数组中添加/删a除项目, 然后返回被删除的项目。会改变原来的数组。—  数组
	- 4、substr(start, length)   —  字符串
- 函数没有重载，自己判断 arguments。arguments.callee指向函数自己，递归时用到。arguments.callee.caller指调用函数的函数
- 在读取基本类型时，相当于为基本类型创建了对应的基本包装类对象，方便数据操作，如：2.toString()。操作基本类型值的语句一旦完成就立刻销毁创建的包装对象
- 图片预加载可以new Image() = document.images[i].src
- 图片懒加载：
	- 1、取可视区域高度：document.documentElement.clientHeight
	- 2、取当前已经往下滚动了的距离：document.documentElement.scrollTop
	- 3、取当前元素距离顶部的距离：element.offsetTop
	- 4、当offsetTop < clientHeight + scrollTop 就证明当前元素在视窗底部以上(也可能已经是视窗订不上面看不到了)，设置当前元素的src进行加载

#### **对象及原型**
- 对象不再引用就设置为 null，解除引用，让垃圾回收
- Object.defineProperty, .defineProperties定义对象属性
	- 可配置，可遍历，(可写，值) 或者 (get，set)
- Object.getPrototypeOf 与 `__proto__` 一样用于去对象的原型
- P.prototype.isPrototypeOf(obj)：用于测试 obj 是否存在于P的原型链上
- 构造函数做的事情：
	- 1、创建一个新对象
	- 2、将自己的作用域this赋给新对象
	- 3、执行代码（为这个新对象添加属性）
	- 4、返回新对象
- 继承最优解：
	- 1、在子类里执行父类.call(this)，为的是调用父类的构造方法并绑定到自己的this上
	- 2、子类的prototype继承父类的prototype，如果直接指向父类的prototype会导致子类修改自己的prototype会影响父类的实例
- 构造函数不加new当普通函数执行，就会将自己的this绑定所属上下，执行一波赋值操作
- with与try对原型链影响：延长作用域链
	- 1、with 将接受的参数添加到作用域链最前端
	- 2、try 创建一个包含被抛出错误对象的声明的对象
	- 3、只要有finally就肯定执行，哪怕try或者catch里有 return
	- 4、window.onerror = function(msg, url, line){} return true 相当于对整个文档的catch
	- 5、assert 断言：一场处理高级方式，其实就是函数传bool和msg进，为false验证失败就抛错
- obj.hasOwnProperty(key)：实例属性，key in obj：不管是实例还是原型链上的属性。两者结合使用可以判断属性是对象的还是原型的。 Object.getOwnPropertyNames(obj)：实例所有的属性，无论是否可枚举 Object.keys(obj)：获取实例的可枚举的属性
- Object.create 第一个参数是要集成的对象，第二个与defineProperties参数一样，用来新增或覆盖父类属性
- 对象集成实践
	- 1、传统方式：A()，B()，B.prototype = new A()  //注意这里子类的 prototype是父类的实例。缺点是给子类构造函数传参，父类构造函数，没办法执行
	- 2、强化模式：A(p)，B(p){A.call(this,p)}，B.prototype = new A()  //会执行两次 A()
	- 3、牛逼模式：A(p)，B(p){A.call(this,p)}，B.prototype = Object.create(A.prototype) // 注意这里的prototype只能是集成，如果直接指向A.prototype就不是集成了，改子类会直接影响到父类

#### **函数**
- 每个函数都有自己的执行环境，执行环境有一个关联的变量对象，保存了环境中定义的所有变量和函数。浏览器里最外层的执行环境是window。
- 当执行流进入一个函数就会把函数的执行环境推进一个栈，函数执行后弹出
- 当代码在一个执行环境中执行时，会创建一个作用域链对象，如果执行环境是函数，作用域链最前端上就是函数的活动对象（一开始只包含arguments对象）。作用域链是为了执行环境有序访问变量和函数
- 内部函数在搜索this和arguments这两变量时只会搜到其活动对象为止
- 闭包：当外层函数执行后，返回的匿名函数的作用域链仍然在引用这个活动对象，导致外层没被销毁。 要注意闭包不用的时候设为null，释放内存
- 匿名函数的执行具有全局性
- 函数内部定义了函数就是闭包
- 立即执行匿名函数可以减少闭包占用内存问题，因为没有指向匿名函数的引用，函数执行后就会释放
- 闭包和私有变量会导致在作用域链上多差几个层次，影响性能

#### **正则**
- regexp.exec(string) 返回一个匹配结果数组
- regexp.test(string) 返回一个是否匹配的BOOL值
- string.match(regexp) 同regexp.exec，返回一个匹配结果数组
- string.search(regexp) 返回字符串中第一个匹配项的索引
- string.replace(regexp, str/Fun)，第二个参数是字符串，如：xxx($1)用来取正则()匹配值并替换等等。第二个函数还可以是函数，经过更精细的操作return
- string.split(regexp) 将字符串切割成数组

#### **BOM**
- 全局对象不能通过 delete 操作删除，定义在window上的可以
- self始终指向window
- 窗口大小：
	- outerWidth, outerHeight：浏览器窗口大小
	- innerWidth, innerHeight：视口viewport大小
	- 在chrome中其实都是viewport大小
- document.documentElement.clientWidth,  .clientHeight：页面可见区域大小
- location.assign(url)，调用 window.location = url和location.href = url相当于调用了assign
	- 每次修改location的属性(search,hostname,pathname,port)都会重新加载，hash属性除外但有历史记录
	- location.replace跳转页面，另history.replaceState是不刷新页面改url和历史记录且必须同源
- 客户端检测：能力检测，怪癖检测，用户代理检测

#### **DOM**
- childNodes 与 children不同，children没有文本和空白节点。firstChild, firstElementChild
- DocumentFragment文档片段，可以把node添加到这里面，再把这个片段插入文档
- Nodes包含很多类型常用的：Element, Text, Comment, DocumentFragment
- 创建`<script>`，给src属性或者给其appendchild creatTextNode(‘要执行的代码’),css就创建link标签
- 元素的dataset属性可以访问data-开头的自定义属性，getAttribute() 可以获取任意属性，常规属性可以直接 . 语法获取 
- classList 获取 class的类数组 add,contains, remove, toggle 
- outerHTML 包括自己，innerHTML不包括自己
- html优化，使用innerHTML代替循环创建dom，替换前记得手动删除html用到的js函数与属性，不然html销毁了js确一直被占用
- scrollIntoView()  把元素滚到当前屏幕
- xmlns  命名空间，不懂，大概是在xml中区别svg等其他的吧，不然只会显示XML标记或通知XML中有错误

#### **事件**
- 事件处理函数里this只元素本身，即event.currentTarget，target是触发事件的对象，currentTarget是监听函数的对象
- ele.onclick=的函数执行时冒泡，但是这是与同是使用 .onclick 的语法比，与addEventListener比是谁先定义谁先执行
- 直接在html里指定onclick属性是谁先定义谁先执行，基本上就是捕获了
- 在自己元素上同事监听冒泡和捕获，哪个先注册就先执行哪个
- event.preventDefault() 来阻止事件的默认行为，如阻止`<a>`的click。但是只有e.cancelable为true时才能阻止
- event.stopPropagation阻止事件的传播，即阻止捕获或冒泡
- event.eventPhase 看事件是哪个阶段 1捕获,2自身,3冒泡
- blur与focus不冒泡，focusin与focusout冒泡，不冒泡的会先于父类的捕获执行
- 鼠标位置，clientX,clientY和pageX,pageY和screenX,screenY
- keydown, keyup事件有 event.keyCode 对应键盘按钮
- DOMContentLoaded: DOM树完成事件，比window.onload快
- event.persisted为true时可以配合pageshow, pagehide使用
- createEvent与dispatchEvent新建和触发事件，e.initMouseEvent("click",false,false);
- event.isTrusted：事件被用户调用时为可信事件，如果是被脚本语言调用，为不可信事件
- -事件优化
	- 缺陷：
		- 处理函数多会占用内存
		- 必须实现指定所有处理方法导致dom遍历多，延迟页面就绪时间
	- 优化方法：
		- 事件委托(捕获/冒泡)
		- 移除事件程序，比如innerHTML会移除dom，但事件监听仍与dom保持引用关系
- addEventListener第三个参数不仅是bool值，还支持对象
  - capture 表示listener会在该类型的事件捕获阶段传播到该EventTarget 时触发。
  - once 表示listener在添加之后最多只调用一次。如果是 true，listener会在其被调用之后自动移除。
  - passive 表示listener永远不会调用preventDefault()。如果listener仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。
	
#### **表单**
- input和textarea 选中文本，.select()，.setSelectionRange(start,end) — 这个必须先focus
- beforecopy,copy,beforecut,cut,paste事件，copy可以禁止别人复制文本 event.clipboardData  setData、getData、clearData
- H5属性：
	- require;  type=“email”/“url”;
	- type=“number”时，min,max.step
	- pattern 接受一个正则表达式
	- checkValidity(): 所有表单字段都有
	- novalidate：禁用验证
- 富文本编辑：
	- 1、iframe设置 designMode = “on”
	- 2、普通元素设置 contenteditable
- document.execCommand() 可以接受很多指令，包括复制剪切粘贴删除选中等等富文本操作

#### **canvas**
- context.toDataURL(“image/png”) 可以取得画布中的图像(图像不能来自其他域，不懂)
- fillStyle, strokeStyle, strokeReact, clearReact, fillReact, fillText, strokeText
- 绘制路径之前必须先调用：beginPath()
- 变换：rotate, scale, translate, transform, setTransform
- 绘制图像：context.grawImage(imgElement/canvas, x, xx, …)
- 阴影：shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor
- 渐变：
	- 1、content.createLinearGradient(sx, sy, ex, ey) 创建一个渐变区域 gradient
	- 2、gradient.addColorStop(0, ‘red’), gradient.addColorStop(1, ‘blue’)等添加渐变色
	- 3、context.fillStye = gradient
- 模式：
	- 1、context.createPattern(imgElement, “repeat/repeat-x/repeat-y/norepeat”)创建 pattern
	- 2、context.fillstyle = pattern
- 图像数据
	- 1、context.getImageData(x, y, w, h)可以获取 imageData，其中imageData.data是颜色数组，可改
	- 2、context.putImageData(imageData, x, y)可以把imageData写到context去
- 合成：
	- 1、context.globalAlpha可以设置全局透明度
	- 2、context.globalCompositeOperation 表示后绘制的图形怎样与先绘制的图形结合

#### **WebGL与ArrayBuffer**
- 所谓 WebGL，就是指浏览器与显卡之间的通信接口，为了满足 JavaScript 与显卡之间大量的、实时的数据交换，它们之间的数据通信必须是二进制的，而不能是传统的文本格式。
- ArrayBuffer是一段内存中连续的二进制数
- TypedArray与DataView只是试图，本身不包含数据。ArrayBuffer只能由试图操作
- TypedArray成员都是同一个数据类型, TypedArray(buffer, byteOffset=0, length?) 同一个ArrayBuffer对象之上，可以根据不同的数据类型，建立多个视图。 视图还可以不通过ArrayBuffer对象，直接分配内存而生成：const f64a = new Float64Array(8); 参数也可以是一个普通数组：new Uint8Array([1, 2, 3, 4]); 普通数组的操作方法和属性，对 TypedArray 数组完全适用。除了concat
- DataView成员可以是不同的数据类型, setXXX(index, data, true/undefined)用来写入数据
- WebGL再看

#### **HTML5**
- postMessage(data, “origin”),  addEventListener("message”, e => {})
- history:
	- .pushState(data, “name”, url), .replaceState(data, “name”, url)
	- 返回时会监听到 popstate，可以在这里把数据重置成之前的状态
	- 确保pushState创建的假URL在服务器上有对应真的，不然刷新会404

#### **拖放**
- 被拖对象：dragstart, drag, dragend
- 被放的地方：dragenter, dragover, dradleave, drop
- 阻止被放对象的dragenter和dragover默认时间就可以触发drop事件
- event.dataTransfer对象保存了被拖对象向被放对象传递的  text/url或者MIME 数据
	- 可以在 dragstart里 .setData(), 在 drop 事件中读取
	- .setDragImage(el, x, y) 可以设置在鼠标下显示的图像
	- .dropEffect：被拖对象能够执行那种放置行为，必须搭配 effectAllowed，在dragenter设置可以控制鼠标显示
	- .effectAllowed：表示允许拖动元素的那种dropEffect  // 这两玩意好像没什么效果
- 标签的 draggable 属性可以设置拖动
- event.dataTransfer.files 可以获取拖拽过来的文件

#### **XML**
- new DOMParser().parseFromString(str)  把xml字符串转为DOM文档
- new XMLSerializer().serializeToString(xmldom)  把dom转为xml字符串

#### **JSON**
- json 中不支持 js 的undefined，函数，变量，对象实例，对象键名必须加双引号
- json简单值可以是 5, “aaa”之类直接值
- json里必须使用双引号，单引号会导致语法错误
- JSON.stringify(obj, Array / Function, n) 
	- 第二个参数用来过滤，只显示数组里包含的属性或返回函数返回值, 如果函数返回undefined就是忽略相应的属性
	- 第三个是费否缩进，如果是数字就是缩进的空格数(也就是会换行，换行后缩进多少)，如果是字符串，缩进就用这个代替空格
- 解析顺序：
	- 1、如果存在toJSON()方法且能取到有效值就取值，否则返回对象本身
	- 2、第1步的值传入第二个参数
	- 3、序列化第二部返回的值
	- 4、使用第三个参数格式化
- JSON.parse(str, Function)，第二个参数是函数也接受key和val两个参数，用来处理返回值，如果返回undefined就是删除这个字段
- JSON更轻量，简化了表示复杂数据结构。XML创建DOM、索引值都很麻烦

#### **AJAX与Comet**
- 步骤：
	- 1、var xhr = new XMLHttpRequest()
	- 2、xhr.onreadystatechange = Function, xhr.readyState有0~4一共5个状态，=4是完成，每次变化都会触发onreadystatechange
	- 3、xhr.open(type, url, bool)第三个参数是否异步发送
	- 4、xhr.send(data)
	- 5、xhr.abort() //取消
- xhr对象有：responseText, responseXML, status, statusText等属性
	- .overrideMimeType可以重写返回的MimeType
- header:
	- Accept和三个Accpet-xxx(字符，编码，语言)
	- Connection 与服务连接类型，keep-alive/close
	- Cookie
	- Host
	- Referer：发出请求的页面URI
	- User-Agent
- xhr.setRequestHeader(name, value) 可以设置头
- xhr.getRequestHeader(name) 可以获取服务响应的header的具体值
	- .getAllRequestHeaders() 获取所有，是多行文本内容
- 把header里Content-Type设置为application/x-www-form-urlencode可以模仿发送表单提交
	- new FromData(formElement)  或者.append(name, val)，send(data)可以不必手动设置Content-Type
- loadstart, progress, error, abort, load, loadend
	- progress可以监听进度，其参数event有:
	- .lengthComputable(进度信息是否可用)
	- position (已经接收的字节数)
	- totalSize（Response Header 里 Content-Length预期字节数）
- Comet是服务保持连接不断周性的想浏览器发消息，xhr.readyState周期性的变为3，整个页面只有一个http连接 SSE 服务发送事件

#### **跨域**
- 原理使用自定义的http头部与服务器沟通，从而决定应不应该响应
	- 1、web发送请求时，给header添加一个Origin，这是浏览器做的，自己不要弄
	- 2、服务在Access-Control-Allow-Oringin里面设置允许的Origin或 * 
		- Access-Control-Allow-Methods,
		- Access-Control-Allow-Headers, 
		- Access-Control-Max-Age,
		- Access-Control-Allow-Credentials
	- 3、请求头和响应都不包含cookie
	- 4、不能使用setRequestHeader
	- 5、getAllRequestHeaders 获取到的是空字符串
- 预检请求（Preflighted Request）
	- 1、简单请求不会触发，如：GET, HEAD
	- 2、默认跨域请求不带cookie，设置withCredentials,且服务设置Access-Control-Allow-Crendenttials
- 其他跨域技术：
	- 1、new Image()对象
	- 2、JSONP 动态创建`<script>`给url拼一个回调函数名。与image比，能直接访问响应文本。缺点：会夹杂恶意代码，状态不确定
	- 3、websocket:open(),send(), .close(),onmessage,onopen,onerror,onclose

#### **安全**
- CSRF：自己没权限假装有权限去调接口
	- 解决：1、SSL，2、验证码
	- 徒劳：1、POST代替GET，2、URL来源可以被伪造，3、cookie 也容易伪造

#### **高级技巧**
- 利用Object.prototype.toString检测数据类型，代替instanceof，后者在跨窗口有问题
- 作用域安全的构造函数，多一层instanceof判断，避免污染全局对象
- 惰性载入函数：
	- 1、调用函数时走了一遍 if 语句后将自己(函数)=另一个以后会执行的正确的函数
	- 2、加载时就用立即执行函数判断 if 然后返回正确的函数
- 绑定this：
	- bind：返回一个绑定作用域的函数，自身不变。第二个及后面的参数作为柯理化预设置的参数
	- call：在一个作用域上执行，第二个及后面的参数作为函数的参数
	- apply：在一个作用域上执行，第二个参数一个数组，包含了传给函数的参数
- 柯理化：
	- 1、通过一个函数，为这个函数设置好数个参数。比如为其指定this
	- 2、ES5的 bind 实现了函数柯理化
- 防篡改对象
	- 1、不可扩展对象：Object.preventExtensions(obj)  不能添加属性，属性能被删除或者改值
	- 2、密封对象：Object.seal(obj)  不能添加属性且不能被删除，属性能被改值
	- 3、冻结对象：Object.freeze(obj)  不能添加属性且不能被删除且不能改值
- setTimeout可以切割运算量大的内容，如循环执行数组，就循环放进setTimeout
- 节流：使用 setTimeout 确保每次操作后隔一段时间后执行，避免疯狂执行
- EventBus：一个对象，向里面添加一个 key 和监听函数，这个对象触发这个 key 并传递出参数。其实就是创建一个事件数组，里面将 key 和引用了的函数对应，触发的时候根据 key 搜索到这个函数并触发他

#### **离线存储**
- cookie：
	- 1、4095B（5k不到），cookie httponly时js读不到
	- 2、名，值，域，路径，时间，安全标志（SSL时才发cookie）
	- 3、cookie会在http请求头中带走，会影响性能，不要太大
	- 4、expires(GMT时间)已被max-age(秒)代替，不设置默认浏览器会话结束删除
- Storage:
	- 1、只能存储string，存对象会变成调用对象的 toString()
	- 2、localStorage 要求同源
	- 3、大小 5M， chrome 和 safari 是 2.5M

#### **性能**
- 作用域：
	- 避免全局查找
	- 避免with语句
	- 避免不必要的属性查找
- 优化循环：减值迭代，简化终止条件，简化循环体，使用后测试循环（do-while）
- 展开循环：多次调用函数比循环调用效率高
- 避免双重解释：eval, function 和 setTimeout传字符串
- 最小化语句数：
	- 1、在一个声明语句里用逗号声明多喝变量
	- 2、在一行进行 ++ / —操作，不要另起一步
	- 3、使用数组和对象字面量
- 优化DOM交互：
	- 1、减少DOM更新，使用DocumentFragment文档片段一次性操作
	- 2、innerHTML代替creatElement，因为前者是系统创建DOM，后者是jsDOM调用
	- 3、使用事件代理(冒泡)减少页面包含的处理程序
	- 4、HTMLCollection（DOM伪数组）类型每次取值都会查一遍，可以复制到一个变量

#### **新兴API**
- 动画：
	- 1、最佳间隔 17ms，但是setTimeout精度不高，chrome大约4ms，而且无法知道屏幕重绘
	- 2、requestAnimationFrame会告诉浏览器有动画了，浏览器在重绘屏幕前调用。第二个参数是dom，告诉他重绘发生在那个区域提高效率
	- 3、cancelAnimationFrame用来取消动画
- 页面可见：document.hidden，document.visibilityState，document监听 visibilitychange 事件
- 定位：navigator.geolocation
	- 1、getCurrentPosition(successcb, errorcb, j是否高精度)
	- 2、watchPosition 跟踪定位，参数同上
- File API：
	- 1、File的属性  name, size, type, lastModifedDate(上次被修改时间)
	- 2、方法：slice(start, end)
- FileReader：异步读取文件，类似 xhr
	- 1、readAsDataURL(base64)，readAsText，readAsArrayBuffer，readAsBinaryString
	- 2、可以读file，也可以读blob
	- 3、事件：load, error, progress(lengthComputable, loaded,total)，abort，loadend
	- 4、.abort()取消
- 对象URL
	- 1、引用保存在File或Blob中的数据的URL，有时候只是为了显示本地图片什么的用URL就行，而不必js读取整个文件
	- 2、window.URL.createObjectURL(file)返回一个url，记得window.URL.revokeObjectURL(url)释放内存
- XHR上传文件：data = new FormData(), data.append(“name”, files[i]), xhr.send(data)
- window.performance对象给出页面加载和渲染的很多信息，怼性能优化有意义
- Web Workers
	- 1、new Worker("./worker.js")
	- 2、outer.onerror，outer.onmessage，outer.postMessage(data)，outer.terminate() //终止后任何事件都不触发
	- 3、self.onmessage，self.postMessage，self.close() //与outer.terminate()一样效果
	- 4、importScripts(a, b) 可以引入js
	- 5、worker不能访问DOM，this和self都指向worker对象本身，很多东西不能访问，能访问的有：XHR, 只读location，setTimeout兄弟，navigator.onLine和ua等

### ES6补充

#### **Class**
- 类的内部所有定义的方法，都是不可枚举的
- 类和模块的内部，默认就是严格模式
- constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
- 实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
- 类不存在变量提升
- 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用
- 如果静态方法包含this关键字，这个this指的是类，而不是实例,父类的静态方法，可以被子类继承。
- 类里面使用 xx = xx 是实例属性与方法，使用 name() 是原型链上的，两者不一样，且前者需要babel之类
- 子类必须在constructor方法中调用super方法，否则子类取不到this 会报错,子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例
	- ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面		（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方	法），然后再用子类的构造函数修改this。
- super可以作为：父类构造函数，父类，父类原型对象。super.xx 执行的时候后，相当于 super.xxx.call(this)，被调用的super.xx内的this是子类实例对象
- 子类的__proto__属性，表示构造函数的继承，总是指向父类。子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
- **ES5 是先新建子类的实例对象this，再将父类的属性添加到子类上，由于父类的内部属性无法获取，导致无法继承原生的构造函数。ES6 是先新建父类的实例对象this，然后再用子类的构造函数修饰this，使得父类的所有行为都可以继承。
- 拷贝时用 Object.getOwnPropertyDescriptor 与 Object.defineProperty，不要直接赋值。ES6模块要保证导出的东西已经定义了，因为引用的文件里再引用自己时不会执行，而是默认引用已存在，可以用函数声明解决这个问题，因为函数声明会提升

#### **Deorator修饰器**
- 修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。
- 修饰类：一个参数（目标类）
- 修饰方法：三个参数（目标类的原型对象，属性名，属性描述）
- 修饰器不能用于函数，因为函数会提升
- babel-preset-stage-0

#### **import与require**
- defer是“渲染完再执行”，async是“下载完就执行”。另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。浏览器对于带有type="module"的`<script>`，都是异步加载，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，等同于打开了`<script>`的defer属性。`<script>`的async属性也可以打开，这时只要加载完成，渲染引擎就会中断渲染立即执行。执行完成后，再恢复渲染。
- ES6 模块之中，顶层的this指向undefined；CommonJS 模块的顶层this指向当前模块，这是两者的一个重大差异。arguments,require,module,exports,__filename,__dirname 在 ES6模块中都不存在
- CommonJS 模块遇到循环加载时，返回的是当前已经执行的部分的值。最好是先引入后取值，避免require().xx

#### **CommonJS与AMD**
- CommonJS 每个文件就是一个模块
- require()获取module时，Node会根据module.id找到对应的module，并返回module. exports
- CommonJS是同步的，Node环境代码在磁盘没问题，浏览器就不行了，所以有AMD异步模块定义
- require.js会首先加载一个入口js文件，默认路径与入口文件在一起，模块必须采用特定的define()函数来定义，如果这个模块还依赖其他模块，那么define()函数的第一个参数，必须是一个数组，指明该模块的依赖性
- require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，还有一个shim属性，专门用来配置不兼容的模块。具体来说，每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。
- 过程：创建script标签，模块的URL添加到src里，并绑定onload，onreadystatechange，onerror事件，将script插入DOM树中开始加载。将模块的URL，依赖列表，状态等构建一个检测对象数组，供第二步检测用。
- export， exports， module.exports 区别: module.exports是CommonJS的。为了方便，Node为每个模块提供一个exports变量，指向module.exports export是ES6的

#### 问题
- 有哪些跨域的方法，设置 document.domain有用吗 在同一个一级域名下才行，子域1请求子域2，子域1吧document.domain=一级域meta标签怎么玩
- encodeURI与encodeURIComponent 区别 encodeURI：任何保留字符都有特殊意义不会编码，只编码在uri不该出现的字符 encodeURIComponent：任何保留字符都是普通文本都必须编码
- 进程与线程的区别 一对多关系，一个进程有多个线程，线程只能属于一个进程。 进程：类似一个应用程序，资源分配的最小单位。拥有独立的堆栈空间和数据段，系统开销比较大。 线程：多线程你懂的，程序执行的最小单位。拥有独立的堆栈空间，但是共享数据段。 进程安全性比较高，也因为进程有独立的地址空间，通信麻烦。 多机分布的用进程，多核分布用线程
- SVG 与 Canvas两者间的区别 SVG 是一种使用 XML 描述 2D 图形的语言。 Canvas 通过 JavaScript 来绘制 2D 图形。 SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。 在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。 Canvas 是逐像素进行渲染的。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。
- 默认情况下, fetch 不会从服务端发送或接收任何 cookies。credentials: 'include'


#### 其他
- preload 是告诉浏览器页面必定需要的资源，浏览器一定会加载这些资源
- prefetch 是告诉浏览器页面可能需要的资源，浏览器不一定会加载这些资源
- prerender预渲染虽然可以提高页面的加载速度，但是要确保该页面百分百会被用户在之后打开，否则就白白浪费资源去渲染

#### 浏览器渲染引擎
- 解析HTML构建DOM树
- 根据css样式表，生成带样式数据的DOM渲染树
- 布局阶段（float，position，margin等）
- 绘制阶段（color，background，text-shadow等）
- 触发了阶段3必然导致重排，然后重绘。所以要尽量避免重排，重绘的代价要少点。

#### 浏览器加载渲染过程
- 自上而下加载，加载过程中解析渲染
- 加载中遇到外部css,img会发出异步请求，不会影响文档加载
- 加载中遇到js文件会挂起渲染进程，要等js加载和执行完，才恢复html渲染线程(因为js会修改DOM,document.write,解决方法是把js引用放在</body>前)
- css加载不影响js文件加载，但却影响js文件的执行，即使js只有一行代码也会造成阻塞(   原因：$(“#id”).width()，js执行前，css必须下载解析完成，这事css阻塞后续js的原因。解决办法：当js不需要依赖css时可以放在头部css前面 )
- 不要在外部调用的js文件中调用运行时间较长的函数，如果一定要用，可以使用setTimeout函数。 原因：浏览器有以上五个常驻线程
	- 1、浏览器GUI渲染线程
	- 2、javascript引擎线程
	- 3、浏览器定时器触发线程（setTimeout）
	- 4、浏览器事件触发线程
	- 5、浏览器http异步请求线程（.jpg <link />这类请求） 这里也涉及到 阻塞 的现象，当js引擎线程（第二个）进行时，会挂起其他一切线程，这个时候3、4、5这三类线线程也会产生不同的异步事件（这句话不懂啊），由于 javascript引擎线程为单线程，所以代码都是先压到队列，采用先进先出的方式运行，事件处理函数，timer函数也会压在队列中，不断的从队头取出事件，这就叫：javascript-event-loop。
- 现代浏览器存在 prefetch 优化，浏览器会另外开启线程，提前下载js、css文件，需要注意的是，预加载js并不会改变dom结构，他将这个工作留给主加载。
- 如果js不会改变文档，可以在script标签加 defer 使浏览器先在加载后面的文档
#### 解析
- html文档解析生成解析树即dom树，是由dom元素及属性节点组成，树的根是document对象。
- css解析将css文件解析为样式表对象。该对象包含css规则，该规则包含选择器和声明对象。
- js解析因为文件在加载的同时也进行解析，详看js加载部分。
#### 渲染
- 渲染最大的一个困难就是为每一个dom节点计算符合他的最终样式。
- `#test p{ color:#999999}`遍历是自右向左，也就是先查询到p元素，再找到上一级id为test的元素。css解析时，生成的样式对象，从树的低端向上遍历。
- 样式数据是非常大的结构，保存这样是的数据是很耗内存
- 选择器迭代太深，造成太多的无用遍历
- 样式规则涉及非常复杂的级联，定义了规则的层次
- 渲染过程中，webkit使用一个标志位标志所有顶层样式都已经被加载完毕，如果dom元素进行attach时，css元素并没有被加载完毕，则放置占位符，并在文档中标记，当样式表加载完毕，则重新进行计算。 说明：文档的渲染还是要等待顶层css加载完毕。
- 页面的渲染 需要首先生成dom树，再由css生成CSSOM，最后两个一起生成render tree。

#### event-loop
- 所有同步任务在主线程执行栈执行
- 主线程之外有一个任务队列(事件/消息队列)，异步任务有了结果就会在任务队列中添加一个事件，表示异步任务可以进入执行栈了。只要指定过回调函数，事件发生时就会进入任务队列，等待主线程读取。任务队列是先进先出的队列，
- 主线程中所有同步任务执行完之后会，读取任务队列，异步任务进入执行。由于存在"定时器"，主线程首先要检查一下执行时间，某些事件只有到了规定的时间，才能返回主线程。 问题：主线程空的时候查看队列，如果主线程一直不空队里里的异步操作就一直延后吗？ 答：执行栈中的代码（同步任务），总是在读取"任务队列"（异步任务）之前执行。
- 定时器：setTimeout(fn,0)的含义是，指定某个任务在主线程最早可得的空闲时间执行，也就是说，尽可能早得执行。它在"任务队列"的尾部添加一个事件，因此要等到同步任务和"任务队列"现有的事件都处理完，才会得到执行。要是当前代码耗时很长，有可能要等很久，所以并没有办法保证，回调函数一定会在setTimeout()指定的时间执行。
node-event-loop
- process.nextTick方法可以在当前"执行栈"的尾部----下一次Event Loop（主线程读取"任务队列"）之前----触发回调函数。
- setImmediate方法则是在当前"任务队列"的尾部添加事件，类似setTimeout(f,0);
- 其实 异步队列有两个，一个大的一个小的，先佬小的再佬大的。所以正确的一次 Event loop 顺序是这样的
	- 执行同步代码，这属于宏任务
	- 执行栈为空，查询是否有微任务需要执行
	- 执行所有微任务
	- 必要的话渲染 UI
	- 然后开始下一轮 Event loop，执行宏任务中的异步代码
	- node 环境有一个 process.nextTick 会先于其他 microtask 执行。