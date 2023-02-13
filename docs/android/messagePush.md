---
title: 友盟消息推送
lang: zh-CN
---

使用友盟前需要关闭翻墙软件，友盟做了国外 ip 限制

## 1. 注册一个友盟账户进入友盟u-push平台,创建一个应用
注意: 包名对应 AndroidManifest.xml 下的 package 属性

![](/images/android/messagePush/1.png)

## 2. APP填写密钥信息
对应友盟应用配置下的AppKey、Umeng Message Secret、App Master Secret

![](/images/android/messagePush/2.png)

## 3. 启动项目并且查看是否成功打印出 device token 信息
打开友盟调试

![](/images/android/messagePush/3.png)

必须要确保打印出了 device token 才能确定你的设备在友盟平台上线了，要不然消息会推送失败

![](/images/android/messagePush/4.png)

通过 device token 在友盟平台检查设备是否在线

![](/images/android/messagePush/5.png)

也可以通过 **别名** 在友盟平台检查设备是否在线

![](/images/android/messagePush/6.png)

![](/images/android/messagePush/7.png)


## 4. 开始推送消息 
推送前可选打开在屏幕上横幅弹出权限
![](/images/android/messagePush/12.png)

### 1.普通消息推送

标签渠道推送

![](/images/android/messagePush/8.png)

可选通知属性

![](/images/android/messagePush/9.png)

发送

![](/images/android/messagePush/10.png)

---
别名推送
![](/images/android/messagePush/13.png)

![](/images/android/messagePush/14.png)

---
device token推送
![](/images/android/messagePush/15.png)

![](/images/android/messagePush/16.png)

---
消息自定义点击动作
![](/images/android/messagePush/17.png)

![](/images/android/messagePush/18.png)

点击消息自动进入工作台碎片
![](/images/android/messagePush/19.png)

---
通知栏定制样式
![](/images/android/messagePush/20.png)

![](/images/android/messagePush/21.png)

![](/images/android/messagePush/22.png)

### 2.自定义消息

![](/images/android/messagePush/23.png)
![](/images/android/messagePush/24.png)

### 3.应用内消息

全屏消息

![](/images/android/messagePush/25.png)
![](/images/android/messagePush/26.png)

[插屏消息](https://developer.umeng.com/docs/67966/detail/98583#h2-u63D2u5C4Fu6D88u606F13)
