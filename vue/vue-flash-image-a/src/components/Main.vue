<template>
  <div class="main">
    <div class="gauntlet">
      <button>消失</button>
    </div>
    <Content :heroes="heroes"/>
  </div>
</template>

<script>
import Content from './Content'
import { heroes } from './heroes';
export default {
  data () {
    return {
      heroes: heroes
    }
  },
  methods: {
    disAppear() {
      this.heroes.slice(0)
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.ceil(this.heroes.length / 2))
      .map(hero => hero.id);
    }
  },
  components: {
    Content
  }
}
</script>

<style scoped>

</style>
