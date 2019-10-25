<template>
  <div id="app">
    <i-header></i-header>
    <router-view/>
    <i-footer></i-footer>
  </div>
</template>

<script>
import api from '@/api/index'
import header from '@/components/common_components/header'
import footer from '@/components/common_components/footer'
export default {
  name: 'App',
  components: {
  'i-header': header,
  'i-footer': footer
  }
}
</script>

<style>

</style>
