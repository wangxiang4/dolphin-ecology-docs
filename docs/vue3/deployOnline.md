---
title: 部署上线
lang: zh-CN
---

## 1.采用docker进行容器化部署

### 1.在linux上安装docker，可以自行搜索，或者去ChatGpt提问

**推荐使用**: [ChatGpt在线提问](https://chat.openai.com/chat)

![](/images/vue3/deployOnline/1.png)

### 2.idea连接docker，其他工具连接docker，去问ChatGpt

![](/images/vue3/deployOnline/2.png)

填写自己的docker地址跟ssl证书路径

![](/images/vue3/deployOnline/3.png)

### 3.进入docker目录配置自己的后端地址

![](/images/vue3/deployOnline/4.png)

### 4.macos安装docker-compose，其他系统安装docker-compose，去问ChatGpt

```shell
 brew install docker-compose
```

### 5.idea配置docker-compose

![](/images/vue3/deployOnline/5.png)

### 6.在 docker-compose.yaml 启动部署

![](/images/vue3/deployOnline/6.png)

### 7.启动成功进行在线访问

![](/images/vue3/deployOnline/7.png)
![](/images/vue3/deployOnline/8.png)

## 2.采用 vercel 自动化 cicd 部署

### 1.进入vercel官网进行创建项目，可以直接使用github账户登录

[vercel官网地址,如果进不去记得开翻墙](https://vercel.com)

![](/images/vue3/deployOnline/9.png)
![](/images/vue3/deployOnline/10.png)

可以直接选择github中的仓库导入，也可以选择第三方代码托管仓库进行导入
![](/images/vue3/deployOnline/11.png)

### 2.项目配置

配置打包命令与生成目录
![](/images/vue3/deployOnline/12.png)

进入 vercel 仪表盘页面，会看到自己创建的项目
![](/images/vue3/deployOnline/13.png)

点击进去然后点击设置选项
![](/images/vue3/deployOnline/14.png)

添加域名
![](/images/vue3/deployOnline/16.png)

输入自己的域名地址点击添加 vercel 会自动生成 dns代理配置信息 <br/>
记住这个后面需要在 namecheap 域名dns映射里配置
![](/images/vue3/deployOnline/25.png)

配置域名，推荐去 [namecheap](https://www.namecheap.com) 购买很便宜，几十块钱就行
![](/images/vue3/deployOnline/15.png)

点击 MANAGE 进入 Advanced DNS 选项卡 配置 dns 解析
![](/images/vue3/deployOnline/18.png)

配置好了点击在 vercel 项目中 Domains 点击刷新出现全部蓝色的勾 域名配置成功
![](/images/vue3/deployOnline/19.png)


### 3.配置 Functions 函数，代理后台地址

在项目中创建 vercel.json 配置 functions 与 rewrites
![](/images/vue3/deployOnline/20.png)

利用 createProxyMiddleware 创建请求转发
![](/images/vue3/deployOnline/21.png)

现在点击git提交会自动部署项目 vercel 实现 github 提交钩子的监听，项目在 vercel 上创建就会跟 github 绑定上，实现 cicd 自动部署功能
默认情况下，Vercel将为您的域颁发并自动续订SSL证书，所以也无需考虑https证书问题

### 4.查看 Functions 函数，是否配置成功

点击当前部署版本
![](/images/vue3/deployOnline/22.png)

查看 Functions 显示了项目下的 api文件 就配置成功了
![](/images/vue3/deployOnline/23.png)

### 5.在线访问项目

选择就可以使用配置好的域名 [https://vuejs.godolphinx.org](https://vuejs.godolphinx.org/) 访问项目了
![](/images/vue3/deployOnline/24.png)

