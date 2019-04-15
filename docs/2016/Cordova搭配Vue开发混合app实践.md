## Cordova搭配Vue开发混合app实践
`2016-12-15`

### 概览
- Cordova

    Cordova 能够将你的 HTML/JS 代码打包在一个原生的容器中运行，并且可以调用系统的各类软硬件接口（JavaScript API）。我们将这种架构称之为 `hybrid app` , 得益于这种架构，我们能将前端代码跨平台运行，并且得到接近原生应用的系统特性。最终发布到各大应用市场，包括苹果的 App Store。
- Cordova 插件

    Cordova 通过插件的生态系统为开发者提供了广泛的软硬件接口支持，诸如文件读写、推送通知、解压缩、通讯录等等。这种方式保证了在开发过程中按需引入相应的功能插件，同时也加快了插件的更新维护，减少代码冗余。Cordova 插件使用 CLI 的方式经过 NPM 管理依赖并安装，十分方便。
- Cross-walk Project

    Cross-walk 是英特尔开发的一款为HTML应用提供运行时环境的开源项目，它基于最新的 Chromium 核心开发，可以提供最新的 Web 特性和一致的兼容性。随着 Cordova Android 4.0.0+ 引入了对嵌入式 webview 的支持，现在你可以方便地在你的 Cordova 应用上使用 Crosswalk 的 webview。通过使用 Crosswalk 的 webview 插件，开发者可以享用远程调试的功能，前沿的 HTML5 特性，例如WebGL, WebAudio 和 WebRTC，以及在包括 Android 4.0 Ice Cream Sandwich(ICS) 在内的 Android 设备上性能的显著提升。
- Vue.js

    Vue.js 是一套构建用户界面的 渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和Vue 生态系统支持的库开发的复杂单页应用。基于 Vue 框架，开发单页面的 hybrid app 将会变的非常高效。
- CodePush

    CodePush 是微软提供的一项云服务，它为开发者提供了直接向用户推送热更新 (Hot-Code-Update) 的软件支持和 CDN 分发网络。CodePush 为 Cordova 开发者提供了插件，我们可以快速地植入应用中。它提供的特性包括：版本管理、灰度更新、紧急回滚、增量更新 (Diff) 等等。它的 CDN 是世界上最大的 CDN 服务商 Akamai 提供的，稳定性和速度可想而知。*未来可能收费*

