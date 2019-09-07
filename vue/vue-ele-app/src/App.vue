<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5d35483c94f0561a9160d179/hello/vue-ele-app')
      .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          this.seller = Object.assign({}, this.seller, res.data.data)
        }
      })
  }
}
</script>

<style>

</style>
