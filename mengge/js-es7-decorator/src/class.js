function who(pname) {
  // console.log(target);
  // target.pname = '蜗牛';
  // return target;
  return function(target) {
    // target === function Man() { } === class Man{}
    console.log(target);
    target.pname = pname;
    return target;
  }
}
@who('蜗牛弟弟')
// @who('蜗牛')
// @who({
//   name: '蜗牛'
// })
class Man {
  xiangqin() {
    // console.log(`蜗牛去相亲了`)
    console.log(`${Man.pname}去相亲了`)
  }
}
var man = new Man();
man.xiangqin();
class Man1 {
  xiangqin() {
    console.log(`蜗牛弟弟去相亲了`)
    // console.log(`${Man.name}去相亲了`)；
  }
}