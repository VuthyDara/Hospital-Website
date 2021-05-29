import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import message from '../views/Message-page.vue'
import doctor from '../views/Doctor.vue'
import doctorAd from '../views/DoctorAdmin.vue'
import patient from '../views/Patient-stories.vue'
import patient1 from '../views/Patient-story.vue'

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
  },
  {
    path: '/doctorAdmin',
    name: 'doctorAd',
    component: doctorAd
  },
  {
    path: '/patient-story',
    name: 'patients',
    component: patient
  },
  {
    path: '/patient1',
    name: 'patient1',
    component: patient1
  },
  // {
  //   path: '/patient2',
  //   name: 'patient2',
  //   component: patient1
  // },
  // {
  //   path: '/patient3',
  //   name: 'patient3',
  //   component: patient1
  // },
  // {
  //   path: '/patient4',
  //   name: 'patient4',
  //   component: patient1
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
