class Koa {
  constructor () {
    this.middleWare = []
  }
  use (fn) {
    this.middleWare.push(fn)
  }
  run () {
    // application  compose:  中间件
    const dispatch = (i) => {
      let fn = this.middleWare[i]
      if (!fn) return Promise.resolve();
      // fn use进来的函数 ctx next

      //1
      // fn({ ctx: 'ctx' }, () => {
      //   // next
      //   // 剩余的
      //   dispatch(i + 1)
      // })


      // 2 
      return Promise.resolve(fn({ ctx: 'ctx' }, () => {
        // next
        return dispatch(i + 1)
      }))
    }
    dispatch(0)
  }
}

module.exports = Koa