### 初始化开发环境
1. **Nodejs 版本更新** 使用 `node -v && npm -v` 检查版本，如果低于 v6.0.0 和 v3.0.0，请使用 `n` 工具更新：`sudo npm install n -g && n stable`
2. **NPM 包的源管理** 实际使用中 npm 的源服务器位于美国，速度较慢，所以我们用阿里巴巴的 npm 源镜像替代默认源：`sudo npm install nrm -g && nrm use taobao`，此操作将会将源地址设定为：`https://registry.npm.taobao.org/` ，服务器位于阿里云，速度飞快。
3. **安装 Xcode （OS X 选装）** 前往 Mac App Store 下载最新版 Xcode，并安装 Command Line Tools，便于在 iOS 模拟器中调试。
4. **安装 Android Studio（必装）** 前往 Android Studio [官网][1] 下载 Android Studio 并安装 SDK 24+，根据引导提示即可安装完成。缺少这一步将不能成功 build 和 run 项目。
5. **新建 Cordova 项目** 简单地按照官方文档新建项目：[文档链接][2]
6. **一点小麻烦** 当你执行到 `cordova platform add android` 这一步时，可能会遇到卡在 `> Configuring > 0/2 projects` 长达几个小时之久。在此需要对 `cordova platform add android` 这个命令的原理做一个解释，它做了以下几件事：
	- 创建 Android 项目框架和文件结构
	- 首次执行下载 gradle (专门用来管理 Android 项目 maven 包的工具）
	- 配置 build.gradle 构建脚本
	- 下载项目需要的 maven 包
	- 清理冗余的 Cordova Lib
	- 构建项目

	可惜的是，gradle 似乎在下载 https 协议的时候有一些 bug，导致 maven 包不能成功下载。这时候需要一些奇技淫巧：
	- 找到你的 gradle 目录，一般在 `~/.gradle/wrapper/dists/gradle-2.14.1-all/53l0mv9mggp9q5m2ip574m21oh/gradle-2.14.1/` 下。
	- 修改 `src/core/org/gradle/api/artifacts/ArtifactRepositoryContainer.java ` 文件，把 `MAVEN_CENTRAL_URL` 变量修改为 `http://repo1.maven.org/maven2 `
	- 修改 `src/core/org/gradle/api/internal/artifacts/dsl/DefaultRepositoryHandler.java ` 文件，把 `BINTRAY_JCENTER_URL ` 变量修改为 `http://jcenter.bintray.com/`
	- 重新构建 Android 项目，`cordova platform remove android && cordova platform add android`，大功告成。
7. **运行示例项目** 下面我们尝试在模拟器和安卓真机中调试：
	- iOS：`cordova run ios` 等待编译完成后会自动打开 iOS 模拟器
	- Android：`cordova run android` 或 `cordova build android` 后在 `yourApp/platforms/android/build/outputs/apk ` 目录中找到打包好的 apk 进行真机安装并调试。
	- iOS 的真机调试需要开发者帐号并注册开发设备，在此不详述。

### 使用 Cordova 插件引入 Cross-walk webview
在上一步中我们成功地让示例 html 文件跑在了 Cordova 环境中。但在实际开发中，会遇到 Android 系统版本落后，原生 webview 性能差兼容性差的问题，所以我们要用 Cross-walk 替换原生的 Android webview 来运行我们的项目。
Cross-walk 开发社区已经为我们准备好了 Cordova 插件，只需要运行：
` cordova plugin add cordova-plugin-crosswalk-webview@latest —save `
在这里需要说明的是，必须加上 `@latest` 后缀，安装 2.2.0+ 版本，否则会遇到 [\#XWALK-7422 ][3] 的问题。
成功安装后再次 `cordova build android `，你会发现输出了两个 apk 文件，一个对应 arm 平台，一个对应 x86 平台，体积相较原来的文件增加了 20Mb 左右，多出来的体积便是 crosswalk-webview 的 runtime。
你也可以在项目的 `config.xml` 中设置：
```xml
<plugin name="cordova-plugin-crosswalk-webview" spec="~2.2.0">
    <variable name="XWALK_VERSION" value="22+" />
    <variable name="XWALK_LITEVERSION" value="xwalk_core_library_canary:17+" />
    <variable name="XWALK_COMMANDLINE" value="--disable-pull-to-refresh-effect" />
    <variable name="XWALK_MODE" value="embedded" />
    <variable name="XWALK_MULTIPLEAPK" value="true" />
</plugin>
```
把 `XWALK_MULTIPLEAPK` 的 value 设置为 false，即可打包出一个整合两个平台的 apk 包，当然，体积会暴增至 40Mb+。

### 使用 Chrome 调试 Cross-walk webview 中的项目
由于 Cross-walk 基于 Chromium，天生便具有了 Chrome 远程调试的功能。
电脑连接 Android 手机并开启 USB 调试模式，打开你的 Cordova 项目后，在 Chrome 浏览器地址栏中输入 `chrome://inspect` ，选择你的设备，即可打开远程控制台，真机调试变得十分方便。Vue Devtool 同样可以在此使用。

### iOS 的小优化 将 UIWebView 替换为 WKWebView
WKWebView 是苹果在 iOS 8 中引入的新组件，目的是给出一个新的高性能的 Web View 解决方案，摆脱过去 UIWebView 的老旧笨重特别是内存占用量巨大的问题（打开一个示例项目，WKWebView 占用23M，而 UIWebView 占用85M）。
在这里我们将使用 WKWebView 替换 Cordova 默认的 UIWebView：
`cordova plugin add cordova-plugin-wkwebview-engine@latest --save`
并在 config.xml 的 `<platform name="ios"> `中添加：
```xml
<feature name="CDVWKWebViewEngine">
    <param name="ios-package" value="CDVWKWebViewEngine" />
</feature>
```

### 使用 Cordova 插件的 JavaScript API 调用系统原生接口
可在[插件搜索页][4]搜索需要的插件，以Camera[插件链接][5]插件为例，在命令行进入项目所在文件夹，输入`cordova plugin add cordova-plugin-camera --save`
然后在页面的js部分先要添加：
```JavaScript
document.addEventListener("deviceready", func, false);
```
所有的插件都需要在func函数之后执行。
Camera的方法都定义在navigator对象上，Navigator对象包含有关浏览器的信息，所有浏览器都支持，在文件任何js部分调用navigator.xxx方法即可。
但并不是所有插件的方法都定义到navigator对象上，根据具体的插件文档而定。例如极光推送的插件[插件链接][6]的方法都定义的window对象上。
之后的插件各种方法的使用可以参照对应插件的文档使用。

#### Cordova-plugin-whitelist 和 CSP 安全策略
出于安全考虑，Cordova 4.0 以上环境中，需要安装`cordova-plugin-whitelist`插件并 对 `config.xml` 中的 `<access origin="your-policy" />` 标签和 `index.html` 中的 `META` 标签做一定设置，防止出现共享 Webview 模式下的跨站攻击等安全问题。
运行：
```bash
cordova plugin add cordova-plugin-whitelist --save
```
并编辑 `config.xml`：
```xml
    <!--以下是开发环境配置，不对来源做任何限制，生产打包时需要设置-->
    <access origin="*" />
    <allow-intent href="*" />
    <allow-navigation href="*" />
```
在 `index.html` 中添加：
```html
<!--同样，生产打包时需要严格设置-->
<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: cdvfile: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; font-src * data:; img-src *; script-src *;">
```
CSP（Content-Security-Policy）的详细设置：
 - 指令：
![](./images/CSP-Policy.png)
 - 指令值：
![](./images/CSP-Value.png)



### Vue.js 的分片打包模式
在大型应用中，我们可能需要将应用拆分为多个小模块，按需从服务器下载。Vue.js 允许将组件定义为一个工厂函数，动态地解析组件的定义。工厂函数接收一个 resolve 回调，在收到从服务器下载的组件定义时调用。
在定义router的时候，可以给component属性一个工厂函数，`require.ensure`是commonjs异步加载方法，中括号中可以为空，这里写上相当于先加载，但没执行，下面的require才是执行。
`require.ensure`语法告诉 webpack，自动将编译后的代码分割成不同的块。
在命令行打包`npm run build`之后，在dist/static/js文件夹下会多出一个js文件和map文件 。
```JavaScript
routes:[{
    path:'/example',component:resolve => require.ensure(['../components/example.vue'], () => {
        resolve(require('../views/example.vue'))
    })
}】
```
如果你在`require.ensure`的函数中引用了两个以上的模块，比如某个路由下的所有组件都打包在同个异步中，需要提供`require.ensure`第三个参数作为的名称,这时webpack会把它们打包在一起，比如：
```JavaScript
require.ensure([], function(require){
    var list = require('./list');
    list.show();
    var edit = require('./edit');
    edit.display();
}, 'all');
```
list.js和edit.js将会被打包成一个文件，并命名为all.js。如果不希望打包在一起，只能写两个require.ensure分别引用这两个文件。
**注意** 如果希望生成的文件是我们给的Chunk，需要改一下webpack的配置，将build/webpack.prod.conf.js的第19行修改如下：
```JavaScript
chunkFilename: utils.assetsPath('js/[name].js')
```


### 添加 CodePush 热更新功能
为了实现本次 App 架构中的单个组件发布和热更新功能，引进了微软开发的 CodePush 工具。
- 运行：

```bash
cordova plugin add cordova-plugin-code-push@latest --save
```
- 安装 code-push 命令行并注册帐号（仅开发试用，正式部署会有专门的帐号）：

```bash
sudo npm install -g code-push-cli
code-push register //你可以通过 Github 或者 微软帐号登录
code-push login //登录后会在本地生成 session 文件用来验证你的发布权限
```
- 创建 app：

```bash
code-push app add <appName>
```
这一步会生成 key，将 staging 中的 key 复制到下一步使用。

- 在 app 的 `config.xml` 中配置你的部署 key：

```xml
<platform name="android">
    <preference name="CodePushDeploymentKey" value="YOUR-ANDROID-DEPLOYMENT-KEY" />
</platform>
<platform name="ios">
    <preference name="CodePushDeploymentKey" value="YOUR-IOS-DEPLOYMENT-KEY" />
</platform>
```
- 在你的 `index.html` 中允许安全策略，添加 `https://codepush.azurewebsites.net` 的域名：

```
<meta http-equiv="Content-Security-Policy" content="default-src https://codepush.azurewebsites.net ... />
```
- 添加代码更新逻辑：

```JavaScript
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        const downloadProgress = (progress) => { console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`); }
        codePush.sync( null, {updateDialog: true, installMode:InstallMode.IMMEDIATE, mandatoryInstallMode: InstallMode.IMMEDIATE}, downloadProgress );
    }
};
app.initialize();
```
这时重新打包 app，并运行。

- 验证发布代码功能

修改你的任意代码后，运行：

```shell
code-push release-cordova <appName> <platform>

