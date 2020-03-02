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
    "revision": "6c762e0a589d9a594ddff76d839ac7a4"
  },
  {
    "url": "2016/Cordova搭配Vue开发混合app实践.html",
    "revision": "bda83f726f256f58eea1ba989b922c20"
  },
  {
    "url": "2016/ES6学习笔记.html",
    "revision": "25461f304e160b4b8f4b003122a555f1"
  },
  {
    "url": "2016/iOS-sqlite3外键级联删除问题解决.html",
    "revision": "97be64bfbce3cfb3129e098aaecdf6a8"
  },
  {
    "url": "2016/iOS自带的宏.html",
    "revision": "c33a822fe1905232dc31a3343dac941b"
  },
  {
    "url": "2016/iOS获取当前屏幕的视图控制器.html",
    "revision": "c1e41562cc8c35ce70df0785ce960deb"
  },
  {
    "url": "2016/使用FMDB事务批量存入数据.html",
    "revision": "018379bbb1cf338c032e512dd8415311"
  },
  {
    "url": "2016/栈,堆,全局区,常量区,代码区的区别.html",
    "revision": "db1649a188782e0b262f77800a9c729f"
  },
  {
    "url": "2017/git使用笔记.html",
    "revision": "7c546f2943fc7f41753a2724225e9132"
  },
  {
    "url": "2017/js_addEventListener&removeEventListener.html",
    "revision": "7e5f12b8127194c59d4738dc2574d51f"
  },
  {
    "url": "2017/js_event-loop.html",
    "revision": "79832de3d58a2c12c62ffd2e25594584"
  },
  {
    "url": "2017/再学vue.html",
    "revision": "21f642ca31bcae25c25e55993a4b1995"
  },
  {
    "url": "2017/判断浏览器终端.html",
    "revision": "a0c54868c151f4a97d1b0742c09233bf"
  },
  {
    "url": "2017/正则小记.html",
    "revision": "f0984ac54c3ade1b275fa4d3173c9f7c"
  },
  {
    "url": "2017/浏览器渲染流程.html",
    "revision": "75c3012a0b70ed98869fdbe8d5c78203"
  },
  {
    "url": "2017/蝴蝶书学习笔记.html",
    "revision": "27d290582effd995e93090450f30d448"
  },
  {
    "url": "2018/JavaScript常见排序.html",
    "revision": "dd6dd3ad5267905c589e34f3cbb50020"
  },
  {
    "url": "2018/Review_JavaScript.html",
    "revision": "5358977f10e6967853626e980420863e"
  },
  {
    "url": "2018/virtual-dom-learning.html",
    "revision": "ae57dd8ca013f66bf6be0772e27d41ac"
  },
  {
    "url": "2018/样式小记.html",
    "revision": "aab0451f7b9f07bad9f17ad4aa4a3899"
  },
  {
    "url": "2018/网络请求相关.html",
    "revision": "47389228e1df0262b7e69f691e2a652b"
  },
  {
    "url": "2019/ios-app内页面添加到桌面.html",
    "revision": "0a61c84908116ffcbca2bd463c566f1e"
  },
  {
    "url": "2019/ReactNative是怎么在iOS上跑起来的.html",
    "revision": "1e319e929c21c42d3c502ee75805f86a"
  },
  {
    "url": "2019/前端页面优化常见方法.html",
    "revision": "a7d8459db97912e91b36709ac46a718f"
  },
  {
    "url": "2019/面试-扑克牌问题.html",
    "revision": "7166ba59f9b458d30c84c6ddf5277841"
  },
  {
    "url": "404.html",
    "revision": "ae8c599cc78371db50155acaf2ab3091"
  },
  {
    "url": "about.html",
    "revision": "df1a1002a8c76f0c5dfab2498173a716"
  },
  {
    "url": "archives.html",
    "revision": "bbc6f996a45c8d202e4c086c25b39e80"
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
    "url": "assets/js/28.5a075654.js",
    "revision": "9cecb80a6af903c54dbeed4cda33c04d"
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
    "url": "assets/js/app.83d17abe.js",
    "revision": "3a892674675648bea8d08938c2de0c55"
  },
  {
    "url": "index.html",
    "revision": "4d56ee0659a36ac4e5ea935371aecdaf"
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
