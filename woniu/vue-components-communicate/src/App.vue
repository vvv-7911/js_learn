<template>
  <div id="app">
    <child1 :msg="msg" :msg2="msg2" :fn="appFn" v-bind="test" :count="count" @addCount="countAdd" :add="countAdd"></child1>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import child1 from '@/components/common/child1'
export default {
  name: 'App',
  components: {
    child1
  },
  data () {
    return {
      msg: '给child1的礼物',
      msg2: '再次给child1礼物',
      test: {
        a: 1,
        b: 2
      },
      count: 1
    }
  },
  methods: {
    appFn () {
      console.log('我是app.vue里面的方法')
    },
    countAdd () {
      this.count++
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
