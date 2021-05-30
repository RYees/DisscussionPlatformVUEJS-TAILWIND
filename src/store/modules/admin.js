import axiosLib from "axios";
const state = {
  
  invites: {},
  user: {},
  lists: {},
  register: "",
};
const getters = {
 
  getList(state) {
    return (id) => {
      for (const column of state.boards.columns) {
        for (const list of column.lists) {
          if (list.id === id) {
            return list;
          }
        }
      }
    };
  },
};
// const axios = axiosLib.create({
//   baseURL: "https://zowidiscussionapi.herokuapp.com/api"
// });
const axios = axiosLib.create({
  baseURL: "http://localhost:8000/api",
});
const actions = {
  Adminregister({ commit, dispatch }, register) {
    console.log(commit);
    console.log(dispatch);
    let token = localStorage.getItem("token");
    axios
      .post("/Adminregister?api_token=" + token, {
        name: register.fullname,
        password: register.password,
        email: register.email,
      })
      .then((response) => {
        response.data.user.api_token;
        //localStorage.setItem("token", token);
        console.log(response);
      });
  },


};

const mutations = {
 
  //},
  newBoard(state, data) {
    state.boards = data;
  },
  // CREATE_LIST (state, { lists, name }) {
  //   console.log(state);
  //   lists.push({
  //     name,
  //    // id: uuid(),
  //     //description: ''
  //   })
  // },
  // CREATE_COLUMN(state, { name }) {
  //   state.boards.lists.push({
  //     name,
  //     lists: []
  //   })
  // },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
