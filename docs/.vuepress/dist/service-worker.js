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
    "revision": "129c6bec1fdc4f40ef147ecf38191fed"
  },
  {
    "url": "2016/Cordova搭配Vue开发混合app实践.html",
    "revision": "1bc5be6baecc19562588722cd5f6aec1"
  },
  {
    "url": "2016/ES6学习笔记.html",
    "revision": "a95f9859a7d79cd5435e63b6d4af0e43"
  },
  {
    "url": "2016/iOS-sqlite3外键级联删除问题解决.html",
    "revision": "b83ec532702b87f60407b48241c7307a"
  },
  {
    "url": "2016/iOS自带的宏.html",
    "revision": "6aa4c490c406f68f97b1a284bf7a22e0"
  },
  {
    "url": "2016/iOS获取当前屏幕的视图控制器.html",
    "revision": "47213bc8e5bfd1badcdaa97b9fde6641"
  },
  {
    "url": "2016/使用FMDB事务批量存入数据.html",
    "revision": "4726b12de959143660d6bba58a7d7bee"
  },
  {
    "url": "2016/栈,堆,全局区,常量区,代码区的区别.html",
    "revision": "fcc5c556aa1f4cf00606512b2d1ec72b"
  },
  {
    "url": "2017/git使用笔记.html",
    "revision": "58381c37c578bb7e3dfb1c35b052926e"
  },
  {
    "url": "2017/js_addEventListener&removeEventListener.html",
    "revision": "b3858f86d65230570569d9ca2b255cf3"
  },
  {
    "url": "2017/js_event-loop.html",
    "revision": "86b9363fcede9338399fbedefba54cbb"
  },
  {
    "url": "2017/再学vue.html",
    "revision": "3af94c91a914fcd0cbb13389e5d38e43"
  },
  {
    "url": "2017/判断浏览器终端.html",
    "revision": "8e7e64ef63cb80cb5b465c459b496399"
  },
  {
    "url": "2017/正则小记.html",
    "revision": "d8448d1c67723740ac8600749d45e70d"
  },
  {
    "url": "2017/浏览器渲染流程.html",
    "revision": "a1eadd8c5e9fd39c75ed1db2d5b86b10"
  },
  {
    "url": "2017/蝴蝶书学习笔记.html",
    "revision": "3840924965a0c9a0dd181a488d7aa4a3"
  },
  {
    "url": "2018/JavaScript常见排序.html",
    "revision": "78c26627b7b985ccc392f5f3c624655e"
  },
  {
    "url": "2018/Review_JavaScript.html",
    "revision": "a7e668861a127ff1d89b39b001deeb6b"
  },
  {
    "url": "2018/virtual-dom-learning.html",
    "revision": "d0e1178e69f4dae5c2e0f46974b2aa78"
  },
  {
    "url": "2018/样式小记.html",
    "revision": "3d2cce94563b9957a03907c69f177d4e"
  },
  {
    "url": "2018/网络请求相关.html",
    "revision": "3ad8a8478572874247c024f99cfe1847"
  },
  {
    "url": "2019/ReactNative是怎么在iOS上跑起来的.html",
    "revision": "cb6cf73d7b2bb92124bf1c974a32be0d"
  },
  {
    "url": "2019/前端页面优化常见方法.html",
    "revision": "a7aa0694c68991b0cfa763189de959d5"
  },
  {
    "url": "404.html",
    "revision": "576aebce9a6e9cc4de22a468c29e9499"
  },
  {
    "url": "about.html",
    "revision": "0224ed0174b37538d4051281c4264a6b"
  },
  {
    "url": "archives.html",
    "revision": "572c04eb6eddd5bd5f30424887e023a8"
  },
  {
    "url": "assets/css/0.styles.7719bba6.css",
    "revision": "9ea15421c257b7c2e72a5668b435969f"
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
    "url": "assets/js/10.9eea9f8b.js",
    "revision": "6a5b960b93c2b69cfe6832e98ac9d047"
  },
  {
    "url": "assets/js/11.f145564b.js",
    "revision": "21fcc3932d9a10fb4ab2a8be0c763a3f"
  },
  {
    "url": "assets/js/12.e0c12aab.js",
    "revision": "e37c63b793b45e0e4d18daa544cc44ac"
  },
  {
    "url": "assets/js/13.e19e7229.js",
    "revision": "2e714d5b10a5c296e66b91e7950e5bf8"
  },
  {
    "url": "assets/js/14.07da1458.js",
    "revision": "7e5a204f5df42f587132f3cdd53c111c"
  },
  {
    "url": "assets/js/15.294874d8.js",
    "revision": "2b84a1e845ca4266565d225568d6eb8c"
  },
  {
    "url": "assets/js/16.203c408d.js",
    "revision": "b623b000ab9a2e2e5069d87bde984c18"
  },
  {
    "url": "assets/js/17.5871b4d2.js",
    "revision": "8276d898ed99b1eea245c055a8f8bb0b"
  },
  {
    "url": "assets/js/18.8022f60d.js",
    "revision": "07baef872d73f434b78b4b8cecca8788"
  },
  {
    "url": "assets/js/19.3605e3c3.js",
    "revision": "7b969127dbb7f2f6e943370dbc015960"
  },
  {
    "url": "assets/js/2.4391401f.js",
    "revision": "d0e9f0a8d78637fc6391f254638921a7"
  },
  {
    "url": "assets/js/20.d4087e56.js",
    "revision": "a647c187b188c603630891cb5dcb8413"
  },
  {
    "url": "assets/js/21.62523583.js",
    "revision": "097dbbcc7e920f043fdc199e6aef6cc9"
  },
  {
    "url": "assets/js/22.704d6871.js",
    "revision": "8fb0e823c7b2b40746ded92b7f60ff1e"
  },
  {
    "url": "assets/js/23.f9424164.js",
    "revision": "574dcebf8877fa34a3773c98959bca3b"
  },
  {
    "url": "assets/js/24.b4ae10e3.js",
    "revision": "bd3661273ba494ab09f9ea6048451d05"
  },
  {
    "url": "assets/js/25.f9ffcbc8.js",
    "revision": "14372ab2646d14fce3851b2f2b229761"
  },
  {
    "url": "assets/js/26.c20ae998.js",
    "revision": "8deaf949f2d765dcb11bc9ee9973850d"
  },
  {
    "url": "assets/js/27.6094f64c.js",
    "revision": "0bad34f3eb983737b94d030e4b5ffd4f"
  },
  {
    "url": "assets/js/28.f03b2500.js",
    "revision": "7a141c1f0c78834acdc492a9ea73522c"
  },
  {
    "url": "assets/js/29.91af5d35.js",
    "revision": "b09c2059872e8a4d5f77cba1d9af1f4d"
  },
  {
    "url": "assets/js/3.ccb9546e.js",
    "revision": "d568df7b2f978bb3817294b5e99e99c1"
  },
  {
    "url": "assets/js/4.367d9cf0.js",
    "revision": "162f109903b2150e46803d99be40a653"
  },
  {
    "url": "assets/js/5.3c8e184b.js",
    "revision": "ab4efba31e377577868f42044de616aa"
  },
  {
    "url": "assets/js/6.a76530f8.js",
    "revision": "384a937e3445b93e5b6298f9f1273335"
  },
  {
    "url": "assets/js/7.02b804e6.js",
    "revision": "25c16e8358512243424161fca902059e"
  },
  {
    "url": "assets/js/8.9f1fcc6f.js",
    "revision": "26f0fb74525e928fa82104a444234683"
  },
  {
    "url": "assets/js/9.b6eb2176.js",
    "revision": "4472e0966082c58785552f0f4231a3ad"
  },
  {
    "url": "assets/js/app.8af77d9a.js",
    "revision": "1e76073de31efc6e4767209c758a58de"
  },
  {
    "url": "index.html",
    "revision": "14c03b7748506bf0c8ae52e5ebf0d003"
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
