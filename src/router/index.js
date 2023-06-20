import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login.vue'
import UserView from '../views/User.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: UserView
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/excel',
    name: 'excel',
    component: () => import('../views/ExcelView.vue')
  },
  {
    path: '/excel/:id',
    name: 'studentInfo',
    component: () => import('../views/StudentInfo.vue'),
    props:true
  },
  {
    path: '/student',
    redirect:'/students'
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
