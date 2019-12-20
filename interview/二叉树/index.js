var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

// 先序遍历的递归方法 根节点 > 左节点 > 右节点
// var preOrder = function (node) {
//   if (node) {
//     console.log(node.value)
//     preOrder(node.left)
//     preOrder(node.right)
//   }
// }
// preOrder(tree)

// // 中序遍历  左 > 中 > 右
// var preOrder = function (node) {
//   if (node) {
//     preOrder(node.left)
//     console.log(node.value)
//     preOrder(node.right)
//   }
// }
// preOrder(tree)

// // 后序遍历  左 > 右 > 根
// var preOrder = function (node) {
//   if (node) {
//     preOrder(node.left)
//     preOrder(node.right)
//     console.log(node.value)
//   }
// }
// preOrder(tree)



// 深度优先非递归
var preOrderUnrecur = function (node) {
  if (!node) {
    throw new Error('Empty Tree')
  }
  var stack = []
  stack.push(node)
  while (stack.length !== 0) {
    node = stack.pop()
    console.log(node.value)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
}
// preOrderUnrecur(tree)



// 广度优先非递归
function BreadthFirstUnrecur (biTree) {
  let queue = []
  queue.push(biTree)
  while (queue.length !== 0) {
    let node = queue.shift()
    console.log(node.value)
    if (node.right) queue.push(node.right)
    if (node.left) queue.push(node.left)
  } 
}
// BreadthFirstUnrecur(tree)




// 斐波那契
function fb(n) {
  let num1 = 1;
  let num2 = 1;
  let sum = num1 + num2;
  if (n === 1 || n === 2) return 1;
  for (let i= 3; i <= n; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum
  }
  return sum
}
console.log(fb(7))