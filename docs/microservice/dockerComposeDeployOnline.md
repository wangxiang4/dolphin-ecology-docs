---
title: DockerCompose部署上线
lang: zh-CN
---

## 1.在linux上安装docker，可以自行搜索，或者去ChatGpt提问

**推荐使用**: [ChatGpt在线提问](https://chat.openai.com/chat)
![](/images/vue3/deployOnline/1.png)

## 2.idea连接docker，其他工具连接docker，去问ChatGpt
![](/images/vue3/deployOnline/2.png)

填写自己的docker地址跟ssl证书路径
![](/images/vue3/deployOnline/3.png)

## 3.macos安装docker-compose，其他系统安装docker-compose，去问ChatGpt

```shell
 brew install docker-compose
```

## 4.idea配置docker-compose
![](/images/vue3/deployOnline/5.png)

## 5.使用 docker-compose.yaml 部署项目

配置自己的nacos数据库地址
![](/images/microservice/dockerComposeDeployOnline/1.png)

maven打包
```shell
mvn clean package -Pdev
```
**-p: 选择当前打包环境**
![](/images/microservice/dockerComposeDeployOnline/2.png)

部署项目，想要部署那个容器就点击左侧启动
![](/images/microservice/dockerComposeDeployOnline/3.png)
