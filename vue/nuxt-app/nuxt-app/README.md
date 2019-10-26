- SSR
相对于SPA 体验好， 缺点，对搜索引擎不友好
Vue component JS 内存 手机网站大部分不来自搜索
PC 入口 www.baidu.com

掘金  SPA   ->  nuxt
Segmentfault  php

- 前端
vue +  nuxt
- 后端
  koa +  mysql  mongodb   redis

- VUE UI 框架
- axios

- pages 目录下的vue 文件都会自动的帮我们做好路由
  /posts  没有vue 单点入口，根组件的概念
  路由由pages配置约定 _id.vue
- Layout
  有专门的layout  目录  多个页面的公有部分，
  app.html  全局
  layout/
    default.vue 默认选择  
    其它的，page/ 
    script  layout: false 
- 数据流
  store -> api -> node  
- json-server
  方便的API工具，编辑一个json就可以
  仿的网站里  ajax  
  /assets/*.json

  RESTFUL WEB
  一切皆资源，url 就可以
  url 设计标准化  /posts/:1
  请求相应的资源时，使用对应的谓语动词
  获取资源  /GET
  添加一个资源  /POST {}
  修改资源 /PUT   新的对象更新老的对象
  /PATCH  打补丁
  /DELETE  删除 /posts/1