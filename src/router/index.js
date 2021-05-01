import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import message from '../views/Message.vue'
import doctor from '../views/Doctor.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/message',
    name: 'message',
    component: message
  },
  {
    path: '/doctor',
    name: 'doctor',
    component: doctor
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
