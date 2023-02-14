---
title: 部署上线
lang: zh-CN
---

## 1.证书(.P12)和描述文件(.mobileprovision) 申请

[申请指南](https://juejin.cn/post/7085908504619253791#heading-5)

**p12文件:** 表示这个账号/电脑有真机运行的权限

**描述文件:** 表示这个bundleId的应用可以具有的能力(Capabilities)

设备 Identifier 查看

![](/images/ios/deployOnline/9.png)
![](/images/ios/deployOnline/8.png)

## 2.导入p12和描述文件

![](/images/ios/deployOnline/1.png)

双击p12，输入之前申请时候设置的密码

![](/images/ios/deployOnline/2.png)

打开钥匙串查看证书是否导入成功

![](/images/ios/deployOnline/3.png)

## 3.在xcode中配置证书

选择自己在钥匙串中导入的p12证书
![](/images/ios/deployOnline/4.png)

配置 Signing ＆ Capabilities

Bundle Identifier 选择在申请时候设置的 捆绑标识符 一定要一致

![](/images/ios/deployOnline/5.png)

Provisioning Profile 导入申请的描述文件

![](/images/ios/deployOnline/6.png)

![](/images/ios/deployOnline/7.png)

## 4.打包

### 1.直接使用

连接上手机后选择自己的设备

![](/images/ios/deployOnline/10.png)

点击运行等待打包完毕会自动在真机上安装app

需要在手机上打开开发者模式
![](/images/ios/deployOnline/11.png)

### 2.分发打包

连接设备后选择设备，否则Archive会显示灰色的
![](/images/ios/deployOnline/12.png)

点击Archive进行打包
![](/images/ios/deployOnline/13.png)
![](/images/ios/deployOnline/14.png)
![](/images/ios/deployOnline/15.png)

**App Store Connect:** 将包发布苹果应用商店或者苹果TestFlight测试平台

**Ad Hoc:** 发布环境证书，可用于生产环境下运行app，与开发环境证书不同这是不能直接操作开发环境下的一些手机权限的，这个不需要打开开发者模式就能直接运行app

**Enterprise:** 发布环境企业证书，分发给企业内部人员也可以是用户使用，需要申请企业账户，这个跟普通的个人开发者账户的区别是不限制设备个数，但是要用户在iOS设备上手动点击信任证书才能运行app

**Development:** 开发环境证书，可用于开发环境下运行app，这个需要打开开发者模式才能运行app


打包 Development 包
![](/images/ios/deployOnline/16.png)

选择好 App Thinning 对应自己的设备，打包时候只会打出选择的这个设备的芯片指令集架构文件，符合cpu架构就行了
![](/images/ios/deployOnline/17.png)

选择申请的p12证书跟描述文件
![](/images/ios/deployOnline/18.png)

等待打包完毕
![](/images/ios/deployOnline/19.png)

导出ipa
![](/images/ios/deployOnline/20.png)
![](/images/ios/deployOnline/21.png)
