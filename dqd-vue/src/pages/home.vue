<template>
  <div id="home-wrap">
    <div class="container">
      <HomeNewsBar class="news-list"></HomeNewsBar>
      <ImageNews class="imgnews"></ImageNews>
      <VideoNews class="videonews"></VideoNews>
      <MatchTitle class="match-box"></MatchTitle>
      <BlockTitle class="block"></BlockTitle>
      <HotNews class="block"></HotNews>
      <SocialNews class="block"></SocialNews>
    </div>
  </div>
</template>

<script>
import HomeNewsBar from '@/components/home_page/home_news_bar'
import ImageNews from '@/components/home_page/image_news'
import VideoNews from '@/components/home_page/video_news'
import MatchTitle from '@/components/home_page/match_title'
import BlockTitle from '@/components/home_page/block_title'
import HotNews from '@/components/home_page/hot_news'
import SocialNews from '@/components/home_page/social_news'
export default {
  components: {
    HomeNewsBar,
    ImageNews,
    VideoNews,
    MatchTitle,
    BlockTitle,
    HotNews,
    SocialNews
  }
}
</script>

<style scoped>
.home-wrap {
  overflow: hidden;
}
.container {
  width: 1200px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
}
.news-list {
  float: left;
  overflow: hidden;
}
.imgnews {
  float: right;
  width: 340px;
  overflow: hidden;
}
.videonews {
  float: right;
  overflow: hidden;
}
.videonews::after {
  content: '/20';
  width: 0;
  overflow: hidden;
  display: block;
  clear: both;
}
.match-item {
  overflow: hidden;
}
.match-box {
  overflow: hidden;
  clear: both;
  width: 820px;
  float: left;
  margin-bottom: 60px;
}
.block {
  float: right;
  width: 340px;
}
</style>
