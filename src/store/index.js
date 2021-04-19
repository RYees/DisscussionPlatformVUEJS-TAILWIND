import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import admin from './modules/admin'
Vue.use(Vuex)
//const conv = JSON.parse(localStorage.getItem('con')) || defaultBoard
export default new Vuex.Store({
  modules: {
    users,
    admin
  },
  state: {
    emails:['youright@gmail.com'],
    //boards:[],
      },
  mutations: {
 },
  actions: {
    
  },
   getters:{
    }
})
