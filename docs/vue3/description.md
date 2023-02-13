---
title: 简介
lang: zh-CN
---

## 📄 简介
一个基于Vue3、Vite、Ant-Design-Vue、TypeScript、vxe-table、Tinymce、 Pinia、WindiCss等前沿技术搭建的前端管理系统，
内置多种主题与大量封装组件、多租户切换、锁屏、内置两种CRUD编写方式实例(ant-design-vue纯原生组件编写,编写配置对象动态生成)，
基于[vben](https://github.com/vbenjs/vue-vben-admin)管理系统重构,内部模块清晰，严格遵守开发规范，
组件方面的文档尽量看海豚前端管理系统组件部分的文档，内部大部分组件以及基于vben组件重构过，提供代码模版供快速上手开发，做到开箱即用
提供cicd自动化部署方案，解放项目上线手动部署项目流程，让人人都能轻松部署项目，内置高德地图设计器模块实现地图基础功能，支持PWA渐进式网络应用程序
让用户可以接近于原生app的形式进行访问，内部包含一些系统基础模块，以及一些高级模块，表单生成器，工作流设计器，大屏设计器，代码生成器模块，UReport2报表设计器
仪表盘生成器，SASS多租户等等一系列高级功能，全部免费开源，感觉还不错的话，一键三连([求关注](https://github.com/wangxiang4)、[求点赞](https://github.com/wangxiang4/dolphin-admin)、[求赞助](/sponsors/index)) 。

## 💻 最低配置
- 操作系统：Windows、MacOS、Linux
- 处理器：双核超线程
- 内存：4 GB RAM
- 网络：宽带互联网连接
- 开发软件: IntelliJ IDEA 2022.1.4 +, vscode 1.63 +
- node环境: Node 16.13.0 + 
- Yarn环境: Yarn 1.22.19 +
- Docker环境: docker-compose 2.0.0 +
- Nvm环境: Nvm 0.39.1 + (可选)

## 💻 推荐配置
- 操作系统：Windows、MacOS、Linux
- 处理器：双核超线程
- 内存：8 GB RAM
- 网络：宽带互联网连接
- 开发软件: IntelliJ IDEA 2022.1.4 +, vscode 1.63 +
- Node环境: Node 16.13.0 +
- Yarn环境: Yarn 1.22.19 +
- Docker环境: docker-compose 2.0.0 +
- Nvm环境: Nvm 0.39.1 + (可选)

## 🔨 项目目录
```
├─ dolphin-admin -- 海豚vue3-管理系统
│  ├─build -- 构建打包配置
│  │  ├─config -- 通用配置
│  │  ├─generate -- 资源生成配置(less变量,icon)
│  │  ├─script -- 附加构建脚本
│  │  ├─vite -- vite配置
│  ├─docker -- docker容器配置
│  ├─public -- 公共资源目录
│  ├─src -- 开发的目录
│  │  ├─api -- 请求接口
│  │  │  ├─common -- 通用请求数据类型(根据后端通用实体类定义)
│  │  │  │  ├─base -- 基础类型
│  │  │  │  ├─data -- 数据类型
│  │  │  ├─platform -- 微服务框架平台业务api
│  │  │  │  ├─common -- 通用业务模块api
│  │  │  │  ├─core -- 系统核心业务api
│  │  │  │  ├─monitor -- 运维监控业务模块api
│  │  │  │  ├─system -- 系统业务模块api
│  │  ├─assets -- 开发资源目录(会被打包编译)
│  │  ├─components -- 全局组件
│  │  │  ├─AMap -- 高德地图设计器
│  │  │  ├─Application -- 应用核心组件
│  │  │  ├─Authority -- 角色权限控制
│  │  │  ├─Basic -- 系统基础组件
│  │  │  ├─Button -- 按钮
│  │  │  ├─ClickOutSide -- 元素点击监听包装
│  │  │  ├─Container -- 组件包装容器
│  │  │  ├─ContextMenu -- 右击菜单上下文
│  │  │  ├─CountDown -- 验证码倒计时
│  │  │  ├─CountTo -- 计数器
│  │  │  ├─Cropper -- 图片裁剪
│  │  │  ├─Description -- 详细页面
│  │  │  ├─Drawer -- 弹出抽屉
│  │  │  ├─Dropdown -- 下拉列表
│  │  │  ├─Excel -- Excel导入导出
│  │  │  ├─Form -- 动态表单
│  │  │  ├─Icon -- icon图标
│  │  │  ├─Loading -- 加载遮罩层
│  │  │  ├─Markdown -- Markdown编辑器
│  │  │  ├─Menu -- 顶部菜单模式菜单
│  │  │  ├─Modal -- 弹出模态框
│  │  │  ├─Page -- 页面包装
│  │  │  ├─Qrcode -- 二维码生成
│  │  │  ├─Scrollbar -- 滚动条
│  │  │  ├─SimpleMenu -- 侧边栏菜单
│  │  │  ├─StrengthMeter -- 密码强度检查
│  │  │  ├─Table -- 动态表格
│  │  │  ├─Time -- 当前时间显示
│  │  │  ├─Tinymce -- 功能齐全的富文本编辑器
│  │  │  ├─Transition -- 过度动画
│  │  │  ├─Tree -- 树形控件
│  │  │  ├─Upload -- 文件上传
│  │  ├─directives -- 自定义指令
│  │  ├─enums -- 全局枚举
│  │  ├─hooks -- vue组合API钩子工具
│  │  │  ├─component -- 组件相关钩子
│  │  │  ├─core -- 系统核心相关钩子
│  │  │  ├─event -- 事件相关钩子
│  │  │  ├─setting -- 全局设置相关钩子
│  │  │  ├─web -- 网页相关钩子
│  │  ├─layouts -- 系统总布局
│  │  │  ├─default -- 默认总系统布局框架组件
│  │  │  ├─iframe -- 内嵌页面
│  │  │  ├─page -- 路由模块页面
│  │  ├─locales -- 国际化
│  │  ├─logics -- 系统全局控制逻辑
│  │  ├─router -- 路由
│  │  ├─settings -- 默认全局设置配置
│  │  ├─store -- 全局状态管理
│  │  ├─utils -- 工具类
│  │  │  ├─auth -- 存储授权信息缓存
│  │  │  ├─cache -- 缓存实例工具
│  │  │  ├─event -- 事件工具
│  │  │  ├─factory -- 组件工厂
│  │  │  ├─file -- 文件工具
│  │  │  ├─helper -- 路由转换帮助工具
│  │  │  ├─http -- api请求工具
│  │  │  ├─lib -- 图表组件库
│  │  ├─views -- 页面模块组件
│  │  │  ├─common -- 通用业务页面
│  │  │  ├─core -- 系统核心业务页面
│  │  │  ├─dashboard -- 仪表板分析页面
│  │  │  ├─level -- 多级菜单页面
│  │  │  ├─monitor -- 运维监控业务页面
│  │  │  ├─system -- 系统业务页面
│  ├─types -- 全局类型定义
```
