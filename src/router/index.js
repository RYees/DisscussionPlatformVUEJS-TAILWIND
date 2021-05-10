import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import singleDash from "../views/singleDash.vue";
import AdminRegister from "../views/AdminRegister.vue";
import LogReg from "../views/LogReg.vue";
import profileUpdate from "@/views/profileUpdate";
import ForgotPassword from "@/views/ForgotPassword";
import ResetPassword from "@/views/ResetPassword";
import Login from "@/views/Login";
import Register from "@/views/Registration";
import Layout from "../layouts/main";
Vue.use(VueRouter);

const routes = [
  { 
    path: "/", 
    name: "logreg", 
    component: LogReg 
  },
  { 
    path: "/login", 
    name: "login", 
    component: Login 
  },
  { 
    path: "/register", 
    name: "register", 
    component: Register 
  },
  {
    path:'',
    component:Layout,
    children: [
      { 
        path: "/AdminRegister", 
        name: "AdminRegister", 
        component: AdminRegister,
        //meta: { requireAuth: true }
      },
      { 
        path: "/profileUpdate", 
        name: "profileUpdate", 
        component: profileUpdate,
        meta: { requireAuth: true }
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { requireAuth: true }
      },
      {
        path: "/dashboard/:id",
        name: "singleDash",
        component: singleDash,
        meta: { requireAuth: true }
      },
      
    ]
  },
  {
    path: "/forgotpassword",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  { 
    path: "/resetpassword", 
    name: "ResetPassword", 
    component: ResetPassword },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (!localStorage.getItem("token")) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
