<template>
  <div v-if="shooter">
    <div class="data-info">
      <p class="data-info-item">
        <router-link to>
          <span class="rank">{{shooter.rank}}</span>
          <span class="player">
            <img :src="shooter.img" alt />
            {{shooter.player}}
          </span>
          <span class="team">{{shooter.team}}</span>
          <span class="goal">{{shooter.goal}}</span>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "shooter_list",
  props: {
    shooter: {
      type: Object
    }
  }
};
</script>

<style scoped>
.data-info .data-info-item {
  height: 45px;
  line-height: 45px;
}
.data-info .data-info-item a {
  color: black;
  display: block;
  overflow: hidden;
}
.data-info .data-info-item a .rank {
  width: 25px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin: 12px 16px 0;
  border-radius: 2px;
}
.data-info .data-info-item a span {
  display: inline-block;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
}
.data-info-item a .player {
  width: 110px;
}
.data-info-item a .player img {
  float: left;
  margin-top: 10px;
  margin-right: 6px;
  display: inline-block;
  width: 25px;
  height: 25px;
  overflow: hidden;
  background: #bdbdbd;
  border-radius: 50%;
}
.data-info-item a .team {
  width: 120px;
}
.data-info-item a .goal {
  width: 50px;
}
</style>
