<template>
  <div id="home-wrap">
    <HomeNewsBar class="news-list"></HomeNewsBar>
  </div>
</template>

<script>
import HomeNewsBar from '@/components/home_page/home_news_bar'
export default {
  components: {
    HomeNewsBar
  }
}
</script>

<style scoped>
.home-wrap {
  overflow: hidden;
}
.news-list {
  overflow: hidden;
}
</style>
