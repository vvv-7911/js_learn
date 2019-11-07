import vue from 'vue'
import {add, sub} from './until'
import App from './App'
console.log(add(1, 2));
// main.js  7.42   10.42
// main---123.js  10:00   上线了一个新的
new vue({
  render: h => h(App),
  components: { App },
}).$mount('#app')