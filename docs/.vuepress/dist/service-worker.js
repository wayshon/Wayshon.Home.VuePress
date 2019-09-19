/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2016/CodePush使用调研.html",
    "revision": "2ad2e1dce3008a95f9a46dd517a5329c"
  },
  {
    "url": "2016/Cordova搭配Vue开发混合app实践.html",
    "revision": "967dfe08a32f713de4d34cce46c0d9f0"
  },
  {
    "url": "2016/ES6学习笔记.html",
    "revision": "5f70f78c6c10501d4a269ba89dddcddf"
  },
  {
    "url": "2016/iOS-sqlite3外键级联删除问题解决.html",
    "revision": "df26fd50ce78bbe069c26b773d42d5a9"
  },
  {
    "url": "2016/iOS自带的宏.html",
    "revision": "e4a7ef5e305e5c3fede702c434b77f4a"
  },
  {
    "url": "2016/iOS获取当前屏幕的视图控制器.html",
    "revision": "0da2b94b3e100f79c5c7aef4a8e55f02"
  },
  {
    "url": "2016/使用FMDB事务批量存入数据.html",
    "revision": "0221f7a1d60facd478d7f82a60768f45"
  },
  {
    "url": "2016/栈,堆,全局区,常量区,代码区的区别.html",
    "revision": "aff19876d4b1f16ca1b4039f0a00b6cf"
  },
  {
    "url": "2017/git使用笔记.html",
    "revision": "daeffe3076f6d13653bfe2d871dd3be5"
  },
  {
    "url": "2017/js_addEventListener&removeEventListener.html",
    "revision": "b30b97e0a767374aa341fbe9f135c9b4"
  },
  {
    "url": "2017/js_event-loop.html",
    "revision": "afe2ab24749b50b6098987033796ca2c"
  },
  {
    "url": "2017/再学vue.html",
    "revision": "de183314539e8f07d1558f959ff861ee"
  },
  {
    "url": "2017/判断浏览器终端.html",
    "revision": "d30cb7bd9e977e1fe0f86b78b62d57ea"
  },
  {
    "url": "2017/正则小记.html",
    "revision": "8beab612c1d81a1fed439c3fecfc7a1d"
  },
  {
    "url": "2017/浏览器渲染流程.html",
    "revision": "3558ceea30d565416ecaa32b7aa8bdf1"
  },
  {
    "url": "2017/蝴蝶书学习笔记.html",
    "revision": "f1c81a5f24d6399c2dc732ce68dfdb27"
  },
  {
    "url": "2018/JavaScript常见排序.html",
    "revision": "a9da3b13c17a6470ea5ad3722182550f"
  },
  {
    "url": "2018/Review_JavaScript.html",
    "revision": "1d81df0232e0bb3c7845309caad6c9a2"
  },
  {
    "url": "2018/virtual-dom-learning.html",
    "revision": "637d083aada5fa3fbd8451844d4c049c"
  },
  {
    "url": "2018/样式小记.html",
    "revision": "6c9c4acf42fefc87267d1c3f07fe0982"
  },
  {
    "url": "2018/网络请求相关.html",
    "revision": "686f7acab5ea3610c626a8c9b7be44a8"
  },
  {
    "url": "2019/ios-app内页面添加到桌面.html",
    "revision": "6be5a0e3700da60f34f8a5e97d1252c9"
  },
  {
    "url": "2019/ReactNative是怎么在iOS上跑起来的.html",
    "revision": "9fcec40f606afb0d515cb98fd863cc8c"
  },
  {
    "url": "2019/前端页面优化常见方法.html",
    "revision": "9be3010a276e9cba9fa10d2c8978693a"
  },
  {
    "url": "2019/面试-扑克牌问题.html",
    "revision": "fced1a9d228ef42d3e2e2df67621b54b"
  },
  {
    "url": "404.html",
    "revision": "5e858fbc7fcf564dbb06adc961f793d7"
  },
  {
    "url": "about.html",
    "revision": "72a549a5a395d5bf388b68cac8d74d2a"
  },
  {
    "url": "archives.html",
    "revision": "b24aedce5a1cb2c6e180dfb5fbb57df7"
  },
  {
    "url": "assets/css/0.styles.f9ac1508.css",
    "revision": "9bb6b9f88c684f84f2eb3ace755e382e"
  },
  {
    "url": "assets/img/1.b4247d2a.jpeg",
    "revision": "b4247d2ae34a944bd6a049e0e77fb637"
  },
  {
    "url": "assets/img/buildproject.aad4a1da.png",
    "revision": "aad4a1da79e95954bde9b26cf0581c77"
  },
  {
    "url": "assets/img/CSP-Policy.141dffc7.png",
    "revision": "141dffc7293a7a1e3be9a92520fdc38b"
  },
  {
    "url": "assets/img/CSP-Value.f0602763.png",
    "revision": "f0602763b666d61d38f701e291e78805"
  },
  {
    "url": "assets/img/diffbykey.b956b11f.png",
    "revision": "b956b11fbca5e88ff7793d11a7f6130a"
  },
  {
    "url": "assets/img/DisplayName.ea88342b.png",
    "revision": "ea88342ba4664b323b89d777eae39f7f"
  },
  {
    "url": "assets/img/finishproject.671bf924.png",
    "revision": "671bf9243653692ed11c3451330f23bb"
  },
  {
    "url": "assets/img/openproject.d8473f24.png",
    "revision": "d8473f2406c4fa4a0c796b3059c8610d"
  },
  {
    "url": "assets/img/Screenshot-1.d14dd380.jpeg",
    "revision": "d14dd3803a8b12756d65e60ae262f8db"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/signproject.0ca0eb63.png",
    "revision": "0ca0eb63571bed537e235c38188289f9"
  },
  {
    "url": "assets/js/10.a1463f4d.js",
    "revision": "9249d7f5f2ac3b0e0ebf7ea53f21c46a"
  },
  {
    "url": "assets/js/11.0f23786d.js",
    "revision": "c762b98263f44c0fc2bc856889c53e6f"
  },
  {
    "url": "assets/js/12.b6ac3c62.js",
    "revision": "034a2b60abdab5eac4fbb4b941d02964"
  },
  {
    "url": "assets/js/13.0a873728.js",
    "revision": "ced2ca5db97d8fb9470fb2bc169d4538"
  },
  {
    "url": "assets/js/14.d66ec5b5.js",
    "revision": "0d729538e45152f5b59deb65a6219876"
  },
  {
    "url": "assets/js/15.18c3f768.js",
    "revision": "abd470bf5d1f19e7147802f39c8b1d3b"
  },
  {
    "url": "assets/js/16.be6d1db6.js",
    "revision": "e7c31d2bf0316b159f2912f2bb856c25"
  },
  {
    "url": "assets/js/17.75063791.js",
    "revision": "2b901e8a0fa07e82b4b4b6b5e7fbea21"
  },
  {
    "url": "assets/js/18.7866a475.js",
    "revision": "1010ebcc008f7d442678b28f32eeace7"
  },
  {
    "url": "assets/js/19.1b9ffe2f.js",
    "revision": "4ab729e1afcd529396977ff587a0d50d"
  },
  {
    "url": "assets/js/2.ad724631.js",
    "revision": "5845fa9c1664dd910a4d73de3eeff2d1"
  },
  {
    "url": "assets/js/20.a02f8b3d.js",
    "revision": "2cda664619ad7ff5a65763b7703c635a"
  },
  {
    "url": "assets/js/21.2ad52840.js",
    "revision": "67b477da83bcbf5bb85eb796e8f30bff"
  },
  {
    "url": "assets/js/22.cd704cd7.js",
    "revision": "c47bcad58ba2f1a57f97042b127ca066"
  },
  {
    "url": "assets/js/23.81623b02.js",
    "revision": "6e79e1ae65d0545eb8efdc19e391df1d"
  },
  {
    "url": "assets/js/24.714ad0c5.js",
    "revision": "dee168ce588e355a20267635a7ba13eb"
  },
  {
    "url": "assets/js/25.e38acae9.js",
    "revision": "e57d7d0f7d5a22671990fe92913d6c1d"
  },
  {
    "url": "assets/js/26.dab80aeb.js",
    "revision": "aaab4d2ce13225f82b34f57e7e2a9a88"
  },
  {
    "url": "assets/js/27.6f4a84fb.js",
    "revision": "f27520fce7819db5446bf3db624c6733"
  },
  {
    "url": "assets/js/28.5372ed9e.js",
    "revision": "3b3ec3acb74ae58b3b7117c41424f235"
  },
  {
    "url": "assets/js/29.6e0b63e2.js",
    "revision": "b1e4a0b2bde17ab9ebeaff43ef38e7d3"
  },
  {
    "url": "assets/js/3.64d466ff.js",
    "revision": "9d63d7fe7e1c94f4ace911a3d5f55fb1"
  },
  {
    "url": "assets/js/30.fa332ea9.js",
    "revision": "0cc6f04a8030f2d4c11252bbd26ecc83"
  },
  {
    "url": "assets/js/31.8423efa2.js",
    "revision": "35c262ea6ece83d38ee7287cb9247b27"
  },
  {
    "url": "assets/js/4.471c3b1e.js",
    "revision": "0c5244ad834d4e14847c4c5c8cd99e06"
  },
  {
    "url": "assets/js/5.a555c5a5.js",
    "revision": "5d35ed0d8090845f720bab2f12e683d9"
  },
  {
    "url": "assets/js/6.9047f23f.js",
    "revision": "3ba8b01d6a5ee237183d7d6699a75487"
  },
  {
    "url": "assets/js/7.a73d04f8.js",
    "revision": "01da8760ae9c8ec51aa150380272b33b"
  },
  {
    "url": "assets/js/8.a3ca97f3.js",
    "revision": "2b70af8e54b6dc84a89a1459584c7ec0"
  },
  {
    "url": "assets/js/9.e6fc97eb.js",
    "revision": "ee6dcef8139b152a93c1473a4a9ad9bf"
  },
  {
    "url": "assets/js/app.19ba9311.js",
    "revision": "d7638147a0548f4aced5df64da109f22"
  },
  {
    "url": "index.html",
    "revision": "d5e74c81f55e92c02b3eb282d24c649f"
  },
  {
    "url": "me.png",
    "revision": "ae2e0a6c5ab4059cfd2de0d3c8aace92"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
