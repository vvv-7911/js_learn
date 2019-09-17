<template>
  <div>
    <button @click="handleToast">购买</button>
    <!-- <toast msg="测试弹窗1" :visiable="visiable"></toast> -->
  </div>
</template>

<script>
// import Toast from './Toast/index'
import showMessage from './Toast/index.js'
export default {
  name: 'HelloWorld',
  data() {
    return {
      visiable: false
    }
  },
  components: {
    // Toast
  },
  methods: {
    handleToast () {
      // this.visiable = true;
      // setTimeout (() => {
      //   this.visiable = false
      // }, 3000)
      showMessage('没到开售时间')
    }
  }
}
</script>

<style scoped>

</style>
