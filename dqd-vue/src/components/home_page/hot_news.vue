<template>
  <div class="bottom-right-bottom">
    <p class="hot-news">
      <img src="../../assets/title-pre-icon.png" alt="">
      热门新闻
    </p>
    <div class="hot-news-list">
      <p v-for="(item, index) in newsInfo[0].hotNews" :key="index">
        <router-link to="">{{item.text}}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  name: 'hot_news',
  data() {
    return {
      newsInfo: []
    }
  },
  created () {
    api.getNewsInfo().then(res => {
      console.log(res)
      this.newsInfo= res.newsInfo
    })
  }
}
</script>

<style scoped>
.bottom-right-bottom {
  width: 340px;
  margin-bottom: 20px;
}
.bottom-right-bottom .hot-news {
  font-size: 16px;
  line-height: 50px;
  margin-bottom: 10px;
  border-bottom: 1px solid #f2f2f2;
}
.bottom-right-bottom .hot-news img {
  width: 14px;
  position: relative;
}
.bottom-right-bottom .hot-news-list {
  width: 100%;
}
.bottom-right-bottom .hot-news-list p {
  width: 100%;
  line-height: 40px;
}
.bottom-right-bottom .hot-news-list p a {
  width: 100%;
  text-decoration: none;
  font-size: 16px;
  color: black;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
