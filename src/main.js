import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios
import axios from '@/ulit/requrse'
Vue.prototype.$axios = axios
// element 

import './ulit/element.js'


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
