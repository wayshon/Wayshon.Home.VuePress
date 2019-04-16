## 再学vue
`2017-07-25`

- 不要在实例属性或者回调函数中（如 `vm.$watch('a', newVal => this.myMethod())`）使用箭头函数。因为箭头函数绑定父上下文，所以 this 不会像预想的一样是 Vue 实例，而是 `this.myMethod` 未被定义。
- “Mustache” 语法（双大括号）中的js只能包含单个表达式，双大括号会将数据解释为纯文本，而非 HTML 。为了输出真正的 HTML ，你需要使用 `v-html` 指令。通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。
- Vue 2.x 中，过滤器只能在 mustache 绑定和 `v-bind` 表达式（从 2.1.0 开始支持）中使用，因为过滤器设计目的就是用于文本转换。为了在其他指令中实现更复杂的数据变换，你应该使用计算属性。过滤器还可以串联。过滤器是 JavaScript 函数，因此可以接受参数。
- 计算属性：
  - 我们可以通过调用表达式中的method来达到同样的效果：`{{` reverseMessage() `}}`，计算属性是基于它的依赖缓存，computed: {now: function () {return Date.now()}}Date.now() 不是响应式依赖。相比而言，每当重新渲染的时候，method 调用总会执行函数。如果你不希望有缓存，请用 method 替代。
  - 计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter 。
  - 虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的 watcher 。这是为什么 Vue 提供一个更通用的方法通过 watch 选项，来响应数据的变化。当你想要在数据变化响应时，执行异步操作或开销较大的操作，这是很有用的。
- class与style绑定:
  - `v-bind:class="{ active: isActive, 'text-danger': hasError }"`
  - `v-bind:class=“classObject" data: {classObject: {active: true,'text-danger': false}}`
  - 也可以在这里绑定返回对象的计算属性
  - `v-bind:class="[activeClass, errorClass]” data: {activeClass: 'active',errorClass: 'text-danger'}`
  - 当你在一个定制的组件上用到 class 属性的时候，这些类将被添加到根元素上面，这个元素上已经存在的类不会被覆盖。
- v-if v-show
  - v-show不支持template写法（即不能同时控制多个同级连续div）
  - Vue 尝试尽可能高效的渲染元素，通常会复用已有元素而不是从头开始渲染。
  - 如果不要复用元素，添加一个属性 key，key 必须带有唯一的值。
  - 使用key，它会基于key的变化重新排列元素顺序，并且会移除key不存在的元素。
- v-for
  - 循环数组：(item, index) in items 第一个为数组成员，第二个是索引
  - 循环对象：(value, key, index) in obj 第一个为值，第二个为键，第三个为索引
  - 建议尽可能使用 v-for 来提供 key ，除非迭代 DOM 内容足够简单，或者你是故意要依赖于默认行为来获得性能提升。
- 事件处理:有时需要在出发的方法中访问原生 DOM 事件。可以用特殊变量 $event 把它传入方法。
- 表单
  - 你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步：`<input v-model.lazy="msg" >`
  - 如果想自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个修饰符 number给 v-model 来处理输入值：`<input v-model.number="age" type="number">`这`通常很有用，因为在 type="number" 时 HTML 中输入的值也总是会返回字符串类型。
  - 如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入：`<input v-model.trim="msg">`
  - 每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 prop 。
  - 有时候，你可能想在某个组件的根元素上监听一个原生事件。可以使用 .native 修饰 v-on 。
  - v-model仅仅是一个语法糖。要让组件的 v-model 生效，它必须：
    - 接受一个 value 属性
    - 在有新的 value 时触发 input 事件
- 除非子组件模板包含至少一个 `<slot>` 插口，否则父组件的内容将会被丢弃。当子组件模板只有一个没有属性的 slot 时，父组件整个内容片段将插入到 slot 所在的 DOM 位置，并替换掉 slot 标签本身。
- 最初在 `<slot>` 标签中的任何内容都被视为备用内容。备用内容在子组件的作用域内编译，并且只有在宿主元素为空，且没有要插入的内容时才显示备用内容。
- `<slot>` 元素可以用一个特殊的属性 name 来配置如何分发内容。多个 slot 可以有不同的名字。具名 slot 将匹配内容片段中有对应 slot 特性的元素。
- `<slot>` 元素自身将被替换。
- 作用域插槽(2.1.0 新增),自组件可以控制布局循环等，父组件可以读取子组件的props值并控制显示的内容,`<component v-bind:is="currentView"></component>`通过控制变量的值(为组件名)，来挂载(显示)哪个组件    ——  还不如用if
- Vue 组件的 API 来自三部分 - props, events 和 slots ：
  - Props 允许外部环境传递数据给组件
  - Events 允许组件触发外部环境的副作用
  - Slots 允许外部环境将额外的内容组合在组件中。
- $refs 只在组件渲染完成后才填充，并且它是非响应式的。它仅仅作为一个直接访问子组件的应急方案——应当避免在模版或计算属性中使用 $refs。如果组件未经 slot 元素传递内容，你甚至可以在组件名后使用 / 使其自闭合：`<my-component/>`
- 组件在它的模板内可以递归地调用自己，不过，只有当它有 name 选项时才可以
- Circular References Between Components(组件的循环引用)：感觉像是二叉树列表，可以展开多级菜单那种
- 尽管在 Vue 中渲染 HTML 很快，不过当组件中包含大量静态内容时，可以考虑使用 v-once 将渲染结果缓存起来
- 用v-once将低级组件只渲染一次，提升性能
- 进阶：
  - 响应式原理
    Vue 遍历data()对象所有的属性并生成getter,setter。
    每个组件实例都有相应的 watcher 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。
    Vue 不能检测到对象属性的添加或删除，需要用vm.$set(obj, key, value)和vm.$(obj, key)
    数组修改某一值也不能检测到，应该使用数组方法
    vue属性必须在 data 对象上存在才能是响应的
    当数据产生变化，vue异步更新DOM
  - Render函数: 用JSX语法编写template组件。.vue -> template -> render `https://github.com/vuejs/babel-plugin-transform-vue-jsx#usage`
