## BFC布局规则：
1. 内部的Box会在垂直方向，一个接一个的放置
2. BFC区域不会与float box重叠。
3. 内部的Box垂直方向的距离有margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
4. 计算BFC的高度时，浮动元素也参与计算。（清除浮动  haslayout）
5. BFC就是页面上的一个隔离的容器，容器里面的子元素不会影响外面的元素。反之也如此。


## BFC什么时候出现(哪些元素会生成BFC)
1. 根元素
2. float属性不为none
3. position为absolute或fixed
4. overflow不为visible
5. display为inline-block，table-cell，table-caption，flex，inline-flex