// let http = require('http')

// let server = http.createServer((req,res) => {
//     res.end('hello world')
// })

// server.listen(3000,() => {
//     console.log('服务器来了')
// })

// const Koa = require('koa')
// const app = new Koa()

// app.use((ctx,next) => {
//     ctx.body = 'hello world2!'
// })
// app.listen(3000,() => {
//     console.log('服务器来了')
// })

let Koa = require('./lib/application')
let app = new Koa()

app.use((ctx) => {
    // console.log(ctx.req.url)
    // console.log(ctx.request.req.url)
    // console.log(ctx.response.req.url)
    // console.log(ctx.request.url)
    // console.log(ctx.request.path)
    // console.log(ctx.url)
    // console.log(ctx.path)
    // res.end('hello world')
    ctx.body = '韩雨汐辣鸡'
    console.log(ctx.body);
})

//-----------
  
//------------
app.listen(3000)