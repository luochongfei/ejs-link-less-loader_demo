# ejs-link-less-loader_demo

> In the use of ejs at the same time through the link directly into the less and compiled into the line style insert（能在使用ejs的同时通过link直接引入less并且编译成行内style插入） 

### 源码（Source code）：[https://github.com/luochongfei/ejs-link-less-loader](https://github.com/luochongfei/ejs-link-less-loader) 


### Run this example(运行本示例)
```bash
$ git clone git@github.com:luochongfei/ejs-link-less-loader_demo.git

$ cd ejs-link-less-loader_demo

$ npm install

$ webpack
```


### source(源)

> ./public/head.ejs
```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <%- include('./public/head.ejs',{title:'首页',page:'index'}) %>
    <link rel="stylesheet" href="./less/reset.less">
</head>
<body>
    <a href="javavascript:;" onclick="alert('欢迎使用ejs-link-less-loader')">代码改变世界（Code changes the world）</a>
</body>
</html>
```

> ./public/head.ejs
```html
<meta charset="UTF-8">
<title><%=title%></title>
<script src="https://cdn.bootcss.com/vue/2.3.3/vue.runtime.min.js"></script>
```
>./less/reset.less
```less
@bgColor:#09a;
@fontColor:#fff;
html,body,h1,h2,h3,h4,h5,p,ul,li{
    margin: 0;
    padding: 0;
}
html,body{
    height:100%;
    background-color:#@bgColor;
}
body{
    display: flex;
    align-items: center;
    justify-content: center;
    color:@fontColor;
}
```   
   
### result(编译结果)

```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
<title>首页</title>
<script src="https://cdn.bootcss.com/vue/2.3.3/vue.runtime.min.js"></script>
    <style type="text/css">html,body,h1,h2,h3,h4,h5,p,ul,li{margin:0;padding:0}html,body{height:100%;background-color:#09a}body{display:flex;align-items:center;justify-content:center;color:#fff}</style>
</head>
<body>
    <a href="javavascript:;" onclick="alert('欢迎使用ejs-link-less-loader')">代码改变世界（Code changes the world）</a>
<script type="text/javascript" src="js/build.js?9efb4f3a"></script></body>
</html>
```

### contact me(联系我)：luochongfei@126.com