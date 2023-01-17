---
title: 简介
lang: zh-CN
---

## 简介
一个基于Spring Boot 3、 Spring Cloud 2021 & Alibaba、 SAS OAuth2、Docker、RocketMQ、XXLJob等前沿技术搭建的微服务SASS多租户RBAC权限后端管理系统，
最简单的微服务架构，内部模块清晰，严格遵守开发规范，简单明了，包含一些系统基础模块，简单的模块使用自研的海豚表单生成器或者自研的代码生成器一键动态生成(内置多种表类型生成模式)
可以进行父子表生成，树表生成，极高的可定制化表类型生成，使用了UReport2报表设计器或者报表生成器配置Sql实现在线财务报表处理，内置大屏设计器开箱即用，重构Avue大屏设计器处理数据大屏可视化
内置仪表盘跟图表生成器让用户更加容易分析数据理解数据观点，推荐使用仪表盘，图表生成器只能进行简单的图表数据可视化处理，内部集成了Flowable工作流引擎跟自研的bpmn.io工作流设计器
实现工作流实现OA办公，还支持工作流动态表单配置，这里是使用了自研的海豚表单生成器实现处理，支持一些高级工作流功能列如多实例会签、定时器触发、子流程、泳道、邮箱任务、并行网关、包容网关、事件网关等等
集成了kkFileView预览平台实现在线在线预览Office文件，也基于MybatisPlus官方的dynamic-datasource-spring-boot-starter实现了支持多数据源，支持xxl-job分布式定时器，Seata分布式事物，分布式RocketMQ消息中间件
,SASS多租户等等一系列高级功能，全部免费开源，感觉还不错的话，一键三连([求关注](https://github.com/wangxiang4)、[求点赞](https://github.com/wangxiang4/dolphin)、[求攻击](https://discord.com/invite/DREuQWrRYQ)) 。

## 最低配置
- 操作系统：Windows、MacOS、Linux
- 处理器：双核超线程
- 内存：16 GB RAM
- 网络：宽带互联网连接
- 开发软件: IntelliJ IDEA 2021.1.3 +
- Java环境: JDK1.8
- Maven环境: Maven 3.3 +
- Docker环境: docker-compose 2.0.0 +
- Seata分布式事物环境: seata-server 1.4.2 +
- RocketMQ中间件环境: rocketmq-server 4.9.0 +
- mysql数据库环境: mysql 5.7.32 +
- redis数据库环境: redis 6.2.6 +

## 推荐配置
- 操作系统：Windows、MacOS、Linux
- 处理器：双核超线程
- 内存：24 GB RAM
- 网络：宽带互联网连接
- 开发软件: IntelliJ IDEA 2022.1.4 +
- Java环境: JDK1.8
- Maven环境: Maven 3.6.3
- Docker环境: docker-compose 2.10.2
- Seata分布式事物环境: seata-server 1.4.2 +
- RocketMQ中间件环境: rocketmq-server 4.9.0 +
- mysql数据库环境: mysql 5.7.32 +
- redis数据库环境: redis 6.2.6 +

## 海豚微服务生态平台端口目录(包含工具,总计30个端口不包括后续添加)
8051:prtainer-ce -> docker可视化面板
8052:mysql -> 关系数据库
6379:redis -> 非关系型数据库
8066:gitea-https -> 代码私有仓库https
8065:gitea-ssh -> 代码私有仓库ssh
9300:jira -> 项目生命周期管理
9876:rocketmq:namesrv -> 代理发现注册服务,跟nacos类似
10909:rocketmq:broker -> 远程发送消息接口
10911:rocketmq:broker -> 远程快速发送消息接口
8091:seata-server -> 分布式事务TC服务
9301:upsource-server -> idea代码审查服务
8848:dolphin-register -> nacos服务连接
9848:dolphin-register -> 客户端向服务端发起连接和请求
9849:dolphin-register -> 用于服务间同步等
9999:dolphin-gateway -> spring网关服务
3000:dolphin-auth -> 安全认证服务
4000:dolphin-system -> 系统模块服务
8000:dolphin-common -> 通用业务模块服务
6000:dolphin-monitor -> 运维监控模块服务
8058:dolphin-visual-rocketmq -> rocketmq可视化监控平台
8056:sentinel-visual-dashboard -> 哨兵流量控制可视化平台
8057:dolphin-visual-job -> xxl-job可视化监控平台
8061:dolphin-visual-monitor -> SpringBoot可视化监控平台
80:dolphin-admin -> vue3前端生态平台
8062:docker -> docker服务
40003:demo-dolphin-message-consumer -> rocketmq消息中间件演示-mq消息消费者
40002:demo-dolphin-message-producer -> rocketmq消息中间件演示-mq消息提供者
60001:demo-dolphin-seata-order -> 分布式解决方案演示-订单服务
60002:demo-dolphin-seata-point -> 分布式解决方案演示-积分服务
60003:demo-dolphin-seata-user -> 分布式解决方案演示-用户服务
