<template>
  <div>
    <p class="block-title">
      <span class="tit-text">比赛直播</span>
      <router-link to="" class="more">更多</router-link>
    </p>
    <matchList v-for="(item, index) in matchInfo" :key="index" :matchList="item"></matchList>
  </div>
</template>

<script>
import api from '@/api/index'
import matchList from '@/components/home_page/match_list'
export default {
  name: 'match_title',
  data() {
    return {
      matchInfo: []
    }
  },
  components:{
    matchList
  },
  created () {
    api.getMatchInfo().then(res => {
      console.log(res)
      this.matchInfo= res.matchInfo
    })
  }
}

</script>

<style scoped>
.block-title {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #f2f2f2;
}
.tit-text {
  display: inline-block;
  width: 110px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background: url(../../assets/tit-bg.png) no-repeat;
}
.more {
  float: right;
  color: #16b13a;
  text-decoration: none;
  margin-top: 6px;
}
</style>
