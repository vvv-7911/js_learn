<template>
  <div>
    <div class="top-right-top" v-for="(item, index) in imagenewsInfo" :key="index">
      <router-link :to="item.href">
        <dl class="leisure">
          <dt><img :src="item.imgUrl" alt=""></dt>
          <dd>
            <p class="tit">{{item.text}}</p>
            <span class="column">闲情</span>
          </dd>
        </dl>
      </router-link>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  name: 'imagenews',
  data() {
    return {
      imagenewsInfo: null
    }
  },
  created () {
    api.getImageNewsInfo().then(res => {
      console.log(res)
      this.imagenewsInfo= res.imagenewsInfo
    })
  }
}
</script>

<style scoped>
.top-right-top {
  float: left;
  width: 340px;
  overflow: hidden;
}
.top-right-top a {
  color: #000;
  text-decoration: none;
  display: block;
}
.leisure {
  width: 100%;
  height: 70px;
  margin-bottom: 15px;
}
.leisure dt {
  float: left;
  width: 100px;
  height: 70px;
  overflow: hidden;
  margin-right: 20px;
}
.leisure dt img {
  width: 100%;
  height: 100%;
}
.leisure dd {
  width: 218px;
  float: left;
  font-size: 16px;
  line-height: 24px;
}
.leisure dd .tit {
  margin-bottom: 6px;
  line-height: 22px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden; 
}
.column {
  font-size: 14px;
  color: #999;
}
</style>
