# expressQ
集成好的express框架，各种常用工具封装<br />

你只需要 node www.js 启动它，再写上你自己的路由 就可以了，另外 node socket.js 是启动web 的同时启动 socket.io。


db/config/connection.js     --数据库统一配置文件<br />
db/数据库名/xxHelper.js     --数据库的工具类<br />
db/extend                   --常用扩展工具类<br />
models                      --orm 数据库模型<br />
system/ControllerManage.js  --自动加载路由管理类<br />
system/ORMManage.js         --自动加载数据库模型<br />
