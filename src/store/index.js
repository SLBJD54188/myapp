import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import { gitlong } from '@/http/https'
// vuex 里面需要按需引入
import { Message } from 'element-ui';
export default new Vuex.Store({
  state: {
    // 存 token
    TOKEN: ''
  },
  getters: {
  },
  mutations: {
    // 获取token值 
    gittoken(state, tok) {
      state.TOKEN = tok
      sessionStorage.setItem('TO', state.TOKEN)
    }
  },
  actions: {
    async gitlon({ commit }, obj) {
      let { data: res } = await gitlong(obj)
      console.log(res);
      if (res.meta.status != 200) return Message.error(res.meta.msg);
      Message({  message: res.meta.msg, type: 'success' });
      commit('gittoken', res.data.token)
    }
  },
  modules: {
  }
})
