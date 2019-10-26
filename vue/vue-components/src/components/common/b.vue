<template>
  <div class="components-B">
    组件B--{{name}}--{{app.user}}
    <button @click="check">check</button>
  </div>
</template>

<script>
export default {
  // props:['send']
  inject: ['name', 'app'],
  methods: {
    check() {
      this.app.userInfo()
    }
  }
}
</script>

<style scoped>

</style>
