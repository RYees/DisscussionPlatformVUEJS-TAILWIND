<<<<<<< HEAD
import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import admin from './modules/admin'
import boards from './modules/boards'

Vue.use(Vuex)

//const conv = JSON.parse(localStorage.getItem('con')) || defaultBoard
=======
import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/users";
import admin from "./modules/admin";
import boards from "./modules/boards";
import cards from "./modules/cards";
import axiosLib from "axios";
const axios = axiosLib.create({
  baseURL: "https://zowidiscussionapi.herokuapp.com/api",
});
// const axios = axiosLib.create({
//   baseURL: "http://localhost:8000/api",
// });
Vue.use(Vuex);
>>>>>>> 7e2e0053daf9303c148757deb42831357b751a08
export default new Vuex.Store({
  modules: {
    users,
    admin,
<<<<<<< HEAD
    boards
  },
  state: {
  
      },
  mutations: {
  
 },
  actions: {
  
  },
   getters:{
   
    }
})
=======
    boards,
    cards,
  },
  state: {
    role: {},
  },
  mutations: {
    setRole: (state, data) => (state.role = data),
  },
  actions: {
    async currrentUserRole({ commit }) {
      let token = localStorage.getItem("token");
      const response = await axios.get(
        "/usersroles/" + token + "?api_token=" + token
      );
      commit("setRole", response.data.user);
    },
  },
  getters: {
    allRoles: (state) => {
      return state.role;
    },
  },
});
>>>>>>> 7e2e0053daf9303c148757deb42831357b751a08
