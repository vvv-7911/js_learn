import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// 数据源
const state = {
  count: 1,
  date: '2019.09.20',
  money: 100
}

// 方法  同步
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  },
  makeMoney (state) {
    state.money += 1
  }
}

// 方法  异步
const actions = {
  makeMoneyAction ({commit}) {
    setTimeout(() => {
      commit('makeMoney')
    },2000)
    console.log('挣嘛钱呢！')
  }
}

// 计算
const getters = {
  count: function(state) {
    return state.count += 100
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})