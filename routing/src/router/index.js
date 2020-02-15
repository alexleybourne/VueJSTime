import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ViewProfile from '../views/ViewProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/profile/:user_id',
    name: 'ViewProfile',
    component: ViewProfile
  }
]

const router = new VueRouter({
  routes
})

export default router