code-push release-cordova MyApp-ios ios
code-push release-cordova MyApp-Android android
```

- 关闭 app 重新打开并测试更新是否成功
![](./images/Screenshot-1.jpeg)


### 自定义插件
在实际项目中可能需要自己开发一些特殊的插件。这需要涉及到一些原生开发的知识。这里以开发iOS的插件为例。  
- 首先，在任意目录下创建一个插件目录，如在desktop新建一个文件夹rayeye-TestPlugin，然后在com.anasit.callnative目录下新建src、www两个目录，src中存放的是对应平台的插件代码，www存放的是插件的js代码，再新建一个plugin.xml文件，写入的是插件的相关配置信息，本例只开发了iOS平台，所以在src下再新建ios目录。
- 在www文件夹下创建testPlugin.js：
```JavaScript
var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');
var testPlugin = function(successCallback, errorCallback, options) {
    argscheck.checkArgs('fFO', 'navigator.testPlugin', arguments);
    options = options || {};
    var getValue = argscheck.getValue;
    var a = getValue(options.a, 'aaa');
    var b = getValue(options.b, 'bbb');
    var args = [a, b];
    exec(successCallback, errorCallback,"testPlugin","test",args);
};
module.exports = testPlugin;
```

- iOS native部分，在src/ios文件夹下新建 IosPlugin.h 和 IosPlugin.m文件：
```Objective-C
//  IosPlugin.h
#import <Cordova/CDV.h>
@interface IosPlugin : CDVPlugin
- (void)test:(CDVInvokedUrlCommand*)command;
@end
```
- 
```Objective-C
//  IosPlugin.m
#import "IosPlugin.h"
#import <Cordova/CDV.h>
@implementation IosPlugin
- (void)test:(CDVInvokedUrlCommand *)command{
    NSString *s1 = [NSString stringWithFormat:@"%@", [command.arguments objectAtIndex:0]];
    NSString *s2 = [NSString stringWithFormat:@"%@", [command.arguments objectAtIndex:1]];
    UIAlertView *alertview = [[UIAlertView alloc] initWithTitle:s1 message:s2 delegate:self cancelButtonTitle:@"取消" otherButtonTitles:@"确定", nil];
    [alertview show];
}
@end
```
- 编辑plugin.xml：
```xml
 <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="rayeye-TestPlugin"
        version="0.0.1">
        <name>rayeye-TestPlugin</name>
        <description>Call Native Plugin</description>
        <license>Apache 2.0</license>
        <keywords>call native</keywords>
        <js-module name="testPlugin" src="www/testPlugin.js">
            <clobbers target="window.testPlugin"/>
        </js-module>
        <platform name="ios">
            <config-file target="config.xml" parent="/*">
                <feature name="testPlugin">
                    <param name="ios-package" value="IosPlugin" />
                </feature>
            </config-file>

            <header-file src="src/ios/IosPlugin.h" />
            <source-file src="src/ios/IosPlugin.m" />
        </platform>
    </plugin>
