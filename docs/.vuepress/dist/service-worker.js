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
    "url": "2016/使用FMDB事务批量存入数据.html",
    "revision": "930999d8eaf94b5b027f72a936acaef7"
  },
  {
    "url": "2016/栈,堆,全局区,常量区,代码区的区别.html",
    "revision": "97344272758cb8199143043f4c67bf17"
  },
  {
    "url": "2016/CodePush使用调研.html",
    "revision": "3ce5924bdea6ad3103dcfc9d72bb9266"
  },
  {
    "url": "2016/Cordova搭配Vue开发混合app实践.html",
    "revision": "d3ab8898bb0acbdd4ad05617aca8ad15"
  },
  {
    "url": "2016/ES6学习笔记.html",
    "revision": "74d74f1ddc989b7d66cb0e94a0dea80e"
  },
  {
    "url": "2016/iOS-sqlite3外键级联删除问题解决.html",
    "revision": "a1ea4b069786591c120d0c1225982d25"
  },
  {
    "url": "2016/iOS获取当前屏幕的视图控制器.html",
    "revision": "d56b77c1966ea7efb988951018dbbf1d"
  },
  {
    "url": "2016/iOS自带的宏.html",
    "revision": "1f18c00b0ba6e422c2b10a7794bfdbd0"
  },
  {
    "url": "2017/蝴蝶书学习笔记.html",
    "revision": "52691b7e08f9c1c942586cccc8a485e8"
  },
  {
    "url": "2017/浏览器渲染流程.html",
    "revision": "aceb6fbd7fce63a4e05d63e0abeb8e93"
  },
  {
    "url": "2017/判断浏览器终端.html",
    "revision": "31aefe81cb3753dc042d5c0e6f987e93"
  },
  {
    "url": "2017/再学vue.html",
    "revision": "0109ee6c197ac9de7b6d8e85fdc837e4"
  },
  {
    "url": "2017/正则小记.html",
    "revision": "8f576cda08c2e60c1108216601fac92c"
  },
  {
    "url": "2017/git使用笔记.html",
    "revision": "7da84eb4db8d01eddbdd82dd9c417c66"
  },
  {
    "url": "2017/js_addEventListener&removeEventListener.html",
    "revision": "76e8135ed4eff918287d6ed8bcade2c4"
  },
  {
    "url": "2017/js_event-loop.html",
    "revision": "0a52a82c5f4b070cd10338a4fa42bcf1"
  },
  {
    "url": "2018/网络请求相关.html",
    "revision": "0db0453fc0fe7e5f7ecb330de25c4444"
  },
  {
    "url": "2018/样式小记.html",
    "revision": "f84e4b85d1ef51199a8fbffc2b09726e"
  },
  {
    "url": "2018/JavaScript常见排序.html",
    "revision": "9a5d23a61a1bf1c162c049faf02e220e"
  },
  {
    "url": "2018/Review_JavaScript.html",
    "revision": "d35bf7a20201f839b5b1f9350ab87c7c"
  },
  {
    "url": "2018/virtual-dom-learning.html",
    "revision": "f20e9962e97671c3dadfb6d040b6e023"
  },
  {
    "url": "2019/面试-扑克牌问题.html",
    "revision": "a4b706c185cb5cd4eadddb46495a7030"
  },
  {
    "url": "2019/前端页面优化常见方法.html",
    "revision": "b228d51c10e6f12eea36e8620c901bd4"
  },
  {
    "url": "2019/ios-app内页面添加到桌面.html",
    "revision": "8d5a78de84f83d9cb786fbacd81ea637"
  },
  {
    "url": "2019/ReactNative是怎么在iOS上跑起来的.html",
    "revision": "e76416bcaf330e1cb90bc5e437f67be3"
  },
  {
    "url": "2020/常见的跨端方案.html",
    "revision": "911a536311ee636419f9588d38b58830"
  },
  {
    "url": "2020/基于Flutter的HybridWebview容器实践.html",
    "revision": "dc12624d3d9bd0206a9efec79839ac64"
  },
  {
    "url": "2020/怎么开发一个flutter-ios插件.html",
    "revision": "150d80c17c37cdc74b6ecbed5a94f627"
  },
  {
    "url": "2020/flutter模仿网易云音乐.html",
    "revision": "837cd83f0ceca68f45a7186a72668174"
  },
  {
    "url": "2021/补码-计算机存储数据的方式.html",
    "revision": "4ce86cc543ed34a60d79363dffc10dbc"
  },
  {
    "url": "2021/简单易懂的了解CSRF.html",
    "revision": "6e546d4b9d230a374061d10c6301ef94"
  },
  {
    "url": "2021/浅聊JavaScript浮点数.html",
    "revision": "1ab4cff390cc09e02856d89b2613d951"
  },
  {
    "url": "2021/位移枚举的使用与位掩码.html",
    "revision": "3bc3c58ea9c9aa29be792b12db582020"
  },
  {
    "url": "404.html",
    "revision": "73d4222f3c58d256ba91484394c568a6"
  },
  {
    "url": "about.html",
    "revision": "d13fb8884db11ceaaba7f6abc59bde00"
  },
  {
    "url": "archives.html",
    "revision": "4724875ab7d322ae46e1d5c5a4bdeea8"
  },
  {
    "url": "assets/css/0.styles.f9ac1508.css",
    "revision": "f0031e021170327a4bbc645e57d3bac7"
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
    "url": "assets/img/beautiful.723b129d.png",
    "revision": "723b129d0ed390140cbd0e5201f213a4"
  },
  {
    "url": "assets/img/buildproject.aad4a1da.png",
    "revision": "aad4a1da79e95954bde9b26cf0581c77"
  },
  {
    "url": "assets/img/chiliu.5b6a2408.png",
    "revision": "5b6a2408ef7a437b8b6f5540c3413bb3"
  },
  {
    "url": "assets/img/cry.a06d963c.png",
    "revision": "a06d963c7ed7a8d7840fdbfacf30f1bc"
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
    "url": "assets/img/demo_scan.e9398a35.png",
    "revision": "e9398a356248ce43f86a4c9086e39225"
  },
  {
    "url": "assets/img/demo_share.d3e5df74.png",
    "revision": "d3e5df7427b9581b6aaca5913f78dd0b"
  },
  {
    "url": "assets/img/demo.d1611d18.png",
    "revision": "d1611d1828de7ee8c196f8e118e8c044"
  },
  {
    "url": "assets/img/demo1.489a6db8.png",
    "revision": "489a6db86ef26bc32c9be69f2006b3e8"
  },
  {
    "url": "assets/img/demo1.93d008ad.png",
    "revision": "93d008ad67818b3975cc243b3352bf44"
  },
  {
    "url": "assets/img/demo2.709289fa.png",
    "revision": "709289fa9633a9b2f5b522f7d0d3b0cf"
  },
  {
    "url": "assets/img/demo2.d3783a00.png",
    "revision": "d3783a00ecb07ee4d2ca34779da12ceb"
  },
  {
    "url": "assets/img/demo3.6a172698.png",
    "revision": "6a172698f079d42492e47b7226d54c86"
  },
  {
    "url": "assets/img/demodetail.602b315a.png",
    "revision": "602b315a0007a65961a1e5626c166f82"
  },
  {
    "url": "assets/img/demolist.6eddfc93.png",
    "revision": "6eddfc93460677fff94a07bef049836e"
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
    "url": "assets/img/excuse_me.56587c02.png",
    "revision": "56587c02907caaff970aed4b183ad7fa"
  },
  {
    "url": "assets/img/finishproject.671bf924.png",
    "revision": "671bf9243653692ed11c3451330f23bb"
  },
  {
    "url": "assets/img/flow.32cf13ac.png",
    "revision": "32cf13ac2cb7094920be0dd221e1b734"
  },
  {
    "url": "assets/img/flutter_oc_value.89fb82e0.png",
    "revision": "89fb82e05d445c39eab8e14ad80802fd"
  },
  {
    "url": "assets/img/infoplist.caa59ab4.png",
    "revision": "caa59ab416b2623fff20b265d57243f2"
  },
  {
    "url": "assets/img/ok.abf87c44.png",
    "revision": "abf87c44309eca5b00dc194129cb5739"
  },
  {
    "url": "assets/img/openproject.d8473f24.png",
    "revision": "d8473f2406c4fa4a0c796b3059c8610d"
  },
  {
    "url": "assets/img/qiguai.7f29f9cd.png",
    "revision": "7f29f9cdd201d28c9a82e8a1fd8946fe"
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
    "url": "assets/img/smile.74ef0e9c.png",
    "revision": "74ef0e9cbcb5c541ac5aa0817575a333"
  },
  {
    "url": "assets/img/why.b079817b.png",
    "revision": "b079817bf7fecef673be1d625f160ec5"
  },
  {
    "url": "assets/js/10.a48c16b4.js",
    "revision": "16dc95aee2fdd1d4fd4042514917279e"
  },
  {
    "url": "assets/js/11.a5419096.js",
    "revision": "dfc53d970bb85b051f0a1b9c09a4796b"
  },
  {
    "url": "assets/js/12.0cbbfb64.js",
    "revision": "62e4d4d00cacecf0d1e6f4a3b1634828"
  },
  {
    "url": "assets/js/13.b16df315.js",
    "revision": "d5ee8e80e8fb2efb25704959168970ea"
  },
  {
    "url": "assets/js/14.8b3ec47e.js",
    "revision": "fcd6af34d197f220a83bfc007a6b08aa"
  },
  {
    "url": "assets/js/15.cabe99a1.js",
    "revision": "c7f323e36711a561a71f9c5e73e09a37"
  },
  {
    "url": "assets/js/16.a67cc252.js",
    "revision": "c3d62deb13353bc0a04c4d9cdbcbb301"
  },
  {
    "url": "assets/js/17.ebb89b66.js",
    "revision": "7b95321a869b8fbc4a3ae85dd3221b84"
  },
  {
    "url": "assets/js/18.a53fbdf8.js",
    "revision": "55603dac56c39ffbd0d36188aeaf8715"
  },
  {
    "url": "assets/js/19.e80ac3d4.js",
    "revision": "275bc715063f07ac2940049428a74b89"
  },
  {
    "url": "assets/js/2.dbba3d8d.js",
    "revision": "47340bd6174ba9ff5354464d59a197ea"
  },
  {
    "url": "assets/js/20.53051d6e.js",
    "revision": "930cf2922ecc29164898d4cfe984f2f6"
  },
  {
    "url": "assets/js/21.d29f15e7.js",
    "revision": "40f81ee7e9cf6c984668f31fc2905a8c"
  },
  {
    "url": "assets/js/22.0319bfb1.js",
    "revision": "5dbf61c2d92f4ee41d70912b268411e2"
  },
  {
    "url": "assets/js/23.733b9128.js",
    "revision": "29ffc7b05741736b3539560d121b6e9a"
  },
  {
    "url": "assets/js/24.6f9108aa.js",
    "revision": "20744bda4c0ce88142e864734906db88"
  },
  {
    "url": "assets/js/25.1213099a.js",
    "revision": "860b9f6068d171153e0630237b9ad78c"
  },
  {
    "url": "assets/js/26.274b0122.js",
    "revision": "31dfd5ffac8187117ae4df7cb09b8125"
  },
  {
    "url": "assets/js/27.2639d4bf.js",
    "revision": "74e5f09ceca00ed6063fffb41611a7e7"
  },
  {
    "url": "assets/js/28.b288a6e5.js",
    "revision": "600457ff419939fadff00821d7c4783a"
  },
  {
    "url": "assets/js/29.2fd2e932.js",
    "revision": "073f9711cf815326d53dbf1311b30dff"
  },
  {
    "url": "assets/js/3.091fb819.js",
    "revision": "b7bf0d134662bb4c06b8f3a8cb3523db"
  },
  {
    "url": "assets/js/30.119e4149.js",
    "revision": "8043c0c9bbf56e76aea4622847b80e7a"
  },
  {
    "url": "assets/js/31.432e6cb3.js",
    "revision": "138cf877243e17a75e47cf95d53a29aa"
  },
  {
    "url": "assets/js/32.011184fe.js",
    "revision": "f8bed7a52faf2738ca65a72e70294e7e"
  },
  {
    "url": "assets/js/33.00b83608.js",
    "revision": "0dee6193631c3f00412ef19265acaffd"
  },
  {
    "url": "assets/js/34.d802c816.js",
    "revision": "2b0078522ad8926b02de0954e5853ea8"
  },
  {
    "url": "assets/js/35.33689142.js",
    "revision": "ec33f9591e6dc3084e00277666c1d8de"
  },
  {
    "url": "assets/js/36.dc93cc29.js",
    "revision": "e6d0669eec705c09fb4086d497f1ae11"
  },
  {
    "url": "assets/js/37.855e33d8.js",
    "revision": "a7d1f0c392744496d2f2c158e6d82f4b"
  },
  {
    "url": "assets/js/38.5495d034.js",
    "revision": "a7eccd5d1ed9017f6c8cf8aeea947012"
  },
  {
    "url": "assets/js/39.84dc2dc6.js",
    "revision": "0cb1f01335fe9525864c39b7b0c82cc7"
  },
  {
    "url": "assets/js/4.f95145a6.js",
    "revision": "b39abab47c3e90c1c8926a30869573fd"
  },
  {
    "url": "assets/js/5.12543c1d.js",
    "revision": "4f103589f2cc87abf52a4773a4b257c7"
  },
  {
    "url": "assets/js/6.b216a31d.js",
    "revision": "99e9c8985321f19ffc94a065b57c34a8"
  },
  {
    "url": "assets/js/7.093a7fe1.js",
    "revision": "e77ff28a463b02c687d565ea35a41967"
  },
  {
    "url": "assets/js/8.e7981210.js",
    "revision": "31d53007644875d863f95b9dee74554a"
  },
  {
    "url": "assets/js/9.333127fc.js",
    "revision": "121621881f6f6bfd2f37a931b9542845"
  },
  {
    "url": "assets/js/app.3234abbf.js",
    "revision": "af167acec88842b2b4fec66886a9b5aa"
  },
  {
    "url": "index.html",
    "revision": "66a4c5d8c09685553c374e2afc4bf6a5"
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
