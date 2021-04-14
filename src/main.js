import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

Vue.config.productionTip = false
window.axios=axios;
window.Event = new Vue;
window.token = localStorage.getItem('token');
//window.token = localStorage.getItem('board_token');
//window.APIurl = "http://localhost:8000/api/";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
