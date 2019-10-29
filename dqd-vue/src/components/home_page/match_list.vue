<template>
  <div>
    <p class="date">
      <img src="../../assets/title-pre-icon.png" alt="">
      {{matchList.date}}
    </p>
    <matchItem class="match-item" v-for="(item, index) in matchList.matchList" :key="index" :matchItem="item"></matchItem>
  </div>
</template>

<script>
import matchItem from '@/components/home_page/match_item'
export default {
  name: 'match_list',
  components: {
    matchItem
  },
  props: {
    matchList: {
      type: Object,
      default: []
    }
  },
}
</script>

<style scoped>
.date {
  line-height: 60px;
  font-size: 16px;
  margin: 0;
}
.date img {
  width: 12px;
  float: left;
  margin: 20px 10px 0 0;
}
.match-item:nth-child(odd) {
  background-color: #fff;
}
.match-item:nth-child(even) {
  background-color: #f7f7f7;
}
</style>
