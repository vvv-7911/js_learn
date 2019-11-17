<template>
  <div class="bottom-right-top">
    <p class="block-title">
      <span class="tit-text">数据</span>
      <router-link to="" target="_blank" class="more">更多</router-link>
    </p>
    <div class="match">
      <p class="data-list-tit" v-for="(item, index) in dataInfo" :key="index + '' + item.team">
      <span :class="{'selected':currIndex === index}" v-if="item.match" @click="currIndex = index">{{item.match}}</span>
    </p>
    </div>
    <dataListTit :match="currItem"></dataListTit>
  </div>
</template>

<script>
import api from '@/api/index'
import dataListTit from '@/components/home_page/data_list_tit'
export default {
  name: 'block_title',
  data() {
    return {
      dataInfo: [],
      currIndex: 0
    }
  },
  computed:{
    currItem () {
      return this.dataInfo[this.currIndex]
    }
  },
  components: {
    dataListTit
  },
  created () {
    api.getDataInfo().then(res => {
      console.log(res)
      this.dataInfo= res.dataInfo
    })
  }
}
</script>

<style scoped>
.bottom-right-top {
  background: #fafafa;
  padding-bottom: 30px;
  margin-bottom: 30px;
}
.bottom-right-top .block-title {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #f2f2f2;
  margin: 0;
}
.bottom-right-top .block-title .tit-text {
  display: inline-block;
  width: 110px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background: url(../../assets/tit-bg1.png) no-repeat;
}
.bottom-right-top .block-title .more {
  float: right;
  line-height: 40px;
  margin-right: 18px;
  font-weight: 400;
  color: #16b13a;
  text-decoration: none;
}
.data-list-tit {
  border-bottom: 1px solid #f2f2f2;
}
.data-list-tit span {
  width: 56px;
  font-size: 16px;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
.match p {
  float: left;
}
.selected {
  color: #16b13a;
}
</style>
