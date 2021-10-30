import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Slider from '../components/Slider'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videos',
    component: Slider
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
