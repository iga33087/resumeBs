import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartList:[]
  },
  mutations: {
    chartList(state,data) {
      state.chartList=data
    }
  },
  actions: {
    chartList({ commit },data) {
      commit('chartList',data)
    }
  },
  modules: {
  }
})
