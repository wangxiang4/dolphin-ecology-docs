---
title: 简介
lang: zh-CN
---

# 📄 简介
一个基于CocoaPods、 RxSwift、Moya、Swinject、RxTheme、Kingfisher、FLEX等前沿技术搭建的MVVM架构IOS客户端，
一套代码多个平台运行，采用了Mac Catalyst技术已适配MacOS、Ios、IpadOS (可在Iphone、Ipad、M系列芯片的MacBook下运行)，
支持国际化默认内置英文跟中文两种语言，支持主题切换，强大的主题定制在每一个细节,内置Light和Dark两种的外观主题,以及自定义的颜色主题(默认内置十多种颜色)
集成Swinject实现了IOC依赖控制反转,帮助您的应用程序拆分为松散耦合的组件,可以更轻松地开发、测试和维护这些组件，内置大量动画过渡，可使用swiftUI组件库内置UIView动画类库、
也可以使用丰富的动画过渡Hero库，支持高级动画过渡处理，采用了KafkaRefresh布局刷新，实现了表格数据分页，解决大量数据场景不会卡顿，
加人了SnapKit视图自动布局处理，让纯手写场景视图控制编写布局约束更加简单，一行代码搞定，整体采用 Swift5 编写，
内部大量使用了RXSwift与Rx扩展来构建功能，抽离了视图、模型层内部采用RX进行数据绑定，明确层级职责，让代码维护变得更简单，
也包含一些高级功能OA办公审批工作台，SASS多租户等等，以及后面加入的新的高级功能，全部免费开源，
感觉还不错的话，一键三连([求关注](https://github.com/wangxiang4)、[求点赞](https://github.com/wangxiang4/dolphin-ios)、[求赞助](/sponsors/index)) 。

## 💻 最低配置
- 操作系统：Windows、MacOS、Linux
- 处理器：双核超线程
- 内存：8 GB RAM
- 网络：宽带互联网连接
- 开发软件: Xcode 13.0 +
- 模拟器: Simulator 13.0 +
- Ruby环境: Ruby 2.6.10 +
- RubyGems环境: RubyGems 3.0.3 +
- CocoaPods环境: CocoaPods 1.11.3 +

## 💻 推荐配置
- 操作系统：Windows、MacOS、Linux
- 处理器：双核超线程
- 内存：16 GB RAM
- 网络：宽带互联网连接
- 开发软件: Xcode 14.0 +
- 模拟器: Simulator 14.0 +
- Ruby环境: Ruby 2.6.10 +
- RubyGems环境: RubyGems 3.0.3 +
- CocoaPods环境: CocoaPods 1.11.3 +

## ✨ 新功能(不包括后续添加)
- 1.登录支持头像3D输入移动，模型动画
- 2.首页支持一些常用的手机权限调取操作
- 3.OA审批工作台界面ui处理完毕
- 4.列表支持分页，上拉刷新，下拉加载第二页
- 5.支持夜间很白天模式，支持手机摇动切换白天黑夜模式
- 6.支持颜色主题，可以切换定制在每一个细节的颜色
- 7.支持国际化切换（中文，英文）
- 8.支持图片缓存，提高读取速度
- 9.支持版本功能更新，显示新特性面板
- 10.支持登录，登录退出功能
- 11.支持幻灯片图片
- 12.支持动画切换场景
- 13.所有组件根据设置的主题颜色进行变动
- 14.支持列表为空显示数据为空图标
- 15.支持加载显示加载进度图层
- 16.支持在线APP调试分析ui界面工具
- 17.支持所有请求异常错误捕捉提示吐司
- 18.支持用户登录信息存放到苹果钥匙串中,拿去苹果钥匙串权限
- 19.支持标签导航栏动画特效
- 20.支持图片缓存在线清除
- 21.目前APP支持可在ipad，ios, macbook M系列芯片下允许
- 22.目前最低适配ios14

## 🔨 项目目录
```
├─ dolphin-ios -- IOS海豚APP
│  ├─ Dolphin -- APP
│  │  ├─Application -- 应用程序初始化代理
│  │  ├─Configs -- 全局配置
│  │  ├─Common -- 通用组件基于SwiftUI进行扩展
│  │  ├─Managers -- 应用控制管理
│  │  ├─Entity -- 数据映射实体
│  │  ├─Modules -- 场景模块
│  │  │  ├─Login  --  登录场景
│  │  │  ├─Home -- 首页场景
│  │  │  ├─Main -- APP启动入口场景
│  │  │  ├─Workbench -- 工作台场景
│  │  │  ├─Messages -- 消息场景
│  │  │  ├─Settings -- 应用设置场景
│  │  │  ├─Settings Language -- 语言切换设置场景
│  │  │  ├─Theme -- 主题颜色切换场景
│  │  ├─DependencyInjection -- IOC依赖注入
│  │  ├─Extensions -- 功能扩展
│  │  │  ├─CATransform3D -- 核心动画3D视图变形扩展
│  │  │  ├─object-c Foundation -- 基础库扩展
│  │  │  ├─RxSwift -- 可观测响应式扩展
│  │  │  ├─UIColor -- UI颜色组件扩展
│  │  │  ├─UIFont -- UI字体组件扩展
│  │  │  ├─UIImage -- UI图片组件扩展
│  │  │  ├─UIView -- UI基础视图扩展
│  │  ├─Utils -- 工具类
│  │  │  ├─CommonUtil -- 通用工具
│  │  │  ├─Networking -- Moya网络请求封装
│  │  │  ├─RxActivityIndicator -- 监听可观测活动对象序列
│  │  ├─Resources -- 资源管理
│  ├─ DolphinTests -- APP单元测试
│  │  ├─Models -- 数据映射实体测试
│  │  ├─Modules -- 场景模块测试
│  ├─ DolphinUITests -- APP单元自动化UI界面交互测试
```
