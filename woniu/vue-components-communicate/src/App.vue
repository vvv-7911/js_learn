<template>
  <div id="app">
    <count/>
    <!-- <child1 :msg="msg" :msg2="msg2" :fn="appFn" v-bind="test" :count="count" @addCount="countAdd" :add="countAdd"></child1> -->
    <!-- <router-view/> -->
    <!-- <p>--------------------------</p>
    <child2></child2>
    <p>---------------------------</p>
    <child3 fromChild="fromChild"></child3>
    <span>{{message}}</span> -->
  </div>
</template>

<script>
import child1 from '@/components/common/child1'
import child2 from '@/components/common/child2'
import child3 from '@/components/common/child3'
import Count from '@/components/count'
export default {
  name: 'App',
  components: {
    child1,
    child2,
    child3,
    Count
  },
  data () {
    return {
      msg: '给child1的礼物',
      msg2: '再次给child1礼物',
      test: {
        a: 1,
        b: 2
      },
      count: 1,
      message: '父组件默认的数据'
    }
  },
  methods: {
    appFn () {
      console.log('我是app.vue里面的方法')
    },
    countAdd () {
      this.count++
    },
    fromChild (e) {
      this.message = e
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
