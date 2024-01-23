import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/base'
  },
  {
    path: '/base',
    name: 'Home',
    component: Home
  },
  {
    path: '/base/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/base/project',
    name: 'Project',
    component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue')
  }
]

const router = createRouter({
  base: '/base',
  history: createWebHistory(),
  routes
})

export default router
