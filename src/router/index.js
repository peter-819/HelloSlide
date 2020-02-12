import Vue from 'vue'
import VueRouter from 'vue-router'
import StagePage from '../components/StagePage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StagePage',
    component: StagePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
