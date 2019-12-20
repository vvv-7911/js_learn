
## 强缓存
http1.1  cache-control： 相对的
http1.0  expires：固定的时间  

请求：不发请求，直接走缓存

状态码 200: from memory / from disk

## 协商缓存
etag：每个文件有一个，改动文件了就变了，就是个文件hash，每个文件唯一，就像用webpack打包的时候，每个资源都会有这个东西，如： app.js打包后变为 app.c20abbde.js，加个唯一hash，也是为了解决缓存问题。

last-modified：文件的修改时间，精确到秒


1. a.js
2. 服务：etag: '123' md5(a.js)
3. 后续请求：if-none-match: '123'
4. 服务端判断 
    1. req.headers[if-none-match] ?== md5(a.js)
    2. == 304
    3. !== 200 a.js
所以协商缓存步骤总结：
请求资源时，把用户本地该资源的 etag 同时带到服务端，服务端和最新资源做对比。
如果资源没更改，返回304，浏览器读取本地缓存。
如果资源有更改，返回200，返回最新的资源。


文件的hash值：md5
同样的输入同样输出:

服务: last-modified: 2018:12:11
请求: if-modified-since: 2018:12:11
文件最后修改时间

console.log(123) -> 456
// 7:30


## 为什么要有etag？
你可能会觉得使用last-modified已经足以让浏览器知道本地的缓存副本是否足够新，为什么还需要etag呢？HTTP1.1中etag的出现（也就是说，etag是新增的，为了解决之前只有If-Modified的缺点）主要是为了解决几个last-modified比较难解决的问题：

1. 一些文件也许会周期性的更改，但是他的内容并不改变(仅仅改变的修改时间)，这个时候我们并不希望客户端认为这个文件被修改了，而重新get；

2. 某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说1s内修改了N次)，if-modified-since能检查到的粒度是秒级的，这种修改无法判断(或者说UNIX记录MTIME只能精确到秒)；

3. 某些服务器不能精确的得到文件的最后修改时间。




## 
translate3D 开启  GPU 加速

steps:
1. html 解析 dom树
2. css -> cssom
3. render tree
4. layout
5. paint
6. 合成 composite

js -> layout -> paint -> composite
layout: 重排
paint: 重绘
重绘不一定会引起重排
重排一定会引起重绘

都是 针对元素所在当前这一个层的

layout: 大小，位置，top，left，bottom
paint: color shadow...
composite: transform opacity 发生变化的元素必须在一个 合成层 上面

提升层的方式：
1. 3d transform
2. will-change
3. css3: animation transiton 开始的时候   结束的时候没在了
4. backface-visiablity: hidden;
5. video

提升层的好处：
元素的变化只会影响当前这一个层。

层越多越好？
每一个层都需要内存消耗