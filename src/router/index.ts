import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home-page.vue'

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
    name: 'Information',
    component: () => import(/* webpackChunkName: "Information" */ '../views/info-page.vue')
  },
  {
    path: '/base/project',
    name: 'Project',
    component: () => import(/* webpackChunkName: "Project" */ '../views/project-page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
