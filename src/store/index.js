import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'https://api.phcsaonline.co.za/api',
    userReport: []
  },
  getters: {
    getApiUrl(state){
    return state.apiUrl
    },
    getUserReport(state){
      return state.userReport
    }
  },
  mutations: {
    setUserReport(state,report){
      state.userReport.push(report)
    }
  },
  actions: {
  },
  modules: {
  }
})
