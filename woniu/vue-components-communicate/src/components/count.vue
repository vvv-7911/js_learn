<template>
  <div class="count">
    {{msg}}
    <hr/>
    <h3>{{$store.state.count}}</h3>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
  </div>

</template>

<script>
import store from '@/store/index.js'
export default {
  data() {
    return {
      msg: 'Hello Vuex'
    }
  },
  store
}
</script>

<style scoped>

</style>
