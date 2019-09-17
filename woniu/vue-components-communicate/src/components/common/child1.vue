<template>
  <div id="child1">
   {{msg}}
   {{msg2}}
   {{a}}
   {{b}}
   <button @click="add">+</button>
   {{count}}
   <button @click="fn">按钮</button>
  </div>
</template>

<script>
export default {
  props: ['msg', 'msg2', 'fn', 'a', 'b', 'count', 'add']
  // methods: {
  //   add () {
  //     this.$emit('addCount')
  //   }
  // }
}
</script>

<style scoped>

</style>
