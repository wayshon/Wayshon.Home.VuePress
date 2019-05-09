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
    "revision": "ce6f668a44826334a7424566014095f3"
  },
  {
    "url": "2016/Cordova搭配Vue开发混合app实践.html",
    "revision": "4edf2eb50b8bf12172cbd2c61f9d3690"
  },
  {
    "url": "2016/ES6学习笔记.html",
    "revision": "c7d47bfaf4e3210ea72888d42f7ce500"
  },
  {
    "url": "2016/iOS-sqlite3外键级联删除问题解决.html",
    "revision": "ed8469c4751ba3cdbe743493abda77cb"
  },
  {
    "url": "2016/iOS自带的宏.html",
    "revision": "b092fd41bc81d865f662cf6c52da314f"
  },
  {
    "url": "2016/iOS获取当前屏幕的视图控制器.html",
    "revision": "5960ff7bc0c331b6830a33bb428f4421"
  },
  {
    "url": "2016/使用FMDB事务批量存入数据.html",
    "revision": "3e777431275ab4d28d30ac6cf09b217c"
  },
  {
    "url": "2016/栈,堆,全局区,常量区,代码区的区别.html",
    "revision": "4e308ee685c856a6610d0cfc2b19bdab"
  },
  {
    "url": "2017/git使用笔记.html",
    "revision": "7a55518400c9a42b3fb2a88c5d847e16"
  },
  {
    "url": "2017/js_addEventListener&removeEventListener.html",
    "revision": "338ebee68d56e0667ad0af0e783f6ebb"
  },
  {
    "url": "2017/js_event-loop.html",
    "revision": "8850df3d0c8ae5ae8dc57996b225a750"
  },
  {
    "url": "2017/再学vue.html",
    "revision": "c90c0dbde9690855b9425e079af22048"
  },
  {
    "url": "2017/判断浏览器终端.html",
    "revision": "62dc728ef41e355a4e51a74fc2ad4ecd"
  },
  {
    "url": "2017/正则小记.html",
    "revision": "0415d73e8288cd6e48f8414893a91fda"
  },
  {
    "url": "2017/浏览器渲染流程.html",
    "revision": "306d4843f453f2bb88ccbd949ab1f24b"
  },
  {
    "url": "2017/蝴蝶书学习笔记.html",
    "revision": "f879e4cc700592f25fe7bb11d7df37b6"
  },
  {
    "url": "2018/JavaScript常见排序.html",
    "revision": "b61f672cd5d289103d1fd58b89ef9a87"
  },
  {
    "url": "2018/Review_JavaScript.html",
    "revision": "fc8dc4ef5839787bfe39eede9b3ae247"
  },
  {
    "url": "2018/virtual-dom-learning.html",
    "revision": "8bce651ca4619f73db73b693d98bf88a"
  },
  {
    "url": "2018/样式小记.html",
    "revision": "530bb99bc7bd6d64eb3003dfd379e62e"
  },
  {
    "url": "2018/网络请求相关.html",
    "revision": "47f0763bcc8fca8eb7e9488233b101d9"
  },
  {
    "url": "2019/ios-app内页面添加到桌面.html",
    "revision": "14723ebaf317ff48c772311ae29160e0"
  },
  {
    "url": "2019/ReactNative是怎么在iOS上跑起来的.html",
    "revision": "bce0f8445adda8535b50c8e9cdc0fa6d"
  },
  {
    "url": "2019/前端页面优化常见方法.html",
    "revision": "e6c16d3b8529d475737a918b340942b3"
  },
  {
    "url": "404.html",
    "revision": "469fb67465031e90f762e7a94b0762ca"
  },
  {
    "url": "about.html",
    "revision": "b5b7a36bf8cb2d1f660857802a18220b"
  },
  {
    "url": "archives.html",
    "revision": "01a0d09899ff393c6832ff69fda73be4"
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
    "url": "assets/js/10.6c045679.js",
    "revision": "f6729e6865cfaf179c4d1ed8e0d40412"
  },
  {
    "url": "assets/js/11.4914087d.js",
    "revision": "fb12b0ab31e8fc6c6aef01a8c4662acc"
  },
  {
    "url": "assets/js/12.9d796439.js",
    "revision": "d94bd45e9a66929d0d395005b3027c38"
  },
  {
    "url": "assets/js/13.f74888b4.js",
    "revision": "7e6655c64923b5ffb9a6ea0e09d5ea0d"
  },
  {
    "url": "assets/js/14.66c85ebb.js",
    "revision": "a9ad89b7902f89cd58542a4594931e71"
  },
  {
    "url": "assets/js/15.73ec563c.js",
    "revision": "147512dfab28b9b2592cfafcd0a61aea"
  },
  {
    "url": "assets/js/16.c9dc8cc6.js",
    "revision": "ba74eca229ede92004ef3018fc5793e1"
  },
  {
    "url": "assets/js/17.6f46f878.js",
    "revision": "4163cec95e6b912d6d8ff4e6ede0b31a"
  },
  {
    "url": "assets/js/18.c91fc2cd.js",
    "revision": "663a9988e434c6632abeadea855138b4"
  },
  {
    "url": "assets/js/19.0ed398b9.js",
    "revision": "0b18cd7f975e93818197d40c1cf864ef"
  },
  {
    "url": "assets/js/2.96c86d40.js",
    "revision": "87d620edc78ffc18a7e3e22be8800353"
  },
  {
    "url": "assets/js/20.141b1bc5.js",
    "revision": "8feea08e31f898c29434cddbc048825c"
  },
  {
    "url": "assets/js/21.e32b8cf1.js",
    "revision": "14fd6ba0251808e56785848a3feffef5"
  },
  {
    "url": "assets/js/22.e71a834e.js",
    "revision": "7e03539180d71d0537616efb0f682b40"
  },
  {
    "url": "assets/js/23.7ba073e1.js",
    "revision": "b7b95433b07dee8909c71653990a2487"
  },
  {
    "url": "assets/js/24.6662c3e4.js",
    "revision": "8d872cdb0825a5facb118847de7aa9e2"
  },
  {
    "url": "assets/js/25.306c3c14.js",
    "revision": "38360cf513df3662ad649e4b4f0b953e"
  },
  {
    "url": "assets/js/26.36577ab9.js",
    "revision": "e67da5c5c053fd7ae6a4db3268859989"
  },
  {
    "url": "assets/js/27.9759ff6a.js",
    "revision": "2b543a9ac6fbb39e47fea88e7d9403fd"
  },
  {
    "url": "assets/js/28.f4538f6a.js",
    "revision": "0a72c0ffd5878ed9abc25699b5a78b56"
  },
  {
    "url": "assets/js/29.ce88f1b8.js",
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
    "url": "assets/js/4.37a433c0.js",
    "revision": "1d57088bef030fe8e03ca0ee9381e6af"
  },
  {
    "url": "assets/js/5.a555c5a5.js",
    "revision": "5d35ed0d8090845f720bab2f12e683d9"
  },
  {
    "url": "assets/js/6.126cd93f.js",
    "revision": "3563141cc7b6b76a5e6bd1ff701819d0"
  },
  {
    "url": "assets/js/7.fcb7051b.js",
    "revision": "613050f54a3da07f08828284dca03e17"
  },
  {
    "url": "assets/js/8.e3f70f4e.js",
    "revision": "177aaa631e25ddba759d0e4e12332be6"
  },
  {
    "url": "assets/js/9.b371c8dc.js",
    "revision": "3e78cf00e42aa32adbda236537e01a39"
  },
  {
    "url": "assets/js/app.45b60805.js",
    "revision": "b2187857722e182a7a57c43da825419b"
  },
  {
    "url": "index.html",
    "revision": "248d1a5f71186f7cc3d82c7dbf0d0840"
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
