---
title: 启动
lang: zh-CN
---

注意：windows跟macos有一些安装步骤可能存在一些差异，windows用户可自行搜索进行安装或者去官网进行安装

## 1.克隆项目
![](/images/microservice/quickStart1.png)

## 2.安装依赖

### 1.配置本地hosts(微服务名称IP映射)
可以下载[SwitchHosts](https://switchhosts.vercel.app/zh)配置，也可以自己打开host文件路径写入，推荐使用SwitchHosts原因方便后期维护
```shell
macos: /etc/hosts
windows: C:\Windows\System32\drivers\etc
```
![](/images/microservice/quickStart2.png)
```shell
127.0.0.1  dolphin-register
127.0.0.1  dolphin-gateway
127.0.0.1  dolphin-auth
127.0.0.1  dolphin-system
127.0.0.1  dolphin-common
127.0.0.1  dolphin-monitor
127.0.0.1  dolphin-visual-rocketmq
127.0.0.1  dolphin-visual-sentinel
127.0.0.1  dolphin-visual-job
127.0.0.1  dolphin-visual-spring
```

### 2.安装JDK1.8环境
这个大家可以去oracle官网注册一个账户进行安装，我一般是安装三个主流版本用于研究JDK源码之间的区别，跟跑一些使用了jdk11的项目，喜欢研究jdk源码的也可以安装主流版本
![](/images/microservice/quickStart3.png)
---
[JDK7下载地址](https://www.oracle.com/java/technologies/javase/javase7-archive-downloads.html)
---
[JDK8下载地址](https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html)
---
[JDK11下载地址](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html)
---

### 3.安装maven环境
这个大家可以去[maven官网进行下载](https://maven.apache.org/download.cgi)，一般版本 Maven 3.3 + 就行最新的也没问题，用idea默认的捆绑maven环境也行都可以

maven配置，打开maven下的settings.xml文件写入
```xml
<!--配置本地仓库地址，里面的路径填写自己想放置的路径-->
<localRepository>/usr/local/apache-maven-3.6.3/repository</localRepository>

<!--配置镜像远程下载仓库-->
<mirrors>
    <!-- 阿里云Maven -->
    <mirror>
      <id>alimaven</id>
      <name>aliyun maven</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
      <mirrorOf>central</mirrorOf>
    </mirror>
    
    <!-- 中央仓库1可以支持http -->
    <mirror>
      <id>repo2</id>
      <mirrorOf>central</mirrorOf>
      <name>Human Readable Name for this Mirror.</name>
      <url>http://insecure.repo1.maven.org/maven2</url>
    </mirror>
    
    <!-- 中央仓库1只支持https -->
    <mirror>
      <id>repo1</id>
      <mirrorOf>central</mirrorOf>
      <name>Human Readable Name for this Mirror.</name>
      <url>https://repo1.maven.org/maven2/</url>
    </mirror>
</mirrors>

<!--配置jdk1.8编译环境-->
<profiles>
    <profile>
      <id>JDK-1.8</id>
      <activation>
        <activeByDefault>true</activeByDefault>
        <jdk>1.8</jdk>
      </activation>
      <properties>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
        <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
      </properties>
    </profile>
</profiles>
```

### 4.安装Mysql数据库环境
这里数据库安装 mysql 5.7.32 + 就行，可以去[官网进行安装](https://downloads.mysql.com/archives/community/) 或者
使用macos的[包用管理工具brew](https://brew.sh/)进行安装

注意:安装brew包管理工具前记得注意使用clashX Pro翻墙，要不然请求会超时下载失败

```shell
brew install mysql@5.7
```

my.cnf
```shell
[client]
# 设置mysql客户端默认字符集
default-character-set=utf8
 
[mysqld]
# 设置3306端口
port = 3306
# 允许最大连接数
max_connections=2000
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
max_allowed_packet = 32M
lower_case_table_names = 1

[mysqldump]
max_allowed_packet = 16M
```

### 5.安装Redis
这里数据库安装 redis 6.2.6 + 就行，可以去[官网进行安装](https://redis.io/download/) 或者
使用macos的[包用管理工具brew](https://brew.sh/)进行安装

注意:安装brew包管理工具前记得注意使用clashX Pro翻墙，要不然请求会超时下载失败

```shell
brew install redis
```

## 3.打开idea开发工具配置好maven
![](/images/microservice/quickStart4.png)

## 4.等待项目依赖安装完毕
![](/images/microservice/quickStart5.png)

## 5.导入数据库文件,库名称跟文件名保持一致就行
![](/images/microservice/quickStart6.png)
![](/images/microservice/quickStart7.png)

## 6.配置nacos数据源
![](/images/microservice/quickStart8.png)

## 7.启动nacos
![](/images/microservice/quickStart9.png)

## 8.去nacos dev开发环境配置微服务数据源

### 1.application.yml
![](/images/microservice/quickStart10.png)

### 2.dolphin-system-biz.yml
![](/images/microservice/quickStart11.png)

### 3.dolphin-xxl-job-admin.yml
![](/images/microservice/quickStart12.png)

### 4.dolphin-auth.yml
![](/images/microservice/quickStart13.png)

### 5.dolphin-monitor-biz
![](/images/microservice/quickStart14.png)

### 6.dolphin-common-biz
![](/images/microservice/quickStart15.png)

## 9.依次按顺序启动一些开发服务,监控服务开发时可不启动
```shell

```
