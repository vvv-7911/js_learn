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

<style lang="stylus">
html
  font-family Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
.slideRight-enter
  transform translateX(100%)
  position absolute
.slideRight-leave-to
  transform translateX(-100%)
  position absolute
.slideLeft-enter
  transform translateX(-100%)
  position absolute
.slideLeft-leave-to
  transform translateX(100%)
  position absolute
.slideRight-enter-active,
.slideRight-leave-active,
.slideLeft-enter-active,
.slideLeft-leave-active
  transition: transform .5s

</style>
