import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/post',
    name: 'post',

    component: () => import('../views/PostView.vue')
  },
  {
    path: '/activity',
    name: 'activity',

    component: () => import('../views/ActivityView.vue')
  },
  {
    path: '/bookmark',
    name: 'bookmark',

    component: () => import('../views/BookmarkView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
