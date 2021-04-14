import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import singleDash from '../views/singleDash.vue'
// import Registration from '../views/Registration.vue'
import LogReg from '../views/LogReg.vue'


Vue.use(VueRouter)

const routes = [
  {   path: '/',
    name: 'logreg',
    component: LogReg
},
  {
    path: '/dashboard',
    name: 'Dashboard',
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
