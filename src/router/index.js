import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Secondary from '../views/Secondary.vue'
import TheSidebar2 from '../components/TheSidebar2.vue'
import TheNavbar from '../components/TheNavbar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/adminlte/home'
  },
  {
    path: '/dashboard/home',
    name: 'Home',
    components: {default: Home, sidebar: TheSidebar2, navbar: TheNavbar},
  },
  {
    path: '/dashboard/secondary',
    name: 'Secondary',
    components: {default: Secondary, sidebar: TheSidebar2, navbar: TheNavbar},
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/adminlte',
    name: 'AdminLTE',
    component: () => import('../views/AdminLTE.vue'),
    children: [
      {path: "home",
      component: Home
    },
    {
      path: "secondary",
      component: Secondary
    }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
