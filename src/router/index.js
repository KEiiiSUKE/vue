import Vue from 'vue'
import VueRouter from 'vue-router'
import profile from '@/components/Profile.vue'
import activities from '@/components/Activities.vue'
import skill from '@/components/Skill.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'profile',
    component: profile
  },
  {
    path: '/activities',
    name: 'activities',
    component: activities
  },
  {
    path: '/skill',
    name: 'skill',
    component: skill
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
