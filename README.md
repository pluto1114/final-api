# final-api

#### 介绍
这是一个使用Typescript编写的REST API项目生成脚手架，目标是通过URI资源，自动生成符合REST风格API的服务器端项目，并可进行灵活自定URI，极速实现URI资源的访问和操作。

#### 软件架构
软件架构说明


#### 安装教程

1.  修改ormconfig.json配置数据库连接
2.  安装依赖npm install


#### 使用说明

1.  执行 npm run db生成entity
2.  执行 node geneentity [表名] 加工entity（表名可多个，用空格分隔）
3.  执行 node genec [资源名] 生成符合Restful api规范的controller
4.  启动应用npm run watch 


