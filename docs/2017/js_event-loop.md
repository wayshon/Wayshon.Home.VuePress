## js event-loop
`2017-08-15`

#### event-loop

- 所有同步任务在主线程执行栈执行
- 主线程之外有一个任务队列(事件/消息队列)，异步任务有了结果就会在任务队列中添加一个事件，表示异步任务可以进入执行栈了。只要指定过回调函数，事件发生时就会进入任务队列，等待主线程读取。任务队列是先进先出的队列，
- 主线程中所有同步任务执行完之后会，读取任务队列，异步任务进入执行。由于存在"定时器"，主线程首先要检查一下执行时间，某些事件只有到了规定的时间，才能返回主线程。
- 问题：主线程空的时候查看队列，如果主线程一直不空队里里的异步操作就一直延后吗？
    - 答：执行栈中的代码（同步任务），总是在读取"任务队列"（异步任务）之前执行。
- 定时器：setTimeout(fn,0)的含义是，指定某个任务在主线程最早可得的空闲时间执行，也就是说，尽可能早得执行。它在"任务队列"的尾部添加一个事件，因此要等到同步任务和"任务队列"现有的事件都处理完，才会得到执行。要是当前代码耗时很长，有可能要等很久，所以并没有办法保证，回调函数一定会在setTimeout()指定的时间执行。

#### node-event-loop

- process.nextTick方法可以在当前"执行栈"的尾部----下一次Event Loop（主线程读取"任务队列"）之前----触发回调函数。
- etImmediate方法则是在当前"任务队列"的尾部添加事件，类似setTimeout(f,0)。setTimeout优先级比setImmediate高。

#### 补充：

- 后来发现，原来任务队列不止一个，而是有宏任务与微任务之分。如下，我原本以为setTimeout先进队列，promise后进，所以是13524，然而，结果是promise先于setTimeout执行。
- 所以正确的流程是:
    - 浏览器先执行宏任务，即同步代码
    - 遇到setTimeout就塞进下一次事件循环的宏任务
    - 宏任务执行完之后去微任务队列捞，有任务就执行
    - 进行下一次事件循环
```javascript
console.log(1);
setTimeout(() => console.log(2));
new Promise((resolve, reject) => {
    console.log(3);
    resolve();
}).then(() => console.log(4));
console.log(5)
```
借鉴知乎这篇好文：[https://www.zhihu.com/question/36972010/answer/71338002](https://www.zhihu.com/question/36972010/answer/71338002)

#### 原因：
- 有一个事件循环，但是任务队列可以有多个。
- 整个script代码，放在了macrotask queue中，setTimeout也放入macrotask queue。
- 但是，promise.then放到了另一个任务队列microtask queue中。
- 这两个任务队列执行顺序如下，取1个macrotask queue中的task，执行之。
- 然后把所有microtask queue顺序执行完，再取macrotask queue中的下一个任务。
- 代码开始执行时，所有这些代码在macrotask queue中，取出来执行之。
- 后面遇到了setTimeout，又加入到macrotask queue中，
- 然后，遇到了promise.then，放入到了另一个队列microtask queue。
- 等整个execution context stack执行完后，
- 下一步该取的是microtask queue中的任务了。
- 因此，看起来promise.then的回调比setTimeout先执行。

 
#### 其他补充：
- 一个浏览器环境（unit of related similar-origin browsing contexts.）只能有一个事件循环（Event loop），而一个事件循环可以多个任务队列（Task queue），每个任务都有一个任务源（Task source）。
- 相同任务源的任务，只能放到一个任务队列中。
- 不同任务源的任务，可以放到不同任务队列中。（同一个任务队列，能否容纳不同任务源的任务，没说）
- 客户端可能实现了一个包含鼠标键盘事件的任务队列，还有其他的任务队列，而给鼠标键盘事件的任务队列更高优先级，例如75%的可能性执行它。这样就能保证流畅的交互性，而且别的任务也能执行到了。但是，同一个任务队列中的任务必须按先进先出的顺序执行。
- 单独的任务队列中的任务总是按先进先出的顺序执行，但是不保证多个任务队列中的任务优先级，具体实现可能会交叉执行。