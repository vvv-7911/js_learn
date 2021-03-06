// var t;
// function foo() {
//   if (t) return t
//   t = new Date()
//   return t
// }

// 闭包
// var foo = (function() {
//   var t;
//   return function() {
//     if (t) return t
//     t = new Date()
//     return t
//   }
// })()

// 函数对象
// function foo() {
//   if (foo.t) {
//     return foo.t
//   }
//   foo.t = new Date()
//   return foo.t
// }  

// 惰性函数
// var foo = function() {
//   var t = new Date()
//   foo = function() {
//     return t
//   }
//   return foo()
// }

function addEvent(type, el, fn) {
  if( window.addEventListener) {
    el.addEventListener(type, fn, false)
  } else if (window.attachEvent) {
    el.attachEvent('on' + type, fn)
  }
}


function addEvent(type, el, fn) {
  if (window.addEventListener) {
    addEvent = function(type, el, fn) {
      el.addEventListener(type, fn, false)
    }
  } else if (window.attachEvent) {
    addEvent = function(type, el, fn) {
      el.attachEvent('on' + type, fn)
    }
  }
}