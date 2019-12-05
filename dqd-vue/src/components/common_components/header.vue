<template>
<div id="nav-wrap">
  <div id="nav">
    <ul class="nav nav-pills">
      <li role="presentation"><a href="#"><img src="../../assets/dqd-logo.png" alt="" class="logo"></a></li>
      <li role="presentation" v-for="(item, index) in swiper" :key="index" :class="{'active': $route.path.indexOf(item.to) > -1}"><router-link :to="item.to" class="nav-tab">{{item.name}}</router-link></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      swiper: [{
        name: '首页',
        to: '/home'
      },{
        name: '新闻',
        to: '/news'
      },{
        name: '视频',
        to: '/videos'
      },{
        
        name: '直播',
        to: '/lives'
      },{
        name: '数据',
        to: '/datas'
      },{
        name: 'APP',
        to: '/app'
      },{
        name: '懂球号',
        to: '/dqh'
      },{
        name: '广告合作',
        to: '/gghz'
      }]
    }
  },
}
</script>

<style scoped>
#nav-wrap {
  width: 100%;
  height: 60px;
  box-shadow: 0 5px 10px #f0f0f0;
  margin-bottom: 30px;
}
#nav-wrap #nav {
  width: 1200px;
  margin: 0 auto;
}
#nav-wrap #nav .logo {
  width: 160px;
  float: left;
  margin-top: 10px;
  margin-right: 50px;
  line-height: 61.2px;
}
#nav-wrap #nav .nav-tab {
  width: 100px;
  height: 60px;
  padding: 0;
  line-height: 60px;
  text-align: center;
  display: inline-block;
  font-size: 18px;
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
#nav-wrap #nav .login {
  float: right!important;
  line-height: 60px;
  color: #333;
  font-size: 16px;
  text-decoration: none;
}
#nav-wrap #nav a {
  padding: 0;
  color: #000;
}
.nav-pills > li.active > a {
  background-color: #16b13a;
  color: #fff!important;
}
</style>
