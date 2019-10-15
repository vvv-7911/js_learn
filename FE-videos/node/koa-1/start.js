const Koa = require('koa');
const student = new Koa();
// const manage = new Koa();
// 中间件
// http://localhost:3000/a?a=1&b=2
// 中间件是一个方法
// 用户 request  -> minddleWare1 -> middleWrae2 -> middleWare3 -> res

student.use(async (ctx, next) => {
  console.log(ctx.path, ctx.query)
  ctx.body = 'hello world';
  await next();
  console.log('middleWare1')
})
student.use(async (ctx, next) => {
  await next();
  console.log('middleWare2')
})
student.use(async (ctx, next) => {
  console.log('middleWare3')
})

student.listen(3000, () => {
  console.log('server is running 3000')
})