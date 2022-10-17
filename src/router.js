
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Theater from'./components/Theater.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
        path: '/theater',
        component: Theater,
      }
  ]
})