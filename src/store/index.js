import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import admin from './modules/admin'
import boards from './modules/boards'
import axiosLib from "axios";
// const axios = axiosLib.create({
//   baseURL: "http://localhost:8000/api",
// });
const axios = axiosLib.create({
  baseURL: "https://zowidiscussionapi.herokuapp.com/api"
});
Vue.use(Vuex)

//const conv = JSON.parse(localStorage.getItem('con')) || defaultBoard
export default new Vuex.Store({
  modules: {
    users,
    admin,
    boards
  },
  state: {
    roles:[],
      },
  mutations: {
    setRole:( state, data)=>(state.roles = data),
 },
  actions: {
    async currrentUserRole({commit}){
      let token = localStorage.getItem("token");
    const response = await axios .get("/usersroles/"+token+"?api_token="+token)
      // .then((response) => {
        console.log("it is beutiful");
        console.log(response);
        commit('setRole',response.data.user);
  //  })
},
  },
   getters:{
    allRoles: (state) => {
      return state.roles
    }
    }
})
