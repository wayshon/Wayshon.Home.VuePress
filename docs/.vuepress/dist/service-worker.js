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
    "revision": "b121a1ceba518d63e161e5bfab39b6b0"
  },
  {
    "url": "2016/Cordova搭配Vue开发混合app实践.html",
    "revision": "70bfe8fab4c6145d466da0d1b8d40f2c"
  },
  {
    "url": "2016/ES6学习笔记.html",
    "revision": "ed5e184094c970e9b96b8eed40502f37"
  },
  {
    "url": "2016/iOS-sqlite3外键级联删除问题解决.html",
    "revision": "324a998c4273dfc7b5dfd502db0ab14f"
  },
  {
    "url": "2016/iOS自带的宏.html",
    "revision": "478eaa4e0a98e8e7f4ad4b2a68427fee"
  },
  {
    "url": "2016/iOS获取当前屏幕的视图控制器.html",
    "revision": "e9f9c28d1556d81eed1f8d607712d1b1"
  },
  {
    "url": "2016/使用FMDB事务批量存入数据.html",
    "revision": "2ae7b33161651f7bae5ca9f160088421"
  },
  {
    "url": "2016/栈,堆,全局区,常量区,代码区的区别.html",
    "revision": "80e385a5f2aef964ac8fa3c3f7f9238b"
  },
  {
    "url": "2017/git使用笔记.html",
    "revision": "724019fdd80202dd67538e5ddf8726ef"
  },
  {
    "url": "2017/js_addEventListener&removeEventListener.html",
    "revision": "20d01cdcecdeecfe72b9a976c710da3c"
  },
  {
    "url": "2017/js_event-loop.html",
    "revision": "1674bf3a4bf6139238983ccfb90bc86d"
  },
  {
    "url": "2017/再学vue.html",
    "revision": "ed8b6233ade9a5aa648a305cee814436"
  },
  {
    "url": "2017/判断浏览器终端.html",
    "revision": "a17bd5301762517034cedf206ed3c3bb"
  },
  {
    "url": "2017/正则小记.html",
    "revision": "87a567cb0ed98afb03bef8f325a31a11"
  },
  {
    "url": "2017/浏览器渲染流程.html",
    "revision": "a3a3f86b0801497c289ba0bcad0a9993"
  },
  {
    "url": "2017/蝴蝶书学习笔记.html",
    "revision": "445240e71c00c2560060ffbadf38c668"
  },
  {
    "url": "2018/JavaScript常见排序.html",
    "revision": "7732f1f9f8c4d58799f3c36953f3c72c"
  },
  {
    "url": "2018/Review_JavaScript.html",
    "revision": "ff54a9db8639fae15ec6bf4727343844"
  },
  {
    "url": "2018/virtual-dom-learning.html",
    "revision": "e188bd067c358953b34921ba3e4d3937"
  },
  {
    "url": "2018/样式小记.html",
    "revision": "6ec994305ab51ede559cde301fbb0ea0"
  },
  {
    "url": "2018/网络请求相关.html",
    "revision": "9b47bb0bf7a8f872dad5c3d0803ec1ca"
  },
  {
    "url": "2019/ios-app内页面添加到桌面.html",
    "revision": "ce381d42608e116cff4bdcb235ec7544"
  },
  {
    "url": "2019/ReactNative是怎么在iOS上跑起来的.html",
    "revision": "100958a882db86bdcd8f0d1e6e537ed0"
  },
  {
    "url": "2019/前端页面优化常见方法.html",
    "revision": "86475a3c7a7c4bc921fc22f1a3352833"
  },
  {
    "url": "2019/面试-扑克牌问题.html",
    "revision": "fa18828c3772ed0b6a537951a7676b80"
  },
  {
    "url": "2020/flutter模仿网易云音乐.html",
    "revision": "19ece8ac44204b48f1b468bee79ec2e6"
  },
  {
    "url": "2020/常见的跨端方案.html",
    "revision": "8f88f5dc81d7744bc8c31346747baddc"
  },
  {
    "url": "2020/怎么开发一个flutter-ios插件.html",
    "revision": "7be1a5b9423b2a39e607b1f67cc0730c"
  },
  {
    "url": "404.html",
    "revision": "a0924d02558bcccc972a3857e6230074"
  },
  {
    "url": "about.html",
    "revision": "f9c5015352d723a65942ae1bb92b36c5"
  },
  {
    "url": "archives.html",
    "revision": "a6d06b6c6532182eb3cb97bcb2420eb9"
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
    "url": "assets/js/10.a45a8a58.js",
    "revision": "909fd8143fed523c0ea43d9cfd63926d"
  },
  {
    "url": "assets/js/11.e81904c6.js",
    "revision": "6140f347f14607caa64b6ef7cab3dc9a"
  },
  {
    "url": "assets/js/12.5c35d4de.js",
    "revision": "093e37273e4b8d545014c49bbf3dcd4d"
  },
  {
    "url": "assets/js/13.12948d29.js",
    "revision": "6de4e87369957216ad5e08c35fa62dc8"
  },
  {
    "url": "assets/js/14.450bc641.js",
    "revision": "983bf4c0aee68dc6b8219049ef7710df"
  },
  {
    "url": "assets/js/15.770ad44c.js",
    "revision": "262d01959224b264e007409a6cd59ed8"
  },
  {
    "url": "assets/js/16.a2473ecc.js",
    "revision": "db789e31bfcdf5a99b7dc6aff78fffcb"
  },
  {
    "url": "assets/js/17.ded0b616.js",
    "revision": "daa9d08f992acb09c9ca9e6b1141727c"
  },
  {
    "url": "assets/js/18.800eb15e.js",
    "revision": "d3cfd0938535bb73830370fcc7504e3d"
  },
  {
    "url": "assets/js/19.014c625c.js",
    "revision": "b13cb6b47752f4846b8a70cfd4958b09"
  },
  {
    "url": "assets/js/2.d6228a03.js",
    "revision": "5549817ebbaee2953a42f53e2e7a60fe"
  },
  {
    "url": "assets/js/20.0084c546.js",
    "revision": "5c93f8af810141e0421b14026534dc8c"
  },
  {
    "url": "assets/js/21.b410d8c7.js",
    "revision": "5630342248cb75ff447c0534967f6a6e"
  },
  {
    "url": "assets/js/22.627c0d93.js",
    "revision": "858a1b72005c5a9a13b449a4a695e73e"
  },
  {
    "url": "assets/js/23.59b7a053.js",
    "revision": "0931fad2e3ee128d59de1e01e69c1873"
  },
  {
    "url": "assets/js/24.43bd4ff8.js",
    "revision": "573c27f238d9a825b511f787e621b23d"
  },
  {
    "url": "assets/js/25.5a04b538.js",
    "revision": "7e53d2c0c39eb704b588f51a0ac4af58"
  },
  {
    "url": "assets/js/26.188d5bcf.js",
    "revision": "a5b05c2d0e9868a1b13d4c220dd2a26e"
  },
  {
    "url": "assets/js/27.27b38823.js",
    "revision": "10ea038a3566ea4654959f4755bd5882"
  },
  {
    "url": "assets/js/28.2c6832bf.js",
    "revision": "57a53eda0ae28cc1e651d30b0c5c64a1"
  },
  {
    "url": "assets/js/29.0ae89285.js",
    "revision": "638f2b865e192cd4b727db7f9f01942f"
  },
  {
    "url": "assets/js/3.ee7ae8e9.js",
    "revision": "6251e4303b148c8ce70128f39913b79e"
  },
  {
    "url": "assets/js/30.1fd1ff10.js",
    "revision": "7e641aa02dc3a8c66d91ee543d2b25a8"
  },
  {
    "url": "assets/js/31.03125ec6.js",
    "revision": "f54f146d713594502b86fc5b73eaa3b0"
  },
  {
    "url": "assets/js/32.b9e46907.js",
    "revision": "98d7f3c269bb340ca95584ae354af07b"
  },
  {
    "url": "assets/js/33.51ce8b77.js",
    "revision": "1ba0f54d69423bbae1f120c7001b3ae9"
  },
  {
    "url": "assets/js/34.fb8f2be0.js",
    "revision": "45e7c07df034ff0b43924b086cd1b2d0"
  },
  {
    "url": "assets/js/4.9e43e58c.js",
    "revision": "84bbc373fd4cba26ac8d3d84bf26a255"
  },
  {
    "url": "assets/js/5.0b451ea5.js",
    "revision": "2a3f7127cc161e6bfa48ccc9173ea915"
  },
  {
    "url": "assets/js/6.af3241b3.js",
    "revision": "29c029ee88ac56e74f90df25e1d2c1a5"
  },
  {
    "url": "assets/js/7.e813cf08.js",
    "revision": "cf095cb2406b1768f3c415d0b9f67609"
  },
  {
    "url": "assets/js/8.36b43330.js",
    "revision": "96fe66138a04b1732c935402389ca2ee"
  },
  {
    "url": "assets/js/9.6c023c32.js",
    "revision": "a04082703321618538d31f3717ff2082"
  },
  {
    "url": "assets/js/app.6d979d9b.js",
    "revision": "a33a9eb7aa8d6ab41248a14264f59617"
  },
  {
    "url": "index.html",
    "revision": "132074033dfc45ba57c172869b9fe65d"
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
