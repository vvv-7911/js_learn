# set 和 weakSet 区别
1. weakSet 只能存放对象
2. weakSet 不支持遍历，没有size
3. weakSet 存放的对象不会记入到对象的引用技术，因此不会影响GC的回收
4. weakSet 存放的对象如果在外界消失了，那么Weakset里面也不会存在

# Map 和 Weakmap  区别
1. Weakmap 只能接受对象作为键名 (null除外)
2. Weakmap 键名指向对象不会记入到对象的引用数当中