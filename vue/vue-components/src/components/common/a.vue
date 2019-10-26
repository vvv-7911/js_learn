<template>
  <div class="components-A">
    组件A--{{app.age}}
    <comB></comB>
  </div>
</template>

<script>
import comB from './b.vue'
export default {
  inject: ['app'],
  components: {
    comB
  },
  data() {
    return {
      test: '我是aaa'
    }
  },
  provide: {
    name: 'wn'
  }
}
</script>

<style scoped>

</style>
