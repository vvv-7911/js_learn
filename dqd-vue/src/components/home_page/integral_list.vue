<template>
  <div v-if="integral">
    <div class="team part">
      <div class="data-info">
        <p class="data-info-item">
          <router-link to="">
            <span class="rank">{{integral.rank}}</span>
            <span class="team">
              <img :src="integral.img" alt="">
              {{integral.team}}
            </span>
            <span class="result">{{integral.result}}</span>
            <span class="goal">{{integral.goal}}</span>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'integral_list',
  props: {
    integral: {
      type: Object
    }
  }
}
</script>

<style scoped>
/* .data-list-sub-tit {
  margin: 16px 0;
} */
/* .data-list-sub-tit span {
  width: 50%;
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
} */
/* .data-th {
  overflow: hidden;
} */
/* .data-th span {
  display: inline-block;
  float: left;
  text-align: center;
  color: #666;
  font-size: 14px;
} */
.data-th .rank {
  width: 60px;
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
.data-info-item {
  height: 45px;
  line-height: 45px;
}
.data-info-item a {
  color: #000;
  display: block;
  overflow: hidden;
}
/* .front-rank {
  background: #16b13a;
  color: #fff;
} */
.data-info-item a .rank {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  margin: 12px 16px 0;
  border-radius: 2px;
}
.data-info-item a span {
  display: inline-block;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
}
.data-info-item a .team {
  width: 130px;
}
.data-info-item a .team img {
  float: left;
  margin-top: 10px;
  margin-right: 6px;
  display: inline-block;
  width: 25px;
  height: 25px;
  overflow: hidden;
}
.data-info-item a .result {
  width: 100px;
  text-indent: 10px;
}
.data-info-item a .goal {
  width: 40px;
  text-align: center;
}
</style>
