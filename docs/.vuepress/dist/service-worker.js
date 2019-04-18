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
    "revision": "c9d2eb1486d5de0c479d2c6beaee4406"
  },
  {
    "url": "2016/Cordova搭配Vue开发混合app实践.html",
    "revision": "e0fefc27bb17709b36b439ca9f561195"
  },
  {
    "url": "2016/ES6学习笔记.html",
    "revision": "7396c266f9a39a7ca76499b9112e5a32"
  },
  {
    "url": "2016/iOS-sqlite3外键级联删除问题解决.html",
    "revision": "f1da5b25336a27a40bbb8cc9e6242e5f"
  },
  {
    "url": "2016/iOS自带的宏.html",
    "revision": "1d8ce3f8431717dff2465e6679bbbdc7"
  },
  {
    "url": "2016/iOS获取当前屏幕的视图控制器.html",
    "revision": "839f594ad8de1830b08636459d725198"
  },
  {
    "url": "2016/使用FMDB事务批量存入数据.html",
    "revision": "773cec30409948674d3b451a59b5b456"
  },
  {
    "url": "2016/栈,堆,全局区,常量区,代码区的区别.html",
    "revision": "7bee3956525b96f13ac7ff9bc1adbbdc"
  },
  {
    "url": "2017/git使用笔记.html",
    "revision": "6447d5b38696e777c5289be023f5b8cd"
  },
  {
    "url": "2017/js_addEventListener&removeEventListener.html",
    "revision": "50869dbac444fb08fe1a00d4897a9dbf"
  },
  {
    "url": "2017/js_event-loop.html",
    "revision": "219be317324619e3295ed4aa04cf5c35"
  },
  {
    "url": "2017/再学vue.html",
    "revision": "55ed73d781fc397075f1a75ed9e30459"
  },
  {
    "url": "2017/判断浏览器终端.html",
    "revision": "c9782c7535485c88b81c6a9edfc0c9c2"
  },
  {
    "url": "2017/正则小记.html",
    "revision": "b4a4e1fc310412b8fcfb8adb0cd02944"
  },
  {
    "url": "2017/浏览器渲染流程.html",
    "revision": "5400da604b0dea3fc169ad57cb5c7c2f"
  },
  {
    "url": "2017/蝴蝶书学习笔记.html",
    "revision": "f3c2a568ae3fa86798e2c0e4fe000386"
  },
  {
    "url": "2018/JavaScript常见排序.html",
    "revision": "286a237011ca0fc2c8b8ab148cfd40af"
  },
  {
    "url": "2018/Review_JavaScript.html",
    "revision": "7914e864005bbcd5c966e039afd4b2e5"
  },
  {
    "url": "2018/virtual-dom-learning.html",
    "revision": "c044dc313db3ae44de05cde1e3effe7b"
  },
  {
    "url": "2018/样式小记.html",
    "revision": "6f7125675f79cc60196034cf317626b3"
  },
  {
    "url": "2018/网络请求相关.html",
    "revision": "2d7f409497f5cbf848c5ff784f80d93f"
  },
  {
    "url": "2019/ios-app内页面添加到桌面.html",
    "revision": "31f024c39752263121f74e8f5ab3f2e4"
  },
  {
    "url": "2019/ReactNative是怎么在iOS上跑起来的.html",
    "revision": "b96d7ac117cc07d65cd9e520bb7b6be2"
  },
  {
    "url": "2019/前端页面优化常见方法.html",
    "revision": "60236c1f72b275018285293726085c96"
  },
  {
    "url": "404.html",
    "revision": "f09d7a56c06c1f684b6aec03fbe21c67"
  },
  {
    "url": "about.html",
    "revision": "4e476ab6e4c17522b5aa7251281354a0"
  },
  {
    "url": "archives.html",
    "revision": "86eddbbb9ba1de02cae4f0ba5ccd2e33"
  },
  {
    "url": "assets/css/0.styles.7719bba6.css",
    "revision": "9ea15421c257b7c2e72a5668b435969f"
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
    "url": "assets/js/10.bedfeb21.js",
    "revision": "f6729e6865cfaf179c4d1ed8e0d40412"
  },
  {
    "url": "assets/js/11.403dfb45.js",
    "revision": "fb12b0ab31e8fc6c6aef01a8c4662acc"
  },
  {
    "url": "assets/js/12.780acadb.js",
    "revision": "d94bd45e9a66929d0d395005b3027c38"
  },
  {
    "url": "assets/js/13.418f233a.js",
    "revision": "7e6655c64923b5ffb9a6ea0e09d5ea0d"
  },
  {
    "url": "assets/js/14.454da4a5.js",
    "revision": "a9ad89b7902f89cd58542a4594931e71"
  },
  {
    "url": "assets/js/15.be8e3e46.js",
    "revision": "147512dfab28b9b2592cfafcd0a61aea"
  },
  {
    "url": "assets/js/16.37895f0d.js",
    "revision": "ba74eca229ede92004ef3018fc5793e1"
  },
  {
    "url": "assets/js/17.00b5cbd1.js",
    "revision": "4163cec95e6b912d6d8ff4e6ede0b31a"
  },
  {
    "url": "assets/js/18.01e08a8a.js",
    "revision": "663a9988e434c6632abeadea855138b4"
  },
  {
    "url": "assets/js/19.0afd32b2.js",
    "revision": "0b18cd7f975e93818197d40c1cf864ef"
  },
  {
    "url": "assets/js/2.69be2fea.js",
    "revision": "87d620edc78ffc18a7e3e22be8800353"
  },
  {
    "url": "assets/js/20.10068d4b.js",
    "revision": "8feea08e31f898c29434cddbc048825c"
  },
  {
    "url": "assets/js/21.52d92fbb.js",
    "revision": "14fd6ba0251808e56785848a3feffef5"
  },
  {
    "url": "assets/js/22.73898f8b.js",
    "revision": "7e03539180d71d0537616efb0f682b40"
  },
  {
    "url": "assets/js/23.5c74c782.js",
    "revision": "b7b95433b07dee8909c71653990a2487"
  },
  {
    "url": "assets/js/24.f80791a9.js",
    "revision": "8d872cdb0825a5facb118847de7aa9e2"
  },
  {
    "url": "assets/js/25.f26f7166.js",
    "revision": "38360cf513df3662ad649e4b4f0b953e"
  },
  {
    "url": "assets/js/26.52e8735e.js",
    "revision": "e67da5c5c053fd7ae6a4db3268859989"
  },
  {
    "url": "assets/js/27.f062fa90.js",
    "revision": "2b543a9ac6fbb39e47fea88e7d9403fd"
  },
  {
    "url": "assets/js/28.05aa33d5.js",
    "revision": "0a72c0ffd5878ed9abc25699b5a78b56"
  },
  {
    "url": "assets/js/29.bba3b15e.js",
    "revision": "2bbb50a0c9b72f38f25414c6b49cd165"
  },
  {
    "url": "assets/js/3.e5d589f2.js",
    "revision": "7d6c03641bf5acd469483d83b58d15aa"
  },
  {
    "url": "assets/js/30.48d85515.js",
    "revision": "3c25014e97c4079b505ac801f2e34733"
  },
  {
    "url": "assets/js/4.4a9b5778.js",
    "revision": "1d57088bef030fe8e03ca0ee9381e6af"
  },
  {
    "url": "assets/js/5.ba9c291e.js",
    "revision": "5d35ed0d8090845f720bab2f12e683d9"
  },
  {
    "url": "assets/js/6.d256d1b2.js",
    "revision": "3563141cc7b6b76a5e6bd1ff701819d0"
  },
  {
    "url": "assets/js/7.5da09efc.js",
    "revision": "613050f54a3da07f08828284dca03e17"
  },
  {
    "url": "assets/js/8.037bd0fd.js",
    "revision": "177aaa631e25ddba759d0e4e12332be6"
  },
  {
    "url": "assets/js/9.b726fe34.js",
    "revision": "3e78cf00e42aa32adbda236537e01a39"
  },
  {
    "url": "assets/js/app.c1d0b571.js",
    "revision": "05407d4cb372f0afa3fb757c60894acf"
  },
  {
    "url": "index.html",
    "revision": "07021c82df30803416b7ac8d0ae402cc"
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
