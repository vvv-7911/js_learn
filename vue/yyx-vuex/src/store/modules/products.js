import shop from '../../api/shop'

const state = {
  all: [
    {
      id: 1,
      title: 'iphone11',
      price: 4999
    }
  ]
}

const getters = {}

const actions = {
  // vuex 给actions的， commit mutations => state
  getAllProducts({ commit }) {
    // api
    shop.getProducts((products) => {
      console.log('前端到api，callback 回来了', products)
      commit('setProducts', products)
    })
    // mutations
  }
} 
// 可以修改state
const mutations = {
  setProducts(state, products) {
    state.all = products
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}