import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/users";
import admin from "./modules/admin";
import boards from "./modules/boards";
import axiosLib from "axios";
const axios = axiosLib.create({
  baseURL: "http://localhost:8000/api",
});
// const axios = axiosLib.create({
//   baseURL: "https://zowidiscussionapi.herokuapp.com/api"
// });
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    admin,
    boards,
  },
  state: {
    roles: [],
    user: [],
  },
  mutations: {
    setRole: (state, data) => (state.roles = data),
    setUs: (state, data) => (state.user = data),
  },
  actions: {
    async currrentUserRole({ commit }) {
      let token = localStorage.getItem("token");
      const response = await axios.get(
        "/usersroles/" + token + "?api_token=" + token
      );
      //console.log(response);
      commit("setRole", response.data.user);
    },
    async CurrentUserData({ commit }) {
      let token = localStorage.getItem("token");
      const response = await axios.get("/users/" + token, {
        headers: { Authorization: "Bearer" + token },
      });
      commit("setUs", response.data.user);
      // console.log(response);
    },
  },
  getters: {
    allRoles: (state) => {
      return state.roles;
    },
    allUsers: (state) => {
      return state.user;
    },
  },
});
