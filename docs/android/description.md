---
title: 简介
lang: zh-CN
---

# 📄 简介
一个基于AndroidX、RxAndroid、Retrofit、Glide、AndroidUtilCode、Dagger2、Calligraphy3、
Lombok、友盟、 MMKV等前沿技术搭建的MVVM架构Android客户端，可进行QQ登录，微信登录。采用最新Androidx构建并向后兼容各个Android版本
引入Material-Dialogs支持可定制风格对话框弹出，引入RxJava+RxAndroid，支持java响应式编程与安卓扩展异步UI事件响应式编程，
引入RxBinding，支持用RxJava的形式来处理UI事件，引入RxLifecycle让安卓组件(活动或者碎片)生命周期同步,防止内存泄露，
采用Retrofit、OkHttp、RxJava进行网络请求，集成AndroidUtilCode工具库，降低相关API的学习成本，提高工作效率，使Java拥有函数式语言般的优雅，
让Java语言也可以甜甜的，集成Dagger2实现了IOC依赖控制反转,帮助您的应用程序拆分为松散耦合的组件,可以更轻松地开发、测试和维护这些组件，
集成Calligraphy3字体风格库，实现字体个性化，集成Lombok，让代码变得更加简洁，消除冗长代码提高开发效率，集成腾讯bugly平台，支持异常上报和数据分析功能，帮助开发者快速定位bug，
集成PictureSelector，支持微信风格的图片自定义选择器进行上传，集成友盟库，支持消息推送、社交分享、QQ登录、微信登录、移动统计数据，自定义引导启动页面、自动化数据采集，集成Glide，支持各种图片加载，
集成腾讯MMKV，让 key-value 数据存储变得更加高效，集成refresh-layout布局刷新框架，实现了回收视图数据分页，解决大量数据场景不会卡顿，支持各种目前主流刷新布局，
集成高德地图支持地图后台定位刷新不被杀死，并且支持地图gps旋转方向变化跟地图导航，支持媒体锁在后台保活应用程序，提供通用下载上传，一行代码解决上传下载支持进度条显示，
提供RxBus、信使、支持全局组件通信发布订阅，封装基础Activity、ViewModel、Fragment类提取通用属性消除冗余，初始化视图数据绑定，提供碎片容器活动，避免创建一个活动就要取注册一次
集成AdvancedRecyclerView支持各种回收视图高级适配器操作(可滑动列表，可拖拽列表)，总体架构借用了后端B/S三层(高内聚，低耦合)思想 mapper、service、ui 
(mapper对应接口，service对应业务，ui对应控制层)。


## 💻 最低配置
- 操作系统：Windows、MacOS、Linux
- 处理器：双核超线程
- 内存：8 GB RAM
- 网络：宽带互联网连接
- 开发软件: Android Studio Chipmunk 2021.2.1 +
- 模拟器: Android Emulator 2021.2.1 +
- Gradle环境: Gradle 7.2
- Java环境: JDK11
- Lombok环境:Lombok-Plugin 2019.1 +
- AndroidSDK环境: AndroidSDK 31 +

## 💻 推荐配置
- 操作系统：Windows、MacOS、Linux
- 处理器：双核超线程
- 内存：16 GB RAM
- 网络：宽带互联网连接
- 开发软件: Android Studio Chipmunk 2021.2.1 +
- 模拟器: Android Emulator 2021.2.1 +
- Gradle环境: Gradle 7.2
- Java环境: JDK11
- Lombok环境:Lombok-Plugin 2019.1 +
- AndroidSDK环境: AndroidSDK 31 +

## ✨ 新功能(不包括后续添加)
- 1.首页支持一些常用的手机权限调取操作
- 2.OA审批工作台界面ui处理完毕
- 3.列表支持分页，上拉刷新，下拉加载第二页
- 4.支持登录，登录退出功能并且支持QQ登录与微信登录
- 5.支持列表为空显示数据为空图标
- 6.高德地图，支持后台刷新定位
- 7.粘性RxBus全局通信
- 8.信使全局通信
- 9.媒体锁后台保活
- 10.地图路线规划
- 11.文件上传
- 12.文件下载
- 13.消息通知
- 14.可拖拽列表
- 15.可滑动列表
- 16.自定义启动引导页面
- 17.QQ与微信文件分享
- 18.自定义消息通知
- 19.自定义通知栏样式
- 20.地图导航
- 21.微信风格图片选择器
- 22.地图智能路线规划
- 23.目前最低适配安卓10

