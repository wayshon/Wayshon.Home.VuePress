## js addEventListener removeEventListener
`2017-08-15`

#### addEventListener,removeEventListener

- addEventListener接受三个参数。
    - 第一个是事件类型，如click,keypress，主意没有on，并且全是小写。
    - 第二个是处理函数，有一个event参数，event包括type,target等等属性。
    - 第三个是bool值，不写是false，false为冒泡事件处理函数，true为捕获事件处理函数。
- removeEventListener接受三个参数。
    - 第一个是事件类型，同上。
    - 第二个是处理函数，必须是注册时同一个函数，传匿名函数没用。如addEventListener的是fun1，removeEventListener也要是fun1
    - 第三个同上
```javascript
var father = document.getElementById("father");
var fatherHandle = function(event) {
    console.log('--------- father -----------')
}
father.addEventListener("click", fatherHandle, false);
father.removeEventListener("click", fatherHandle, false); //有效
father.removeEventListener("click", function(){console.log('-- no --')}, false); //无效
```
    
- 能通过多次调用addEventListener为同一个对象注册同一事件类型的多个处理函数，并且按照注册的顺序调用。但是使用相同参数多次注册无效，只会注册一次。
- 在事件处理函数内，this指向事件目标的节点对象
- 处理函数return false就是阻止默认操作，在`addEventListener`中事件对象的`preventDefault()`取消默认操作
- 事件传播三个阶段：
    - 事件的捕获：由window对象一直到触发的内部对象
    - 事件处理函数：第三个参数为true为捕获函数，false为冒泡处理函数
    - 事件的冒泡：由最里面的对象向外扩散一直到根节点。
- 调用事件对象的`stopPropagation()`方法阻止事件冒泡。如果在同一对象上注册了其他函数，会继续调用，但其他对象上就不会再执行。
- `stopImmediatePropagation()`阻止其他对象的传播也阻止了同一个对象的其他函数执行。
 
```javascript
var father = document.getElementById("father");
var child = document.getElementById("child");
var fatherHandle = function(event) {
    console.log('--------- father -----------')
}
var childHandle = function(event) {
    console.log('--------- child -----------')
}

father.addEventListener("click", fatherHandle, true);
child.addEventListener("click", childHandle, true);
// father - child
```

```javascript
father.addEventListener("click", fatherHandle, false);
child.addEventListener("click", childHandle, false);
// child - father
```

```javascript
var fatherHandle = function(event) {
    console.log('--------- father -----------')
}
var childHandle = function(event) {
    console.log('--------- child -----------')
    event.stopPropagation()
}

father.addEventListener("click", fatherHandle, false);
child.addEventListener("click", childHandle, false);
child.addEventListener("click", function(e){console.log('haha')}, false);
// child haha
```

- 调用顺序
    - 设置对象属性或html属性得注册函数优先调用
    - addEventListener按注册的顺序调用
    - IE 的attachEvent()不按顺序调用，所以代码不应该以来调用顺序
 
```html
<body>
    <h1 id="father">
        father
        <span id="child" onclick="fun()">child</span>
    </h1>
<script>
    var child = document.getElementById("child");
    var childHandle = function(event) {
        console.log('--------- child -----------')
    }
    child.addEventListener("click", childHandle, false);
    var fun = function(e) {
        console.log('--------- property -----------')
    }
    // property - child
</script>
</body>
```