```
- 在项目根目录下打开命令行，输入cordova plugin add rayeye-TestPlugin(注：根据自己设置的路径写)，按下回车后，插件就会自动安装到项目根目录下的plugins目录中。
- 最后在页面文件中调用`window.testPlugin(successcallback, errorcallback, {a: "111",b: "222"});`即可弹出一个原生的弹框。


### Android 生产打包
- 从Android Studio的"File"->"Open"打开你的cordova项目下的/platforms/android。
![](./images/openproject.png)
- 选择"Build"->"Generate Signed APK"，点击"next"。
![](./images/buildproject.png)
- 此处选择一个已有的签名，或者新建一个。点击"next"。
![](./images/signproject.png)
- 此处选择release生产版本，点击finish完成。
![](./images/finishproject.png)

### iOS 生产打包
- 前提是在苹果开发者网`https://developer.apple.com/account/`站生成了需要的appid,证书和profile文件，不累述。
- 在Display Name 修改应用名称。![](./images/DisplayName.png)
- 用Xcode打开工程，注意是.xcworkspace(白颜色)的工程，不是.xcodeproj(蓝颜色)的工程。
- 在Resources/Images.xcassets里修改启动图片和应用图标，AppIcon是对应平台的图标，LaunchImage是启动图片。
- 选择“Product”->"Edit Scheme..."，在“Build Configuration”中选择“Release”,单击"Close"。
- 选择菜单栏中的"Product"->"Archive"，选择刚刚的工程，选择“Export...”，选择第一个(Save for iOS App Store Deployment)，点击Export。然后会生成一个文件夹，里面是ipa包。
- 打开 Application Loader，选择“交付您的应用程序”，选取之前生成的ipa包，然后下一步。
- 去`https://itunesconnect.apple.com/WebObjects/iTunesConnect.woa/ra/ng/`完成app相关信息的填写

### 极光推送的使用
- 插件地址`https://github.com/jpush/jpush-phonegap-plugin`
- 安装:`cordova plugin add jpush-phonegap-plugin --variable API_KEY=your_jpush_appkey`

```JavaScript
document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("jpush.openNotification", onOpenNotification, false);//点击通知启动或唤醒应用程序时会出发该事件
document.addEventListener("jpush.receiveNotification", onReceiveNotification, false);//应用程序处于前台时收到推送会触发该事件
document.addEventListener("jpush.backgroundNotification", onBackgroundNotification, false);//后台收到推送,不知道何用，处在后台还能干嘛吗
document.addEventListener("jpush.receiveMessage", onReceiveMessage, false);//收到自定义消息
```



[1]:	https://developer.android.com/studio/index.html
[2]:	https://cordova.apache.org/docs/en/6.x/guide/cli/index.html
[3]:	https://crosswalk-project.org/jira/browse/XWALK-7422
[4]:	https://cordova.apache.org/plugins/
[5]:	https://www.npmjs.com/package/cordova-plugin-camera-all-files
[6]:	https://github.com/jpush/jpush-phonegap-plugin