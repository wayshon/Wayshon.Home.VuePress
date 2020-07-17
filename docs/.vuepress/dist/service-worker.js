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
    "revision": "74d6989843fa74ab5922ee632cc749ea"
  },
  {
    "url": "2016/Cordova搭配Vue开发混合app实践.html",
    "revision": "1af16f9b60131d06e45ca77652fc6c37"
  },
  {
    "url": "2016/ES6学习笔记.html",
    "revision": "93ea9a6512f323075dbc0e059ff5cd07"
  },
  {
    "url": "2016/iOS-sqlite3外键级联删除问题解决.html",
    "revision": "c960482c4eef0a3445d9e7ab66bbcc59"
  },
  {
    "url": "2016/iOS自带的宏.html",
    "revision": "9b8a1aceb1439bbd3846ef718df8e460"
  },
  {
    "url": "2016/iOS获取当前屏幕的视图控制器.html",
    "revision": "3b412fb34ae19bf1c68e7151d7575b5a"
  },
  {
    "url": "2016/使用FMDB事务批量存入数据.html",
    "revision": "ee0fb55d0de10fdf9029cd982ebfd672"
  },
  {
    "url": "2016/栈,堆,全局区,常量区,代码区的区别.html",
    "revision": "d3baaa50413a36cfd00dcc124c367007"
  },
  {
    "url": "2017/git使用笔记.html",
    "revision": "b77daa2a4d0abbc05eeaa1324585c73d"
  },
  {
    "url": "2017/js_addEventListener&removeEventListener.html",
    "revision": "a7350d053b38bf18cd257b175eac8e37"
  },
  {
    "url": "2017/js_event-loop.html",
    "revision": "b9b4f10f91fcf4e51439bd6888b71836"
  },
  {
    "url": "2017/再学vue.html",
    "revision": "b7e8d3c440c2662ace9639d19274b7ab"
  },
  {
    "url": "2017/判断浏览器终端.html",
    "revision": "0050cdf38850ec5ff0b17aaa095ef316"
  },
  {
    "url": "2017/正则小记.html",
    "revision": "f4f382604a6b7d83357bee11bab999f1"
  },
  {
    "url": "2017/浏览器渲染流程.html",
    "revision": "1ff8e197a10f480fc882cbd7250d34cf"
  },
  {
    "url": "2017/蝴蝶书学习笔记.html",
    "revision": "578307c1aa4e18f971356a6b3914c04f"
  },
  {
    "url": "2018/JavaScript常见排序.html",
    "revision": "7aabccef523e8fe7334aa40ee087ccbf"
  },
  {
    "url": "2018/Review_JavaScript.html",
    "revision": "837e8915c3c2bd01a7c094c35de44679"
  },
  {
    "url": "2018/virtual-dom-learning.html",
    "revision": "d6f54999993da99b9a3ea0bfaa9d6796"
  },
  {
    "url": "2018/样式小记.html",
    "revision": "bed249e9e1beeb25f62d4ecfc12c9f97"
  },
  {
    "url": "2018/网络请求相关.html",
    "revision": "6e18c150d0c1d000cbff96c4438faab6"
  },
  {
    "url": "2019/ios-app内页面添加到桌面.html",
    "revision": "cb8ef983261e6cf9b38465684b9e8c9c"
  },
  {
    "url": "2019/ReactNative是怎么在iOS上跑起来的.html",
    "revision": "7853e8d1ce781c9025d0333bedca5ff1"
  },
  {
    "url": "2019/前端页面优化常见方法.html",
    "revision": "c744afefb02069fa57e644142e840450"
  },
  {
    "url": "2019/面试-扑克牌问题.html",
    "revision": "deb706d6cdb9ba99ab149c31bd6acdcf"
  },
  {
    "url": "2020/常见的跨端方案.html",
    "revision": "8976dc96c246dc9966b06afe6e901440"
  },
  {
    "url": "2020/怎么开发一个flutter-ios插件.html",
    "revision": "5cb41ad39cb92a698902ac8124357d3c"
  },
  {
    "url": "404.html",
    "revision": "3b2d696e39f084bc3fb406f7094717a7"
  },
  {
    "url": "about.html",
    "revision": "f9ea4aa5d84f99c8bdc01931df87f8a5"
  },
  {
    "url": "archives.html",
    "revision": "4f8cce98a7e7e5f700bf72ffc0c6b480"
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
    "url": "assets/img/demo2.709289fa.png",
    "revision": "709289fa9633a9b2f5b522f7d0d3b0cf"
  },
  {
    "url": "assets/img/demo3.6a172698.png",
    "revision": "6a172698f079d42492e47b7226d54c86"
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
    "url": "assets/js/10.ce4a4912.js",
    "revision": "26e30ad0c2eae745f55407549667c05f"
  },
  {
    "url": "assets/js/11.4d629550.js",
    "revision": "ab19a96b743f441ae2ecedb7ee6fbac5"
  },
  {
    "url": "assets/js/12.8b666b0a.js",
    "revision": "157b0a9eef11969a7a78200fc39705bf"
  },
  {
    "url": "assets/js/13.fd1ae116.js",
    "revision": "6928e76a14b654b4742723be5a2f2fdf"
  },
  {
    "url": "assets/js/14.71f95d77.js",
    "revision": "2d8b79c308127eb9daca95c698159235"
  },
  {
    "url": "assets/js/15.8f465551.js",
    "revision": "8301d70ceb144a570136643a154b55ae"
  },
  {
    "url": "assets/js/16.2fbb1c0b.js",
    "revision": "62f81d25566db85c7723ab0c57e3001a"
  },
  {
    "url": "assets/js/17.a0fd6cac.js",
    "revision": "8d86371a71380a2fd0686d54bce303f6"
  },
  {
    "url": "assets/js/18.e92e0e62.js",
    "revision": "6a9c73f32ba78bde3e1bf2084c23113b"
  },
  {
    "url": "assets/js/19.5b6fd9cb.js",
    "revision": "bb4333d60cbdf66789b8c622176568f9"
  },
  {
    "url": "assets/js/2.c76dd60a.js",
    "revision": "225c5cb8eab22aa65485f27ae117ee07"
  },
  {
    "url": "assets/js/20.9e2ff152.js",
    "revision": "a6ff7666f3861fafb79652ef0adfbb54"
  },
  {
    "url": "assets/js/21.3b7b5d3e.js",
    "revision": "4df30c6cd9077d3250701c47961ade7a"
  },
  {
    "url": "assets/js/22.e54e4736.js",
    "revision": "af60c5adc52b43b9e3259f5056432a44"
  },
  {
    "url": "assets/js/23.412c98c2.js",
    "revision": "5f81844cc59f91191d442b268412562a"
  },
  {
    "url": "assets/js/24.5068676f.js",
    "revision": "e32fe846ad6e7372b56150bee60653b4"
  },
  {
    "url": "assets/js/25.4b37f7c1.js",
    "revision": "5359bdfeec27c028d3a0018dd73ab6a8"
  },
  {
    "url": "assets/js/26.c26bdd03.js",
    "revision": "df56536c69bd0cfe3adc36cbeb2b6bcc"
  },
  {
    "url": "assets/js/27.eec11912.js",
    "revision": "c127c20efcaa3183277e4fb7850b5560"
  },
  {
    "url": "assets/js/28.903e4ba1.js",
    "revision": "4b306a73a8ca934e05d69a376cd443b3"
  },
  {
    "url": "assets/js/29.e5dfafae.js",
    "revision": "083bc58bd344a9af0a90159840c6d499"
  },
  {
    "url": "assets/js/3.5eef86d7.js",
    "revision": "0b5571d2949516b46b1c4444988a6dbe"
  },
  {
    "url": "assets/js/30.c90a6c56.js",
    "revision": "fc7b6321dec0d81a230c1c112aa11d88"
  },
  {
    "url": "assets/js/31.a2130755.js",
    "revision": "eec69d5f618cfc62b49ac628f1221aa2"
  },
  {
    "url": "assets/js/32.892ed5e9.js",
    "revision": "3e30c0c0c60eb815533a23657d0cd5c6"
  },
  {
    "url": "assets/js/33.09f6001c.js",
    "revision": "3d920e7b22f1407b17f3a9102fd8982f"
  },
  {
    "url": "assets/js/4.7ed4a35a.js",
    "revision": "994ef8cae21bfbffa2547d258e94a74c"
  },
  {
    "url": "assets/js/5.b02789c6.js",
    "revision": "1081127908fcc7a934e2e83d8895b206"
  },
  {
    "url": "assets/js/6.c1e1692e.js",
    "revision": "8dab2d5058d8e90806e5e4bee8785697"
  },
  {
    "url": "assets/js/7.8f833044.js",
    "revision": "0d5a6304407ef78812118942faaf13c4"
  },
  {
    "url": "assets/js/8.ed1d5f4b.js",
    "revision": "46e2c4e8d8f93b799d13dc63035347da"
  },
  {
    "url": "assets/js/9.ed8f700f.js",
    "revision": "ece5b062486fbe39f29c64fe639ebf2c"
  },
  {
    "url": "assets/js/app.ed78d8cf.js",
    "revision": "ed77da3d42025dc855f37e0e878fd018"
  },
  {
    "url": "index.html",
    "revision": "5934ff8d4504cbca018cb8cdf4d62e99"
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
