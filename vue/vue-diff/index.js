/* <ul id="list">
  <li class="item">item1</li>
  <li class="item">item2</li>
  <li class="item">item3</li>
</ul> */

var REPLACE = 0,    // replace 替换
    REORDER = 1,    // reorder 父节点中子节点的操作
    PROPS   = 2,    // props 属性的变化
    TEXT    = 3     // text 文本内容的变化


function Element (tagName, props, children) { // 创建虚拟DOM树
  this.tagName = tagName
  this.props = props
  this.children = children
}

Element.prototype.render = function () {
  let el = document.createElement(this.tagName), // 创建节点
      props = this.props //  节点属性

  for (let propName in props) {
    el.setAttribute(propName, props[propName])
  }

  this.children.forEach((child) => {
    let childEl = (typeof child === 'object') ? new Element(child.tagName, child.props, child.children).render() : document.createTextNode(child)
    el.appendChild(childEl)
  })
  return el
}


// diff 算法，对比两个dom树
function diff (oldTree, newTree) {
  let index = 0 // 节点的标志
  let patches = {} // 记录每个节点差异的地方
  dfsWalk(oldTree, newTree, index, patches) // 找不同
  return patches
}

 function dfsWalk (oldNode, newNode, patches, index) {
  // 对比oldTree和newTree的差异， 把不同的地方记录下来
  var currentPath = []
  if (newNode !== null && oldNode.tagName !== newNode.tagName && oldNode.key !== newNode.key) {
    currentPath.push({type: 'div', props: {id: 'container'}})
  }
  patches[index] = currentPath

  diffChildren(oldNode.children, newNode.children, index, patches)
 }

 function diffChildren (oldChildren, newChildren, index, patches) {
  let leftNode = null
  let currentNodeIndex = index
  oldChildren.forEach((child, i) => {
    var newChild = newChildren[i]
    currentNodeIndex = (leftNode && leftNode.count) // 计算节点的标记
    ? currentNodeIndex + leftNode.count + 1 : currentNodeIndex + 1

    dfsWalk(child, newChild, currentNodeIndex, patches) // 遍历子节点 找子节点当中的不同
    leftNode = child
  })
 }

 // 将差异应用到DOM树上
 function patch(node, patches) {
   var walfer = { index: 0} // 记录当前节点的标志
   dfWalk(node, walfer, patches)
 }

 function dfWalk (node, walfer, patches) {
  var currentPatches = patches[walfer.index]

  var len = node.childNodes ? node.childNodes.length : 0

  for (i = 0; i < len; i++) { // 深度遍历子节点
    var child = node.childNodes[i]
    walfer.index++
    dfWalk(child, walfer, patches)
  }

  if (currentPatches) {
    applyPatches(node, currentPatches) // 对当前的节点进行DOM操作
  }
 }

 function applyPatches (node, currentNodeIndex) {
  currentPatches.forEach((currentPatch) => {
    switch (currentPath.type) {
      case REPLACE: 
        var newNode = (typeof currentPath.node === 'string') ? document.createTextNode(currentPath.node) : currentPath.node.render()
        node.parentNode.replaceChild(newNode, node)
        break;
      case REORDER:
        reorderChildren(node, currentPath.moves)
        break;
      case PROPS:
        setProps(node, currentPath.moves)
        break;
      case TEXT:
        if (node.textContent) {
          node.textContent = currentPath.content
        } else {
          node.nodeValue = currentPath.content
        }
        break;
      default:
        throw new Error('Unknow patch type' + currentPath)
    }
  })
 }