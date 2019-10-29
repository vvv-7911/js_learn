<template>
  <div>
    <div class="match-item" v-if="matchItem">
      <router-link to="">
        <span class="start-min">{{matchItem.time}}</span>
        <span class="round">{{matchItem.match_type}}</span>
        <div class="match-info">
          <p class="team-a">
            <span class="teama-name">{{matchItem.team_a_name}}</span>
            <img :src="matchItem.team_a_img" alt="">
          </p>
          <div class="vs-score-wrap">
            <p class="feature">{{matchItem.score_or_VS}}</p>
          </div>
          <p class="team-b">
            <span class="teamb-name">{{matchItem.team_b_name}}</span>
            <img :src="matchItem.team_b_img" alt="">
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'matchitem',
  props: {
    matchItem: {
      type: Object
    }
  }
}
</script>

<style scoped>
.match-item {
  width: 100%;
  height: 60px;
  font-size: 16px;
  line-height: 60px;
  overflow: hidden;
}
.match-item a {
  color: #000;
  display: block;
  overflow: hidden;
}
.start-min {
  float: left;
  width: 75px;
  text-indent: 22px;
  white-space: nowrap;
  overflow: hidden;
}
.round {
  float: left;
  width: 110px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}
.team-a {
  float: left;
  height: 60px;
  overflow: hidden;
}
.teama-name {
  width: 132px;
  text-align: right;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.team-a img {
  width: 26px;
  float: right;
  margin-top: 18px;
  margin-left: 10px;
}
.vs-score-wrap {
  width: 78px;
  float: left;
  text-align: center;
}
.team-b {
  float: left;
  height: 60px;
  overflow: hidden;
}
.teamb-name {
  width: 132px;
  text-align: left;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.team-b img {
  width: 26px;
  float: left;
  margin-top: 18px;
  margin-right: 10px;
}
</style>
