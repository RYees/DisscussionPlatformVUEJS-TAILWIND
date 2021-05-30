import axiosLib from "axios";
const axios = axiosLib.create({
  baseURL: "http://localhost:8000/api",
});
// const axios = axiosLib.create({
//   baseURL: "https://zowidiscussionapi.herokuapp.com/api"
// });

const state = {
    boards: [],
};

const getters = {
    allBoards: (state) => {
        return state.boards
      },
};

const actions = {
    async fetchData({ commit }) {
        let token = localStorage.getItem("token");
         const response = await axios.get("/boards?api_token=" + token);
         commit('setBoards', response.data.boards);
       },
    
  async createB({ commit }, newProject) {
    //console.log(commit);
    let token = localStorage.getItem("token");
    await axios
      .post("/boards/" + this.state.users.user.id + "?api_token=" + token, {
        name: newProject,
      }) 
      .then((response) => {
        commit("newBoard", response.data.board);
        let board_token = response.data.board.board_token;
        localStorage.setItem("board_token", board_token);
        console.log(response);
        //newProject="";
        //this.$emit("boardcreated")
    
     });
  },
}

const mutations = {
    setBoards:(state, data)=>
    (state.boards = data),
    newBoard:(state, newdata)=>
    state.boards.unshift(newdata)
};


export default {
    state,
    getters,
    actions,
    mutations
};