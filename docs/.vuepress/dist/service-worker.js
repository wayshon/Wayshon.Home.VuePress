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
    "revision": "f3f9dc64b11e3926f2cef141b0f53297"
  },
  {
    "url": "2016/Cordova搭配Vue开发混合app实践.html",
    "revision": "78690638fda31cef9e9e889b21b3de42"
  },
  {
    "url": "2016/ES6学习笔记.html",
    "revision": "319760503b1d2dddcd65b332d2b2d3da"
  },
  {
    "url": "2016/iOS-sqlite3外键级联删除问题解决.html",
    "revision": "df434f95d12435374a1145d2f265524c"
  },
  {
    "url": "2016/iOS自带的宏.html",
    "revision": "61e14e922b1a4ab7dc45d43e8546466e"
  },
  {
    "url": "2016/iOS获取当前屏幕的视图控制器.html",
    "revision": "b389d3b17135f72d5a3eedd2bd1a2e14"
  },
  {
    "url": "2016/使用FMDB事务批量存入数据.html",
    "revision": "89dc4f91a752aba9a700bbd34bb5a6e9"
  },
  {
    "url": "2016/栈,堆,全局区,常量区,代码区的区别.html",
    "revision": "816881be59adb54f825d1647abed2021"
  },
  {
    "url": "2017/git使用笔记.html",
    "revision": "43e166f39896bf67d1f585b76f985156"
  },
  {
    "url": "2017/js_addEventListener&removeEventListener.html",
    "revision": "f793f1a6a93a6cfa33dd89bee27f2f21"
  },
  {
    "url": "2017/js_event-loop.html",
    "revision": "062ab2731fa2ebe1002c3f9a64dfb54b"
  },
  {
    "url": "2017/再学vue.html",
    "revision": "3eb4e09b63aa243b94b3f6c9e124cfc7"
  },
  {
    "url": "2017/判断浏览器终端.html",
    "revision": "8245b46a5b0b1860853f61dadce908bd"
  },
  {
    "url": "2017/正则小记.html",
    "revision": "ff4fd3200f94a361d776a54e1a0b85d1"
  },
  {
    "url": "2017/浏览器渲染流程.html",
    "revision": "8e223e580b8612d0fa46ff314efa8465"
  },
  {
    "url": "2017/蝴蝶书学习笔记.html",
    "revision": "83909c4c2fe12b802d587468f64ea7e0"
  },
  {
    "url": "2018/JavaScript常见排序.html",
    "revision": "f45fccf3a27e2a08ce1df9236f1a6e9e"
  },
  {
    "url": "2018/Review_JavaScript.html",
    "revision": "ed8fe4cb202c5c6e3609cbf4f174d306"
  },
  {
    "url": "2018/virtual-dom-learning.html",
    "revision": "612672aac8ab51b58dc697f94876856f"
  },
  {
    "url": "2018/样式小记.html",
    "revision": "779a2df3a1f6fe1a1620580bf50a632e"
  },
  {
    "url": "2018/网络请求相关.html",
    "revision": "1433f87b3633ec0f2f755c54387a8c21"
  },
  {
    "url": "2019/ios-app内页面添加到桌面.html",
    "revision": "f6c6ff125184b0ee77f0e1eba5151f73"
  },
  {
    "url": "2019/ReactNative是怎么在iOS上跑起来的.html",
    "revision": "41ec052b8e0bb8cb4480659c81455873"
  },
  {
    "url": "2019/前端页面优化常见方法.html",
    "revision": "c6ad5ce7945738ee8cb59fe13c4a676a"
  },
  {
    "url": "2019/面试-扑克牌问题.html",
    "revision": "02a83ed6c2f29cf9d565367e334da02e"
  },
  {
    "url": "2020/flutter模仿网易云音乐.html",
    "revision": "d829adffbbd24bce263422b0dd74e168"
  },
  {
    "url": "2020/基于Flutter的HybridWebview容器实践.html",
    "revision": "c7872f894c6f60ba117a286af608cece"
  },
  {
    "url": "2020/常见的跨端方案.html",
    "revision": "9b8bdcab6b50f5737e4f43e0a506cb80"
  },
  {
    "url": "2020/怎么开发一个flutter-ios插件.html",
    "revision": "f2a5e4e404eaea1385a6b5580e4b5bd8"
  },
  {
    "url": "404.html",
    "revision": "dd1159cb2b870026284df29402d9963d"
  },
  {
    "url": "about.html",
    "revision": "90e891959bca8132089105d89da088c3"
  },
  {
    "url": "archives.html",
    "revision": "d2f6301c708df1498263eba2f528997e"
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
    "url": "assets/js/10.fe5e5b5e.js",
    "revision": "d9d50763c52e0e89496842b3c98b8c76"
  },
  {
    "url": "assets/js/11.6ebc24e7.js",
    "revision": "312ab4cb60347ea15e1b1aa29895d532"
  },
  {
    "url": "assets/js/12.7275c8a0.js",
    "revision": "8402ace8a67074d044575170048972db"
  },
  {
    "url": "assets/js/13.ed269e3c.js",
    "revision": "7e60464fe12557f910ef56d378144a09"
  },
  {
    "url": "assets/js/14.ac36d082.js",
    "revision": "7468983172bc20d6d204ecf8e1793e80"
  },
  {
    "url": "assets/js/15.05d74966.js",
    "revision": "29fe47897263423bc7783c75030e8b97"
  },
  {
    "url": "assets/js/16.2d6246df.js",
    "revision": "b4eaadb3906fbff18fda4599c36eb421"
  },
  {
    "url": "assets/js/17.8ab3a3c1.js",
    "revision": "89d9a3c647561bb3004c769e8fd067c2"
  },
  {
    "url": "assets/js/18.6713480f.js",
    "revision": "f6b4b90200a16fe61e3e72cd322c9477"
  },
  {
    "url": "assets/js/19.b4095557.js",
    "revision": "8094cee577574b1044a23cff506c419d"
  },
  {
    "url": "assets/js/2.327a0358.js",
    "revision": "403339dc3b360fbdef616ccc0256fc43"
  },
  {
    "url": "assets/js/20.86f46f37.js",
    "revision": "59fc00ac5b90d6b53f06182077fbd497"
  },
  {
    "url": "assets/js/21.d5233806.js",
    "revision": "d3bc93c40f4ec7c82d96fbac741c27b6"
  },
  {
    "url": "assets/js/22.ca37f4e0.js",
    "revision": "8d545f2caab18de06fa07e74690e1be2"
  },
  {
    "url": "assets/js/23.be7587e0.js",
    "revision": "79a7e1b122a42d9f4336dae02341afe6"
  },
  {
    "url": "assets/js/24.bd42840e.js",
    "revision": "1fb6e78052a59eebfb77970c7f67865b"
  },
  {
    "url": "assets/js/25.25cbd984.js",
    "revision": "b28e81cc95494bb87e19f8a8e2e34d24"
  },
  {
    "url": "assets/js/26.3afb95e0.js",
    "revision": "11853938c214744eb4198a095383108c"
  },
  {
    "url": "assets/js/27.f14ce68e.js",
    "revision": "19910491a65f3cee778d262767833f88"
  },
  {
    "url": "assets/js/28.a28ad518.js",
    "revision": "3638a66503a19be48f979a9a7e7e215a"
  },
  {
    "url": "assets/js/29.465eaad8.js",
    "revision": "c52dd608edc1012f6d2947aca977f0d1"
  },
  {
    "url": "assets/js/3.230ea21c.js",
    "revision": "72e8ef578606461ce5440a636ce1d433"
  },
  {
    "url": "assets/js/30.fd9253b8.js",
    "revision": "3f943a89f1642662c0a07ed9c4d741b0"
  },
  {
    "url": "assets/js/31.be521382.js",
    "revision": "0bbda52dbe753275e278ee5d01a0e997"
  },
  {
    "url": "assets/js/32.6b970bf7.js",
    "revision": "dc7a6e6b3a0df39795c470d6f42d9ac9"
  },
  {
    "url": "assets/js/33.2193a9ca.js",
    "revision": "73edeac42521220c47c3db0b03164b03"
  },
  {
    "url": "assets/js/34.1592195a.js",
    "revision": "6adf80c34ee2a36c106f1a8759eadf62"
  },
  {
    "url": "assets/js/35.c7895ae1.js",
    "revision": "74fd4872f9ad5e58cead90793b819f67"
  },
  {
    "url": "assets/js/4.bb418cf7.js",
    "revision": "6ee1b70bbd286200d8df4ee35bbbfabb"
  },
  {
    "url": "assets/js/5.8b8d5693.js",
    "revision": "691217fa42abc3dfff4bea38cb890129"
  },
  {
    "url": "assets/js/6.d92ab16f.js",
    "revision": "4fa7cbc12fb8d7f802b9ac39bb3fff79"
  },
  {
    "url": "assets/js/7.3cd604c5.js",
    "revision": "c4bc7b4dc84282822af4014e1f53923c"
  },
  {
    "url": "assets/js/8.56331424.js",
    "revision": "0977a5a0925a4a79c2e38a9f696a7e11"
  },
  {
    "url": "assets/js/9.a9a31eae.js",
    "revision": "c6164c30c095970874dda0cd6693377f"
  },
  {
    "url": "assets/js/app.f12edacb.js",
    "revision": "94df723479d20ad5d9f12eff735420b5"
  },
  {
    "url": "index.html",
    "revision": "91d2885972d1536b14116a47b3a41010"
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
