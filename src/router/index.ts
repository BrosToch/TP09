import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/components/Login_page.vue'
import Register from '@/views/Register.vue'
const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      component: Login
    },
    {
      path:'/register',
      component: Register
    }
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
