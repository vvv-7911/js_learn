##
SEO：浏览器会爬取HTML内容，为了 SEO 我们要放文字，为了美观 放图片，
场景：网站的logo
## css 选择器 优先级
important
style (1000 //权重) 
id    (100)
class (10)
元素/伪元素 (*)  (1)
#box span.active   权重111  权重大的覆盖小的
#box span         权重101
同等 优先级 按照css定义的顺序后出现覆盖先出现的
````css
.red {color: red}
.blue{color: blue}
<span class="blue red">123</span>
````


## animation-fill-mode
forwards
none
backwrads  动画开始前，将元素的样式设为动画第一帧的样式
both: forwards + backwrads