- 自定义指令
  - 对纯 DOM 元素进行底层操作。Vue.directive('focus', {inserted: function (el) {el.focus()}})。`<input v-focus>`
  - 第一个参数是指令名，第二个参数是对象，有DOM插入和移除等函数操作，其参数是
  - el：指令所绑定的元素；
  - binding： 一个对象，包含值等属性；
  - vnode：Vue编译生成的虚拟节点；
  - oldVnode：上一个虚拟节点；
  - 除了el还有其他参数，都是只读的，尽量不要修改。
- 混合（Mixin）
  - 混合除了data()，还有created，methods等属性
  - 混合以自己的属性为准，其次是全局属性
- 插件:install = function (Vue, options)
- 生产环境部署:如果在组件渲染时出现运行错误，错误将会被传递至全局 Vue.config.errorHandler 配置函数（如果已设置）
- 服务器端渲染:需要用到服务器端渲染的情况-SEO（搜索引擎优化），客户端的网络比较慢，客户端运行在老的js引擎上

####API部分
- Vue.config.silent = true  取消 Vue 所有的日志与警告。
- Vue.config.errorHandler = function (err, vm) {}   指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 Vue 实例。
- Vue实例的方法：data(),computed,methods等等，不要用箭头函数，否则this不是当前vue实例
- el：挂载目标
- render：字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。render 函数接收一个 createElement 方法作为第一个参数用来创建 VNode。
- beforeCreate：在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
- created：实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
- beforeMount：在挂载开始之前被调用：相关的 render 函数首次被调用。（该钩子在服务器端渲染期间不被调用）
- mounted：el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。（该钩子在服务器端渲染期间不被调用）
- beforeUpdate：数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。 （该钩子在服务器端渲染期间不被调用）
- updated：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。（该钩子在服务器端渲染期间不被调用）
- activated：keep-alive 组件激活时调用。（该钩子在服务器端渲染期间不被调用）
- activated：keep-alive 组件停用时调用。（该钩子在服务器端渲染期间不被调用）
- beforeDestroy：实例销毁之前调用。在这一步，实例仍然完全可用。（该钩子在服务器端渲染期间不被调用）
- destroyed：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。（该钩子在服务器端渲染期间不被调用）
- name：允许组件模板递归地调用自身。注意，组件在全局用 Vue.component() 注册时，全局 ID 自动作为组件的 name。 指定 name 选项的另一个好处是便于调试。有名字的组件有更友好的警告信息。另外，当在有 vue-devtools, 未命名组件将显示成 `<AnonymousComponent>`, 这很没有语义。通过提供 name 选项，可以获得更有语义信息的组件树。
- `Vue.config.delimiters = ['[[', ']]’]`：改变纯文本插入分隔符(`{{ }}`)。 这个选择只有在独立构建时才有用。
- watch：注意：在变异（不是替换）对象或数组时，旧值将与新值相同，因为它们的引用指向同一个对象/数组。Vue 不会保留变异之前值的副本。vm.$watch 返回一个取消观察函数，用来停止触发回调：var unwatch = vm.$watch('a', cb) unwatch()第三个参数是一个选项对象。deep: true  为了发现对象内部值的变化，可以在选项参数中指定 deep: true 。注意监听数组的变动不需要这么做。immediate：在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调
- vm.$off( [event, callback] )：移除事件监听器。
- vm.$forceUpdate()：迫使Vue实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。
- vm.$destroy()：完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。 触发 beforeDestroy 和 destroyed 的钩子。
- v-text 相当于 `{{` text `}}`
- v-pre：跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。
- v-cloak：这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 `[v-cloak] { display: none }` 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。
- keep-alive：include：包含需要被缓存的组件名，如果为空字符串就缓存所有exclude：包含不需要被缓存的组件名，如果为空字符串就缓存所有
- 计算属性是可以赋值的，前提要写set()，默认只有get()
- [ NAME ]这种写法，在定义对象时时取这个变量的值作为键名。单独这么写会返回一个包含这个变量的值的数组

#### vuex笔记
- action可以是异步的，mutation必须是同步的，不然devtools观察不到mutation触发后的异步情况
- store.commit -> 分发 mutation，store.dispatch -> 触发action
    饶了一圈先触发action是为了action可以执行任何异步操作
    mutation 必须同步执行，Action 就不受约束！我们可以在 action 内部执行异步
    操作
    *问：我们的异步回调可以不再action中请求，而是当页面里的回调成功直接commit不是一样的吗，这个时候action也是简单的触发mutation，没有执行任何异步
    而且，感觉异步调接口等方法还是写在各自页面比较好，写在action里太杂乱，易冲突。
    例子：一级平台(action里请求接口传回调函数)，IOE(页面回调里触发改值，action也是同步)
    *答：在action中可以引入所有mutation-type，如果在每个页面自己commit，那每个页面就要引入
    mutation-type，不方便。
    经过dashboard实践，最终发现，在页面里组织参数与回调方法，调用各自的action,action在dispatch封装ajax的action，在各自的action回调中可以触发commit保存至store
- store.dispatch 可以处理被触发的action的回调函数返回的Promise，并且store.dispatch仍旧返回Promise
- Modules:modules是每个模块对象，包含state，mutations，actions，getters。对于模块内部的 getter，根节点状态会作为第三个参数
- Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，context不是store本身，因为它可能存在于局部模块化内。