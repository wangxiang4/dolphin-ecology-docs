---
title: Jenkins部署上线
lang: zh-CN
---

## 1.安装jenkins

![](/images/microservice/jenkinsDeployOnline/1.png)

等待jenkins启动完毕
![](/images/microservice/jenkinsDeployOnline/2.png)

**初始化进去安装插件直接选择默认就行**

如果出现卡死，或者下载插件失败请切换源，如果使用的是github还需要设置一下代理
![](/images/microservice/jenkinsDeployOnline/3.png)

## 2.配置jenkins

### 1.下载插件，选择好后点击左下方的 Install without restart
![](/images/microservice/jenkinsDeployOnline/4.png)
![](/images/microservice/jenkinsDeployOnline/5.png)

- 依次下载
  - Maven Integration plugin 后端所需
  - NodeJS Plugin 前端所需

### 2.配置全局工具
![](/images/microservice/jenkinsDeployOnline/6.png)

配置jdk8与jdk11，**jdk8当前项目所需，jdk11当前jenkins构建项目所需**
![](/images/microservice/jenkinsDeployOnline/7.png)

这里注意如果oracle账户密码输入错误需要重新输入，进入当前jenkins容器删除hudson.tools.JDKInstaller.xml
![](/images/microservice/jenkinsDeployOnline/9.png)

配置jdk11，容器内默认路径 **/opt/java/openjdk/bin/java**
![](/images/microservice/jenkinsDeployOnline/8.png)

配置maven
![](/images/microservice/jenkinsDeployOnline/10.png)

MAVEN_HOME为镜像中COPY过去的路径
![](/images/microservice/jenkinsDeployOnline/11.png)

配置NodeJS
![](/images/microservice/jenkinsDeployOnline/12.png)

### 3.配置全局安全

![](/images/microservice/jenkinsDeployOnline/13.png)

配置Git主机密钥验证配置为 Accept first connection
![](/images/microservice/jenkinsDeployOnline/14.png)

## 3.创建微服务项目
![](/images/microservice/jenkinsDeployOnline/15.png)

选择构建一个maven项目
![](/images/microservice/jenkinsDeployOnline/16.png)

### 1.Description
![](/images/microservice/jenkinsDeployOnline/17.png)

### 2.Discard old builds
![](/images/microservice/jenkinsDeployOnline/18.png)

### 3.GitHub Project
![](/images/microservice/jenkinsDeployOnline/19.png)

### 4.Repository URL
![](/images/microservice/jenkinsDeployOnline/20.png)

### 5.Credentials
![](/images/microservice/jenkinsDeployOnline/21.png)

选择 SSH Username with private key，Description与Username随便写个标识就行
![](/images/microservice/jenkinsDeployOnline/22.png)

Private Key 自己生成一个公私密钥然后跟自己代码托管仓库进行绑定就行
![](/images/microservice/jenkinsDeployOnline/23.png)
![](/images/microservice/jenkinsDeployOnline/24.png)
![](/images/microservice/jenkinsDeployOnline/25.png)
![](/images/microservice/jenkinsDeployOnline/26.png)

### 6.Branches to build
![](/images/microservice/jenkinsDeployOnline/27.png)

### 7.Build Triggers
![](/images/microservice/jenkinsDeployOnline/28.png)

### 8.Build Environment
![](/images/microservice/jenkinsDeployOnline/29.png)

### 9.Build
![](/images/microservice/jenkinsDeployOnline/30.png)

### 10.Post Steps

选择 Run only if build succeeds 并且使用 Execute shell
![](/images/microservice/jenkinsDeployOnline/31.png)

Execute shell 设置脚本，可以根据自身需求定制
![](/images/microservice/jenkinsDeployOnline/32.png)

我这里为指定以下容器部署
- dolphin-gateway
- dolphin-auth
- dolphin-system
- dolphin-common
- dolphin-monitor

```shell

#!/bin/bash
cd docker-cloud

# 删除指定的容器
docker rm -f dolphin-gateway
docker rm -f dolphin-auth    
docker rm -f dolphin-system
docker rm -f dolphin-common
docker rm -f dolphin-monitor

# 删除指定的镜像
docker rmi -f dolphin-gateway
docker rmi -f dolphin-auth
docker rmi -f dolphin-system-biz
docker rmi -f dolphin-common-biz
docker rmi -f dolphin-monitor-biz

# 部署指定的容器
docker-compose up -d dolphin-gateway
docker-compose up -d dolphin-auth
docker-compose up -d dolphin-system
docker-compose up -d dolphin-common
docker-compose up -d dolphin-monitor

```

### 11.Build settings
![](/images/microservice/jenkinsDeployOnline/33.png)

## 4.构建微服务项目
![](/images/microservice/jenkinsDeployOnline/34.png)
![](/images/microservice/jenkinsDeployOnline/35.png)
等待构建成功
![](/images/microservice/jenkinsDeployOnline/36.png)

## 5.构建微服务项目扩展补充

### 1.kubernetes
如果需要部署多台机器的话，建议使用kubernetes管理docker服务节点直接部署到kubernetes平台在让kubernetes进行分布式部署容器，
可以去jenkins插件库下载一些跟kubernetes有关的一些插件简化自动部署流程

### 2.Docker
如果需要远程连接单台机器部署的话，可以在Execute shell里面利用docker命令远程连接一个docker服务然后进行部署，也可以
去jenkins插件库下载一些跟Docker有关的一些插件简化远程连接docker部署的流程

## 6.创建VUE3项目

选择Freestyle project
![](/images/microservice/jenkinsDeployOnline/37.png)

### 1.Description
![](/images/microservice/jenkinsDeployOnline/38.png)

### 2.Discard old builds
![](/images/microservice/jenkinsDeployOnline/39.png)

### 3.GitHub Project
![](/images/microservice/jenkinsDeployOnline/40.png)

### 4.Repository URL
![](/images/microservice/jenkinsDeployOnline/41.png)

### 5.Branches to build
![](/images/microservice/jenkinsDeployOnline/42.png)

### 6.Build Triggers
![](/images/microservice/jenkinsDeployOnline/43.png)

### 7.Build Environment
![](/images/microservice/jenkinsDeployOnline/44.png)

### 8.Post Steps
![](/images/microservice/jenkinsDeployOnline/45.png)
![](/images/microservice/jenkinsDeployOnline/46.png)

```shell
#!/bin/bash
yarn install
yarn build
cd docker

# 删除指定的容器
docker rm -f dolphin-admin

# 删除指定的镜像
docker rmi -f dolphin-admin

# 部署指定的容器
docker-compose up -d dolphin-admin
```
## 7.构建VUE3项目
![](/images/microservice/jenkinsDeployOnline/47.png)
![](/images/microservice/jenkinsDeployOnline/48.png)
等待构建成功
![](/images/microservice/jenkinsDeployOnline/49.png)
