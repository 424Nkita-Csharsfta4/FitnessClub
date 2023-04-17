import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../components/Hero.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hero
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('../views/Forms/SignIn.vue')
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import('../views/Forms/SignUp.vue')
    },
    {
      path: '/lesson',
      name: 'lesson',
      component: () => import('@/components/Models/Lessons.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/Download.vue')
    },
    {
      path: '/eror',
      name: 'eror',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
