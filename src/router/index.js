import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import singleDash from '../views/singleDash.vue'
import Login from '../views/Login.vue'
import Task from '../views/Task.vue'

Vue.use(VueRouter)

const routes = [
{   path: '/',
    name: 'login',
    component: Login
},
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'task/:id',
        name: 'task',
        component: Task
      }]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:Dashboard
  },
  {
    path: '/dashboard/:id',
    name: 'singleDash',
    component: singleDash,
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
