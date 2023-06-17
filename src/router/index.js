import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientPage from '@/views/ClientPage.vue'
import LoginPage from '@/views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/client',
    name: 'Profile',
    component: ClientPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  }
]

const router = new VueRouter({
  routes
})

export default router
