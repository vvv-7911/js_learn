<template>
  <div class="match">
    
    <div>
      <p class="data-list-sub-tit">
      <span @click="showinteg = true" :class="{'selected': showinteg}">积分</span>
      <span @click="showinteg = false" :class="{'selected': !showinteg}">射手榜</span>
      </p>
    </div>
    <div>
      <p class="data-th">
      <span class="rank">名次</span>
      <span class="player">球队</span>
      <span class="team">胜/平/负</span>
      <span class="goal">积分</span>
      </p>
    </div>
    <div v-if="match">
      <div v-if="showinteg" >
        <integralList :class="{'front-rank': index < 3}" v-for="(item, index) in match.integralList" :key="index + 'integralList'" :integral="item"></integralList>
      </div>
      <div v-else>
        <shooterList :class="{'front-rank': sub < 3}" v-for="(num, sub) in match.shooterList" :key="sub" :shooter="num"></shooterList>
      </div>
    </div>
  </div>
</template>

<script>
import integralList from '@/components/home_page/integral_list'
import shooterList from '@/components/home_page/shooter_list'
export default {
  name: 'data_list_tit',
  props: {
    match: {
      type: Object
    }
  },
  data() {
    return {
      showinteg: true
    }
  },
  components: {
    integralList,
    shooterList
  }
}
</script>

<style scoped>
.match {
  float: left;
}
.data-list-sub-tit {
  margin: 16px 0;
  display: flex;
  justify-content: space-around;
}
.data-list-sub-tit span {
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  /* float: left; */
}
.data-th {
  overflow: hidden;
}
.data-th .rank {
  width: 60px;
}
.data-th span {
  display: inline-block;
  float: left;
  text-align: center;
  color: #666;
  font-size: 14px;
}
.data-th .player {
  width: 115px;
  text-align: left;
  text-indent: 24px;
}
.data-th .team {
  width: 110px;
  text-align: left;
  text-indent: 10px;
}
.data-th .goal {
  width: 50px;
  text-align: left;
}
.front-rank >>> .rank{
  background: #16b13a;
  color: #fff;
}
.selected {
  color: #16b13a;
}
</style>
