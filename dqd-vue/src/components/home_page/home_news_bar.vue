<template>
<div>
  <div class="news" v-for="(item, index) in homenewsInfo" :key="index">
    <div class="top-left">
      <a href="" target="_blank">
        <dl>
          <dt><img :src="item.outImgUrl" alt=""></dt>
          <dd>{{item.text}}</dd>
        </dl>
      </a>
    </div>
    <div class="top-center">
      <p class="news-list head-line" v-for="(newsitem, i) in item.newsList" :key="i">
        <router-link :to="newsitem.href">{{newsitem.text}}</router-link>
      </p>
    </div>
  </div>
   
</div>
 
</template>

<script>
import api from '@/api/index'
export default {
  name: 'home_news_bar',
  data () {
    return {
      homenewsInfo : null
    }
  },
  created () {
    api.getHomeNewsInfo().then(res => {
      console.log(res)
      this.homenewsInfo= res.homeNewsInfo
    })
  }
}
</script>

<style scoped>
.news {
  overflow: hidden;
}
.top-left {
  float: left;
  width: 320px;
  overflow: hidden;
  margin-right: 35px;
}
.top-left a {
  margin-bottom: 30px;
  width: 320px;
  height: 240px;
  display: block;
}
.top-left a dl {
  width: 320px;
  height: 240px;
  background: #fafafa;
  position: relative;
  overflow: hidden;
}
.top-left a dl dt {
  width: 320px;
  height: 240px;
  overflow: hidden;
}
.top-left a dl dt img {
  width: 320px;
  height: 240px;
  display: block;
}
.top-left a dl dd {
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-indent: 12px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0,.6);
  color: #fff;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.top-center {
  float: left;
  width: 468px;
  height: 510px;
  overflow: hidden;
  margin-right: 30px;
}
.top-center .head-line {
  font-size: 20px;
}
.top-center .news-list {
  line-height: 30px;
  font-size: 16px;
  color: #333;
}
.top-center a {
  display: block;
  text-decoration: none;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
