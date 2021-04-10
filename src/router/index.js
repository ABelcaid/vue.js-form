import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProInfoForm from '../views/ProInfoForm.vue'
import UserProfile from '../views/UserProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/proInfo',
    name: 'proInfo',
    component: ProInfoForm
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: UserProfile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
