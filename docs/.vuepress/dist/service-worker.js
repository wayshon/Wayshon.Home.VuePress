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
    "revision": "794fde8a8227f7e92ab1567d737cd161"
  },
  {
    "url": "2016/Cordova搭配Vue开发混合app实践.html",
    "revision": "73448239a66d820d625b1d469b120100"
  },
  {
    "url": "2016/ES6学习笔记.html",
    "revision": "d2f8b229f500ca45c073afa938ee55cb"
  },
  {
    "url": "2016/iOS-sqlite3外键级联删除问题解决.html",
    "revision": "753fea6096ad21622621bcd45117bae8"
  },
  {
    "url": "2016/iOS自带的宏.html",
    "revision": "c0d9b1b952531d530f60b896c2252212"
  },
  {
    "url": "2016/iOS获取当前屏幕的视图控制器.html",
    "revision": "32bed22469f4dc68a783e1d3ead74985"
  },
  {
    "url": "2016/使用FMDB事务批量存入数据.html",
    "revision": "cb87a1b40f11bb774e272dd28c475b73"
  },
  {
    "url": "2016/栈,堆,全局区,常量区,代码区的区别.html",
    "revision": "25f2aaf695232010e87201d9cc12efcf"
  },
  {
    "url": "2017/git使用笔记.html",
    "revision": "dcc9ca90a633e5bf257088ed319d1588"
  },
  {
    "url": "2017/js_addEventListener&removeEventListener.html",
    "revision": "911ca91b547f433eabc17e711751f8d4"
  },
  {
    "url": "2017/js_event-loop.html",
    "revision": "6187ee6aa213f34a91c23ab3246131c4"
  },
  {
    "url": "2017/再学vue.html",
    "revision": "106923434f89c7e752de517488fe71b2"
  },
  {
    "url": "2017/判断浏览器终端.html",
    "revision": "46b3ea91d6b644c391d2ed1c474baf3b"
  },
  {
    "url": "2017/正则小记.html",
    "revision": "5300bd5a065e4ddcc028be1225718a86"
  },
  {
    "url": "2017/浏览器渲染流程.html",
    "revision": "0cf4c502dc5366e3410afc8215870b28"
  },
  {
    "url": "2017/蝴蝶书学习笔记.html",
    "revision": "78af719709708be5dbe023a3f301adf3"
  },
  {
    "url": "2018/JavaScript常见排序.html",
    "revision": "683cff1873f7bdddd49fe6e5d42f5d02"
  },
  {
    "url": "2018/Review_JavaScript.html",
    "revision": "84581d9505851d330d68b1b1bb1caf9c"
  },
  {
    "url": "2018/virtual-dom-learning.html",
    "revision": "b6828f18a767b1f1fd23a703c7e3775d"
  },
  {
    "url": "2018/样式小记.html",
    "revision": "a0f81474f81ccd840458af23855abb2c"
  },
  {
    "url": "2018/网络请求相关.html",
    "revision": "080fa4359b5ffe5035e87c881bb5dae4"
  },
  {
    "url": "2019/ios-app内页面添加到桌面.html",
    "revision": "3846e5ecaed85f9c01611004b993c5de"
  },
  {
    "url": "2019/ReactNative是怎么在iOS上跑起来的.html",
    "revision": "aea7bec7d618f52dd820fe41221d57ec"
  },
  {
    "url": "2019/前端页面优化常见方法.html",
    "revision": "85b3908ea00570bb88956fe18f21a0e0"
  },
  {
    "url": "2019/面试-扑克牌问题.html",
    "revision": "931bcdf62a71a93b8ae712b6e6f02d5e"
  },
  {
    "url": "2020/常见的跨端方案.html",
    "revision": "44307006331cbfe98fd65c3e03292080"
  },
  {
    "url": "404.html",
    "revision": "3d8352a1a9916c084df7d0f5761c55b9"
  },
  {
    "url": "about.html",
    "revision": "9106c7653ccc9529ada9830a9e1253c9"
  },
  {
    "url": "archives.html",
    "revision": "1020133d4fb6c0685141cf6e6372da26"
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
    "url": "assets/img/1.fd4caab9.png",
    "revision": "fd4caab9baa321240df34b62d03cc279"
  },
  {
    "url": "assets/img/10.0a048de2.png",
    "revision": "0a048de2f578c46b0074c678d84067a9"
  },
  {
    "url": "assets/img/11.84c09cbc.png",
    "revision": "84c09cbcd85ffe52b8c1b2c4a1ff54f2"
  },
  {
    "url": "assets/img/12.33275e98.png",
    "revision": "33275e9875646d664a61233f5b7594ca"
  },
  {
    "url": "assets/img/13.7eeabb03.png",
    "revision": "7eeabb036f2132e32897ded187d54c8b"
  },
  {
    "url": "assets/img/14.5116a6ab.png",
    "revision": "5116a6ab6f0f343505b3eb0b31b31aa0"
  },
  {
    "url": "assets/img/15.7a6224b6.png",
    "revision": "7a6224b6b450551b0a589a37c28b4658"
  },
  {
    "url": "assets/img/16.a093c6d7.png",
    "revision": "a093c6d7ddb5dccde567f6ca3d53362d"
  },
  {
    "url": "assets/img/17.0a2d6ca8.png",
    "revision": "0a2d6ca8397880be360254e79e1f5c0c"
  },
  {
    "url": "assets/img/2.a5436329.png",
    "revision": "a54363295c97210a60822b8997bdafc3"
  },
  {
    "url": "assets/img/3.241967f5.png",
    "revision": "241967f5c81005db86f7c24fc5e5fc67"
  },
  {
    "url": "assets/img/4.58d6706e.png",
    "revision": "58d6706ea230bafa4784d94d196495a3"
  },
  {
    "url": "assets/img/5.4355f168.png",
    "revision": "4355f168743efe58d26ba6debed87cf8"
  },
  {
    "url": "assets/img/6.1257bf6a.png",
    "revision": "1257bf6ace46cd938d18968cfd6cc581"
  },
  {
    "url": "assets/img/7.419579cf.png",
    "revision": "419579cfbffdae70678b47ecfc2d2136"
  },
  {
    "url": "assets/img/8.e9fc7b1c.png",
    "revision": "e9fc7b1c19ad9ecaf1c0ced35cd864d5"
  },
  {
    "url": "assets/img/9.9c3a1ff5.png",
    "revision": "9c3a1ff595c5f893f8d7cf9953d778dc"
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
    "url": "assets/img/demo.d1611d18.png",
    "revision": "d1611d1828de7ee8c196f8e118e8c044"
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
    "url": "assets/js/10.ba64a31f.js",
    "revision": "254c82d1df9ac47a217e82b7af92ef8b"
  },
  {
    "url": "assets/js/11.3586b7eb.js",
    "revision": "4b0cf4a829d00637ec220a47e621f116"
  },
  {
    "url": "assets/js/12.61718b5e.js",
    "revision": "154a277dd8e353ae43cb02c929e1478b"
  },
  {
    "url": "assets/js/13.1bfad86f.js",
    "revision": "36718f5e3f3d88057b3c4805e3b209cf"
  },
  {
    "url": "assets/js/14.354d6e7e.js",
    "revision": "d23b29655fbf387659c2de650d7e3fde"
  },
  {
    "url": "assets/js/15.cbbf53c3.js",
    "revision": "a76f4d489a2d495e47010e3d513861ae"
  },
  {
    "url": "assets/js/16.5113d3aa.js",
    "revision": "e513eb9924a00114368c5d60411f989a"
  },
  {
    "url": "assets/js/17.dc0b6250.js",
    "revision": "f46ca193262b9c953f50bc92bc8a42f2"
  },
  {
    "url": "assets/js/18.55c217d8.js",
    "revision": "c5386b0af0c5315c2dc2400eb586d696"
  },
  {
    "url": "assets/js/19.f9fbb178.js",
    "revision": "4ad37305767aa62334ebb5f06f011fef"
  },
  {
    "url": "assets/js/2.23951f21.js",
    "revision": "fb3b4026f74416bb9e80180f17ace0af"
  },
  {
    "url": "assets/js/20.00c45c66.js",
    "revision": "527779226ad75f1bd838e6147c40b0b6"
  },
  {
    "url": "assets/js/21.bfec624a.js",
    "revision": "988e94c5fa8aa20f4ebe6009367a9f4c"
  },
  {
    "url": "assets/js/22.f5488922.js",
    "revision": "b49c90919e530aef7a221418d27114cc"
  },
  {
    "url": "assets/js/23.c2a405e5.js",
    "revision": "e5c67b5b9896e609ebfe4c7cf2c12ad0"
  },
  {
    "url": "assets/js/24.c744722a.js",
    "revision": "3c929204f0c9db4fdffcc8e8ca8d43da"
  },
  {
    "url": "assets/js/25.1f30494d.js",
    "revision": "fc387559a8688bafa68f422c549dee39"
  },
  {
    "url": "assets/js/26.c989fb0b.js",
    "revision": "86c101088a92f6c2fcaf495ca79f1bc6"
  },
  {
    "url": "assets/js/27.93121c50.js",
    "revision": "f2dec02a7826f7efc2ca77e552fd5df7"
  },
  {
    "url": "assets/js/28.fc37c4fa.js",
    "revision": "e6749540125d29ec4a694cd079310a2d"
  },
  {
    "url": "assets/js/29.d9fcc3b3.js",
    "revision": "d300248f216cbb6e81c3f12b337dd18c"
  },
  {
    "url": "assets/js/3.c32e1224.js",
    "revision": "f775009ce939102dd910c0aeb5e5abff"
  },
  {
    "url": "assets/js/30.91223dd9.js",
    "revision": "04a303a2ddaef0852ab909b99fd119c9"
  },
  {
    "url": "assets/js/31.5551858c.js",
    "revision": "31f741269b0848c9cab954fd3e2c4a70"
  },
  {
    "url": "assets/js/32.21208c3d.js",
    "revision": "3c76422afb266fbbb71451563694a4ad"
  },
  {
    "url": "assets/js/4.7b2aacbf.js",
    "revision": "9fc56edb5981f9b9f10f2604067e85ec"
  },
  {
    "url": "assets/js/5.169304d2.js",
    "revision": "84216099eb0dac795afc42e88cefd124"
  },
  {
    "url": "assets/js/6.be4d6965.js",
    "revision": "99c10f14b0a15cc1c15601483fb5141f"
  },
  {
    "url": "assets/js/7.00499994.js",
    "revision": "6eca9203f3e66181b9a00df0ee893178"
  },
  {
    "url": "assets/js/8.76b3bfc9.js",
    "revision": "a7b413566de76eb125c20587c1859774"
  },
  {
    "url": "assets/js/9.9b509b33.js",
    "revision": "4ec7f824b59ec7467d1158f9cbc3319c"
  },
  {
    "url": "assets/js/app.59274880.js",
    "revision": "d4b70e3a888000f8ffe7a69f23439b5a"
  },
  {
    "url": "index.html",
    "revision": "d25334ee5bbade4c8e4fc50686eb801c"
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
