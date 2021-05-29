import axiosLib from "axios";
<<<<<<< HEAD
// const axios = axiosLib.create({
//   baseURL: "http://localhost:8000/api",
// });
const axios = axiosLib.create({
  baseURL: "https://zowidiscussionapi.herokuapp.com/api"
});

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
=======
const axios = axiosLib.create({
  baseURL: "https://zowidiscussionapi.herokuapp.com/api",
});
// const axios = axiosLib.create({
//   baseURL: "http://localhost:8000/api",
// });

const state = {
  boards: [],
  lists: [],
  //cards:[],
 };

const getters = {
  allBoards: (state) => {
    return state.boards;
  },
  allLists: (state) => {
    return state.lists;
  },

};

const actions = {
 
  async fetchData({ commit }) {
    let token = localStorage.getItem("token");
    const response = await axios.get("/boards?api_token=" + token);
    console.log(response);
    commit("setBoards", response.data.boards);
  },

  async createB({ commit }, newProject) {
    //console.log(newProject);
>>>>>>> 7e2e0053daf9303c148757deb42831357b751a08
    let token = localStorage.getItem("token");
    await axios
      .post("/boards/" + this.state.users.user.id + "?api_token=" + token, {
        name: newProject,
<<<<<<< HEAD
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
=======
      })
      .then((response) => {
        console.log(response);
        commit("newBoard", response.data.board);
        let board_token = response.data.board.board_token;
        localStorage.setItem("board_token", board_token);
      });
  },
  async fetchList({ commit }, { boardId }) {
    console.log(boardId);
    let token = localStorage.getItem("token");
    const response = await axios.get(
      "/boards/" + boardId + "/list?api_token=" + token
    );
    console.log(response);
    commit("setLists", response.data.lists.lists);
  },

  async addList({ commit }, { boardId, listName }) {
    let token = localStorage.getItem("token");
    await axios
      .post("/boards/" + boardId + "/list?api_token=" + token, {
        name: listName,
      })
      .then((response) => {
        console.log(response);
        commit("newList", response.data.list);
      });
  },

  async updList({ commit }, { boardId, updatedLists }) {
    let token = localStorage.getItem("token");
    const response = await axios.put(
      "/boards/" + boardId + "/list/" + updatedLists.id + "?api_token=" + token,
      {
        name: updatedLists.name,
      }
    );
    console.log(response);
    commit("updateList", response.data.list);
  },

  async delList({ commit }, { boardId, deleteListId }) {
    let token = localStorage.getItem("token");
    await axios.delete(
      "/boards/" + boardId + "/list/" + deleteListId + "?api_token=" + token
    );
    // .then((response) => {
    commit("deleteList", deleteListId);
    //});
  },
};

const mutations = {
  setBoards: (state, data) => (state.boards = data),
  newBoard: (state, newdata) => state.boards.unshift(newdata),
  setLists: (state, data) => (state.lists = data),
  newList: (state, newList) => state.lists.push(newList),
  updateList: (state, updatedLists) => {
    const index = state.lists.findIndex((list) => list.id === updatedLists.id);
    if (index !== -1) {
      state.lists.splice(index, 1, updatedLists);
    }
  },
  deleteList: (state, deleteListId) =>
    (state.lists = state.lists.filter((list) => list.id !== deleteListId)),
  // newCard (state, {cards,newdata}) {cards.unshift({newdata})},

  // CREATE_CARD (state, { cards, name }) {
  //   cards.push({
  //     name,
  //    })
  // },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
>>>>>>> 7e2e0053daf9303c148757deb42831357b751a08
