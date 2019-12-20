### cookie

随着用户的请求，同源自动带到请求头里面
cookie：4kb
...Storage 5Mb

name
value
domain: 域名
path: / /a /a/b   包含关系
httponly: !!! 如果设为 true，不能通过 js 获取 cookie
secure: ！！！ 如果设为true，https 协议下面传输
max-age:  生效时间

1. set-cookie: 
2. js