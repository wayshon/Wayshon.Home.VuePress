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
    "revision": "e3917a635b01d87c1dd127bf0a036132"
  },
  {
    "url": "2016/Cordova搭配Vue开发混合app实践.html",
    "revision": "654dae264be5c7d6c77e3c88dea93d9f"
  },
  {
    "url": "2016/ES6学习笔记.html",
    "revision": "fd0acff098f2d1834c7a8f7fac6b00d1"
  },
  {
    "url": "2016/iOS-sqlite3外键级联删除问题解决.html",
    "revision": "a7f347b9e6b7faba1d48efc892868e98"
  },
  {
    "url": "2016/iOS自带的宏.html",
    "revision": "28611536eddd3991e6f7c9f35037a1fd"
  },
  {
    "url": "2016/iOS获取当前屏幕的视图控制器.html",
    "revision": "b0ba0523f4d6248e5ad9a152aaa1e897"
  },
  {
    "url": "2016/使用FMDB事务批量存入数据.html",
    "revision": "691003520f9df6d048e307bf3cd3d58b"
  },
  {
    "url": "2016/栈,堆,全局区,常量区,代码区的区别.html",
    "revision": "0d50d633d31499a8fb3deb74adf73107"
  },
  {
    "url": "2017/git使用笔记.html",
    "revision": "4aa38e440515e5e29f691aa94e51c958"
  },
  {
    "url": "2017/js_addEventListener&removeEventListener.html",
    "revision": "ab6ec62a9c02476bc003f2dac035fc12"
  },
  {
    "url": "2017/js_event-loop.html",
    "revision": "bb1ecc2a4a1c4d018b828ec437830efa"
  },
  {
    "url": "2017/再学vue.html",
    "revision": "064e3f4b711e533cd1354c9331aa13da"
  },
  {
    "url": "2017/判断浏览器终端.html",
    "revision": "25c1baffb2c8c26e207e2b3166d2414a"
  },
  {
    "url": "2017/正则小记.html",
    "revision": "4fcb688f07dbe3c63bb90d1d9b2647bf"
  },
  {
    "url": "2017/浏览器渲染流程.html",
    "revision": "074548c30b324a54f896a8303fa91ce0"
  },
  {
    "url": "2017/蝴蝶书学习笔记.html",
    "revision": "f442513c65123ecb8ec251e1d7171b94"
  },
  {
    "url": "2018/JavaScript常见排序.html",
    "revision": "6091bc48f99d3436c4e461673370a78b"
  },
  {
    "url": "2018/Review_JavaScript.html",
    "revision": "61f6f4b7e79e271939064296d4521c7d"
  },
  {
    "url": "2018/virtual-dom-learning.html",
    "revision": "ab4b00d2b140eca820087742949b5ff4"
  },
  {
    "url": "2018/样式小记.html",
    "revision": "7e848eb2e6750c71acd5bb35c5f5293e"
  },
  {
    "url": "2018/网络请求相关.html",
    "revision": "c619139e730348548a7efd697be5eac5"
  },
  {
    "url": "2019/ios-app内页面添加到桌面.html",
    "revision": "b419bb83d332f33a6e4efb06241e5233"
  },
  {
    "url": "2019/ReactNative是怎么在iOS上跑起来的.html",
    "revision": "b3bc06c5692b791a8f77194a95159d2c"
  },
  {
    "url": "2019/前端页面优化常见方法.html",
    "revision": "285d80e8dc1d4d3e04240dbf4d6ac33a"
  },
  {
    "url": "2019/面试-扑克牌问题.html",
    "revision": "01c5f20da1f55cde8981631de575e572"
  },
  {
    "url": "2020/flutter模仿网易云音乐.html",
    "revision": "b2f35fee2629310d2355e766a9663f25"
  },
  {
    "url": "2020/基于Flutter的HybridWebview容器实践.html",
    "revision": "46a9f6036ba8ef86784b00112122763d"
  },
  {
    "url": "2020/常见的跨端方案.html",
    "revision": "96fc713c3fb3c9bac37e69cc4041fdab"
  },
  {
    "url": "2020/怎么开发一个flutter-ios插件.html",
    "revision": "9082ff557f48496d5c7b9eed313ead0e"
  },
  {
    "url": "2021/浅聊JavaScript浮点数.html",
    "revision": "2d53411c02a8188e87c7a04594a5d9e6"
  },
  {
    "url": "2021/简单易懂的了解CSRF.html",
    "revision": "8d77545639a938debb725234c1cd1c1a"
  },
  {
    "url": "2021/补码-计算机存储数据的方式.html",
    "revision": "5869c80db17a7491940f296bb644d7b3"
  },
  {
    "url": "404.html",
    "revision": "b15aa691ae1292bc60a1a4d55d2d18cb"
  },
  {
    "url": "about.html",
    "revision": "64f7289bf53c83b81a9f27fdf2b2b25c"
  },
  {
    "url": "archives.html",
    "revision": "25a3b6de35205e79d519809bdd275893"
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
    "url": "assets/js/10.be2e6ab5.js",
    "revision": "8ec5feb2a8b63d9a90ed9e717d285d84"
  },
  {
    "url": "assets/js/11.d9f51652.js",
    "revision": "1893929f4f8c3e4e9cd29ade299ccec1"
  },
  {
    "url": "assets/js/12.7216bc82.js",
    "revision": "fe30bae3b5069eeffbd411dc7d7f7afc"
  },
  {
    "url": "assets/js/13.a2a3d96c.js",
    "revision": "72d099e308fe43dbd9738a3e54df8358"
  },
  {
    "url": "assets/js/14.7948a5fa.js",
    "revision": "d39c1b3a3c0717adcf535e213b132413"
  },
  {
    "url": "assets/js/15.d707752e.js",
    "revision": "286162a9aa464bf7a6f4fbf31ded55c4"
  },
  {
    "url": "assets/js/16.240ef677.js",
    "revision": "9f24798abce3e5ee963d117fe9623126"
  },
  {
    "url": "assets/js/17.bde028d0.js",
    "revision": "7a48b1d2d637c9fa10538815b7ed9245"
  },
  {
    "url": "assets/js/18.8eba37ba.js",
    "revision": "2864da31c8a069134f2ac45f085aae16"
  },
  {
    "url": "assets/js/19.36b82dc1.js",
    "revision": "640d2153849c4ac5eaf4152d9359e180"
  },
  {
    "url": "assets/js/2.fbb50f75.js",
    "revision": "26d3e8374bd85f781d35ac1b69ed1531"
  },
  {
    "url": "assets/js/20.ca5658e3.js",
    "revision": "6b65d289b9a3da767e9b35377c34030a"
  },
  {
    "url": "assets/js/21.ddfc4c5d.js",
    "revision": "4df4033b86b4b27afd36988e996f710a"
  },
  {
    "url": "assets/js/22.01e89e94.js",
    "revision": "524a945d2e205289966edbfaa0b986b8"
  },
  {
    "url": "assets/js/23.3ed78d34.js",
    "revision": "24305849a0f7b35b71fcab9f8d879d57"
  },
  {
    "url": "assets/js/24.fd920207.js",
    "revision": "d60c8704a1d6ef2078b2a79cbeea53bb"
  },
  {
    "url": "assets/js/25.c9bc6d8b.js",
    "revision": "d27e600cfc78e4c236ccdb9d4244973a"
  },
  {
    "url": "assets/js/26.e7a4711a.js",
    "revision": "95d4019852fe75bbf9441666c592d42a"
  },
  {
    "url": "assets/js/27.8a277cc9.js",
    "revision": "9f93b90ecc7cf5f03a24e1e28553e6cc"
  },
  {
    "url": "assets/js/28.00a84ea3.js",
    "revision": "5d4e55a97b03df3eac4a051df907fb59"
  },
  {
    "url": "assets/js/29.4df98ca9.js",
    "revision": "f4170eef0f9812444c187cb5fbe42fdb"
  },
  {
    "url": "assets/js/3.fea34e09.js",
    "revision": "8c578238b53244f0abf7c818b0a8b8c9"
  },
  {
    "url": "assets/js/30.2c5e7684.js",
    "revision": "973e9bd8ca0376ecd73128dc128dd827"
  },
  {
    "url": "assets/js/31.7181a5a2.js",
    "revision": "6a0c0940974eb344486e8043cd34a725"
  },
  {
    "url": "assets/js/32.9e4b6909.js",
    "revision": "2cac2834c93d0a4e3bfb0fbcf9b54303"
  },
  {
    "url": "assets/js/33.6d4fba3d.js",
    "revision": "c9c5a7a882bc2aaca99444f698ab9d86"
  },
  {
    "url": "assets/js/34.7ecbc875.js",
    "revision": "44a415d1e03a03ff0bf8ee3a3347c7b5"
  },
  {
    "url": "assets/js/35.d57f404b.js",
    "revision": "3142d5b1e00bb87a4b0a730807c0a193"
  },
  {
    "url": "assets/js/36.618caf8c.js",
    "revision": "106a18834b0012f608e3dedb42280f06"
  },
  {
    "url": "assets/js/37.e9f93010.js",
    "revision": "8daa8213cc895f6062605070bd000280"
  },
  {
    "url": "assets/js/38.a3370085.js",
    "revision": "985832258a1f1ace735d5247d20c1a7a"
  },
  {
    "url": "assets/js/4.439ef9b3.js",
    "revision": "516aec7839e43c1bf5bf692aa2d79873"
  },
  {
    "url": "assets/js/5.3e055ced.js",
    "revision": "34d095a6980aa4b9c5b4f9cda0ec2680"
  },
  {
    "url": "assets/js/6.be44f2e9.js",
    "revision": "8e735f28cb0563dbf5f4638132a6c0e8"
  },
  {
    "url": "assets/js/7.eb56102e.js",
    "revision": "c199d6d191a7653a5738b0834ef206b8"
  },
  {
    "url": "assets/js/8.ebaa3a6a.js",
    "revision": "27e9580f9c1bf7aa587b535f5cb1be29"
  },
  {
    "url": "assets/js/9.d89c1bc5.js",
    "revision": "d43c6d2a9541390b52f450a62f32f307"
  },
  {
    "url": "assets/js/app.fa433599.js",
    "revision": "2cdb82b26b87c3da37f0cd9d71219f36"
  },
  {
    "url": "index.html",
    "revision": "c7ef8780109ad687f862f2efd2a77868"
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
