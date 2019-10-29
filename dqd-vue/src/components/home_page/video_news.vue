<template>
  <div>
    <div class="top-right-bottom">
      <p class="video-list" v-for="(item, index) in videoNewsInfo" :key="index">
        <router-link :to="item.href" :class="{'first-line': index == 0}">
          <img v-if="index !== 0" src="https://www.dongqiudi.com/images/play-btn.png" alt="" class="play-btn">
          {{item.text}}
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  name: 'videonews',
  data() {
    return {
      videoNewsInfo: null
    }
  },
  created () {
    api.getVideoNewsInfo().then(res => {
      console.log(res)
      this.videoNewsInfo= res.videoNewsInfo
    })
  }
}
</script>

<style scoped>
.top-right-bottom {
  float: left;
  width: 340px;
  overflow: hidden;
}
.first-line {
  font-size: 20px;
}
.video-list {
  width: 100%;
}
a {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  color: #000;
  text-decoration: none;
}
.play-btn {
  width: 20px;
  margin-right: 8px;
  position: relative;
  top: 4px;
  vertical-align: baseline;
}
</style>
