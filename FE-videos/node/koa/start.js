const Koa = require('koa');
const student = new Koa();
// const manage = new Koa();
// 中间件
student.use(async (ctx, next) => {
  ctx.body = 'hello world';
})
student.listen(3000, () => {
  console.log('server is running 3000')
})