## 🔨 项目目录
```
├─ dolphin-android -- Android海豚APP
│  ├─ app -- app目录
│  │  ├─ src -- 源代码
│  │  │  ├─ androidTest -- 安卓插桩测试单元测试
│  │  │  ├─ main -- 源代码入口
│  │  │  │  ├─ java -- Java源代码根目录
│  │  │  │  │  ├─ com.dolphin.demo -- 包名
│  │  │  │  │  │  ├─ app -- 初始化应用程序
│  │  │  │  │  │  ├─ constant -- 全局常量
│  │  │  │  │  │  ├─ di -- dagger2依赖注入
│  │  │  │  │  │  │  ├─ component -- 组件媒介
│  │  │  │  │  │  │  ├─ module -- 注入模块提供
│  │  │  │  │  │  │  ├─ scope -- 局部单例生命周期注解
│  │  │  │  │  │  ├─ engine -- 图片选择器第三方组件引擎
│  │  │  │  │  │  ├─ entity -- 数据实体类
│  │  │  │  │  │  ├─ listener -- 监听器
│  │  │  │  │  │  ├─ mapper -- api请求数据映射层
│  │  │  │  │  │  ├─ service -- 业务逻辑处理层
│  │  │  │  │  │  ├─ ui -- 活动界面控制层
│  │  │  │  │  │  │  ├─ activity -- 活动窗口
│  │  │  │  │  │  │  ├─ adapter -- 回收视图适配器
│  │  │  │  │  │  │  ├─ fragment -- 活动碎片局部窗口
│  │  │  │  │  │  │  ├─ vm -- 视图模型
│  │  │  │  │  │  ├─ util -- 全局工具类
│  │  │  │  ├─ res -- 资源文件
│  │  │  │  │  ├─ drawable -- 默认图片目录(像素密度目录中找不到就使用默认的)
│  │  │  │  │  ├─ drawable-nodpi -- 像素密度无关的图片目录
│  │  │  │  │  ├─ drawable-xxhdpi -- 1080*1920 分辨率下的图片目录
│  │  │  │  │  ├─ drawable-xxxhdpi -- 1440*2560 分辨率下的图片目录
│  │  │  │  │  ├─ layout -- 界面布局文件
│  │  │  │  │  ├─ values -- 参数配置
│  │  │  │  │  ├─ xml -- 配置文件
│  │  │  ├─ unitTest -- 本地单元测试
│  ├─ gradle -- gradle下载配置
│  ├─ library -- 基础依赖库
│  │  ├─ core -- 核心库
│  │  │  ├─ libs -- 本地离线依赖
│  │  │  ├─ src -- 源代码
│  │  │  │  ├─ main -- 源代码入口
│  │  │  │  │  ├─ assets -- 外部文件的资源目录，不会被编译
│  │  │  │  │  ├─ java -- Java源代码根目录
│  │  │  │  │  │  ├─ com.dolphin.core -- 包名
│  │  │  │  │  │  │  ├─ amap -- 高德地图相关
│  │  │  │  │  │  │  ├─ base -- 基础核心类
│  │  │  │  │  │  │  ├─ binding -- 扩展组件的属性绑定
│  │  │  │  │  │  │  │  ├─ command -- 绑定视图命令回调
│  │  │  │  │  │  │  │  ├─ viewadapter -- 绑定视图适配器
│  │  │  │  │  │  │  ├─ bus -- 全局组件事件订阅发布通信
│  │  │  │  │  │  │  ├─ constant -- 全局常量
│  │  │  │  │  │  │  ├─ crash -- 自定义应用程序崩溃
│  │  │  │  │  │  │  ├─ entity -- 数据实体类
│  │  │  │  │  │  │  ├─ enums -- 枚举定义
│  │  │  │  │  │  │  ├─ http -- http请求
│  │  │  │  │  │  │  │  ├─ api -- 响应信息
│  │  │  │  │  │  │  │  ├─ exception -- 请求错误处理
│  │  │  │  │  │  │  │  ├─ file -- 文件流相关处理
│  │  │  │  │  │  │  │  ├─ interceptor -- 请求拦截器
│  │  │  │  │  │  │  │  ├─ observer -- 基础文件响应可观测监听
│  │  │  │  │  │  │  ├─ listener -- 监听器
│  │  │  │  │  │  │  ├─ service -- 安卓后台服务
│  │  │  │  │  │  │  ├─ util -- 全局工具类
│  │  │  │  │  │  │  ├─ widget -- 安卓组件扩展
│  │  │  │  │  ├─ res -- 资源文件
│  │  │  │  │  │  ├─ drawable-hdpi -- 480*800/480*854 分辨率下的图片目录
│  │  │  │  │  │  ├─ drawable-mdpi -- 320*480 分辨率下的图片目录
│  │  │  │  │  │  ├─ drawable-xhdpi -- 720*1280 分辨率下的图片目录
│  │  │  │  │  │  ├─ drawable-xxhdpi -- 1080*1920 分辨率下的图片目录
│  │  │  │  │  │  ├─ drawable-xxxhdpi -- 1440*2560 分辨率下的图片目录
│  │  │  │  │  │  ├─ layout -- 界面布局文件
│  │  │  │  │  │  ├─ raw -- 原始文件目录
│  │  │  │  │  │  ├─ values -- 参数配置
│  │  │  │  │  ├─ res-sw -- 最小宽度屏幕适配资源
│  │  ├─ umeng -- 友盟库
│  │  │  ├─ libs -- 本地离线依赖
│  │  │  ├─ src -- 源代码
│  │  │  │  ├─ main -- 源代码入口
│  │  │  │  │  ├─ java -- Java源代码根目录
│  │  │  │  │  │  ├─ com.dolphin.umeng -- 包名
│  │  │  │  │  │  │  ├─ entity -- 数据实体类
│  │  │  │  │  │  │  ├─ enums -- 枚举定义
│  │  │  │  │  │  │  ├─ listener -- 监听器
│  │  │  │  │  ├─ res -- 资源文件
│  │  │  │  │  │  ├─ layout -- 界面布局文件
│  │  │  │  │  │  ├─ xml -- 配置文件
```
