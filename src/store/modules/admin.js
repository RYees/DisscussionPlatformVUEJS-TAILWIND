import axiosLib from "axios";
const state = {
     boards:{},
     invites: {},
     user: {},
     lists:{},
     register:""
};
const getters = {
  getList (state) {
    return (id) => {
      for (const column of state.boards.columns) {
        for (const list of column.lists) {
          if (list.id === id) {
            return list
          }
        }
      }
    }
  }
};
const axios = axiosLib.create({
  baseURL: "https://zowidiscussionapi.herokuapp.com/api"
})
const actions = {
    Adminregister({commit,dispatch},register) {
        console.log(commit);
        console.log(dispatch);
        let token = localStorage.getItem("token");
        axios
          .post("/Adminregister/?api_token=" + token,
          {
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

    getBoardData({commit}) {
      let token = localStorage.getItem("token");
      axios
        .get("/boards/?api_token=" + token)
        .then((response) => {
          console.log(response);
          commit('setBoard',response.data.boards);
          //Event.$emit('boardsLoaded',this.boards);
        });
    },
    createBoard({commit,dispatch},newProject) {
      console.log(commit); console.log(dispatch);
      let token = localStorage.getItem("token");
         axios.post("/boards/"+ this.state.users.user.id +"?api_token=" + token,
          {
            name: newProject,
          }
        )
        .then((response) => {
          let board_token = response.data.board.board_token;
          localStorage.setItem('board_token',board_token);
           console.log(response);
           //newProject="";
           //this.$emit("boardcreated")
        })
      },
};

const mutations={
  setBoard( state, data ){
    state.boards = data;
},
CREATE_LIST (state, { lists, name }) {
  console.log(state);
  lists.push({
    name,
   // id: uuid(),
    //description: ''
  })
},
CREATE_COLUMN(state, { name }) {
  state.boards.lists.push({
    name,
    lists: []
  })
},
};
export default{
    namespaced:true,
    state, 
    getters,
    actions,
    mutations,
    
   
}