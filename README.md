# 淘客邦PC版

## 使用

```
git clone https://github.com/965283058/tkb-fe.git // 从仓库上拉取代码
cd tkb-fe                                      // 进入项目
npm i                                              // 安装依赖
npm start [port]                                   // 启动项目，参数 port 代表端口，默认是 8888
```

## 依赖

Vue  

Vue-router

Vue-http

## 前端服务器配置

### 端口配置

```
打开 webpack.dev.conf.js 文件，找到 port 字段，默认是 8888
修改为任意端口，重新 npm start 即可用新的端口访问前端服务器
```

### 代理配置

```

打开 webpack.dev.conf.js 文件，找到 server 字段，在此字段上添加一个新字段

proxy: {
    host: '',
    match: /^/
}

host 为接口的主机名
match 为正则表达式

Example:

server: {
    port: 8866,
    proxy: {
        host: '192.168.1.226:8089',
        match: /^\/api\//
    }
}

当请求地址: http://localhost:8866/api/getUserId 时
如果配置了代理，那么代理会自动转发到: http://192.168.1.226:8089/getUserId 上
```

## 目录结构

```
/finance-elite
├── node_modules // 项目依赖包
├─┬ build 项目打包文件
├─┬ src
│ ├── apis // 后端接口
│ ├── components // 组件
│ ├── pages // 页面 
│ ├── router // 路由
│ ├── utils // 工具
│ ├── App.vue // 主文件
│ └── entry.js // 启动文件，给 webpack 使用
├── index.html // 承载各页面的容器
├── package.json // 项目配置文件
 
```



 