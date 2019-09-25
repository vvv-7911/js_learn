function betterWn(target, name, descriptor) {
  // Man.prototype.xiangqin = function () {}
  // Object.defineProperty(Man.prototype, 'xiangqin', {
  //   value: function() {}
  // })
  const originalXiangqin = descriptor.value;
  descriptor.value = () => {
    console.log('我家在红谷滩有房');
    console.log('我家有车');
    originalXiangqin();
  }
}
class Man {

  @betterWn
  xiangqin() {
    // console.log('我家在红谷滩有房');
    // console.log('我家有车');
    console.log('和我在一起');
  }
}
var man = new Man();
man.xiangqin();