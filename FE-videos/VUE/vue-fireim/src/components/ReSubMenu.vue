<template>
 <!-- 容器组件 -->
 <SubMenu>
   <template #title>{{data.title}}</template>
   <MenuItem v-for="child in data.children" v-if="!child.children" :key="child.id">{{child.title}}</MenuItem>
   <ReSubMenu v-else :data="child"></ReSubMenu>
 </SubMenu>
</template>

<script>
import SubMenu from './SubMenu'
import MenuItem from './MenuItem'
export default {
  name: "ReSubMenu",
  props: ["data"],
  components: {
    SubMenu,
    MenuItem
  }
}
</script>

<style scoped>

</style>
