import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '@/falcons/Admin.vue'
import User from '@/falcons/User.vue'
import login from '@/falcons/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'User',
    component: User
  },

  {
  path: '/admin',
  name: 'admin',
  component: Admin
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
