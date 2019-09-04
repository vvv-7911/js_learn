 stylus -w .\style.styl -o .\style.css 
 live-server


 - git status
 - git add ./
 - git commit -m ''
 - git push origin master
 - git status


 this的情况：
 1. 当以函数的形式调用时， this是window
 2. 当以方法的形式调用时， 谁调用方法this就是谁
 3. 当以构造函数的形式调用时， this就是新创建的那个对象