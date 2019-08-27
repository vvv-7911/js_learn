var a = {
    name:"Cherry",
    fn: function(b, c) {
        console.log(b, c);
    }
}
var b = a.fn; 
// 函数运行时内部this的指向为a