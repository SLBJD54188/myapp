import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login1',
    name: 'login1',
    component: () => import('../views/login1.vue')
  }, {
    path: '/',
    redirect: "/login1"
  }
]

const router = new VueRouter({
  routes
})

export default router
