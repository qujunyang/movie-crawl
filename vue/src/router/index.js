import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: 'home',
        name: 'HomeView',
        component:()=>import("@/views/HomeView"),
      }
    ]
  },{
    path: '/login',
    name: 'Login',
    component: ()=>import("@/views/Login")
  },
  {
    path: '/film',
    name: 'Film',
    component: ()=>import("@/views/Film")
  },
  {
    path: '/register',
    name: 'Register',
    component: ()=>import("@/views/Register")
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


