if (typeof Object.assign2 != 'function') {
  Object.defineProperty(Object, 'assign2', {
    value: function (target) {
      'use strict';
      if (target == null) {
        throw new TypeError('Connot conver undefined or null to object')
      }

      var to = Object(target)

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index]

        if (nextSource != null ) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey]
            }
          }
        }
      }
      return to
    }, 
    writable: true,
    configurable: true
  })
}

let a = {
  name: 'dada',
  age: '18'
}
let b = {
  name: 'www',
  book: {
    title:"You don't know JS",
    price: "45"
  }
}
let c = Object.assign2(a, b)
console.log(c);