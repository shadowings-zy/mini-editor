# react+koa+ts 前后端分离模板项目

## 一、技术选型

- 编程语言：typescript
- 前端框架：react
- 前端包管理工具：pnpm
- 打包工具：webpack
- 后端框架：koa
- 部署工具：pm2
- 格式化代码：prettier

## 二、目录结构

| 文件目录         | 说明                               |
| ---------------- | ---------------------------------- |
| ./README.md      | 说明文档                           |
| ./package        | 源代码                             |
| ./package/client | 前端源代码                         |
| ./package/server | 后端源代码                         |

## 三、开发指南

执行`bootstrap`命令安装 pnpm 和 pm2（如果你没有这两个东西的话）
使用`pnpm install`命令安装依赖
使用`dev:all`命令进行开发，访问`localhost:8080`即可看到网站
使用`build:all`命令进行打包
使用`format`命令格式化代码

## 四、部署指南

执行`bootstrap`命令安装 pnpm 和 pm2（如果你没有这两个东西的话）
使用`start`命令启动服务
