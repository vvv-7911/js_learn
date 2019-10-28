const KoaRouter = require('koa-router');
const registerController = require('../controller/register.js');
const loginControll = require('../controller/login.js')
const router = new KoaRouter();

router.prefix('/api/v1')
router.get('/any', async (ctx) => {
  ctx.body = '123456'
})
router.post('/login', async(ctx) => {
  //
});
router.get('/login',loginControll)
router.get('/register', registerController);

module.exports = router;