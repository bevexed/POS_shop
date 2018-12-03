import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
  pageIndex:'',
  isLogin: 0
}
const mutations = {
  changeLogin(state,status){
    state.isLogin = status;
  }
}
const actions = {
  loginAction({commit}){
    commit('changeLogin',1);
  }
}
export default new Vuex.Store({
  state,
  actions,
  mutations:{
    jump:(state,res) => state.pageIndex = res.data.news.pageIndex
  }
})
