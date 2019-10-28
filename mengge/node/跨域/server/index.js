const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaStatic = require('koa-static');
const path = require('path');
const app = new Koa();

var router = new KoaRouter();

router.get('/api/books', (ctx, next) => {
  // ctx.router available
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'POST, GET')
  ctx.set('Access-Control-Allow-Header', 'X-custume, Content-Type')
  ctx.body = [
    { bookName: 'php 入门到精通'},
    { bookName: 'node 入门到精通'},
  ]
});
app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(KoaStatic(path.join(__dirname, './static')));
app.listen(3001, () => {
  console.log('server is running http://localhost:3001');
})
