import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import singleDash from "../views/singleDash.vue";
import AdminRegister from "../views/AdminRegister.vue";
import LogReg from "../views/LogReg.vue";
import profileUpdate from "@/views/profileUpdate";
import ForgotPassword from "@/views/ForgotPassword";
import ResetPassword from "@/views/ResetPassword";

Vue.use(VueRouter);

const routes = [
  { 
    path: "/", 
    name: "logreg", 
    component: LogReg 
  },
  { 
    path: "/AdminRegister", 
    name: "AdminRegister", 
    component: AdminRegister },
  { 
    path: "/profileUpdate", 
    name: "profileUpdate", 
    component: profileUpdate 
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
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboard/:id",
    name: "singleDash",
    component: singleDash,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
