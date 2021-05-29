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
export default new Vuex.Store({
  modules: {
    users,
    admin,
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
