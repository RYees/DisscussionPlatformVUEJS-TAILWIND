import axios from "axios";
const state = {
     boards:{},
     invites: {},
     user: {},
};
const getters = {};
const actions = {
    Adminregister({commit,dispatch},register) {
        console.log(commit);
        console.log(dispatch);
        //console.log(register);
        axios
          .post("http://localhost:8000/api/Adminregister/", {
            username: register.username,
            password: register.password,
            email: register.email,
            
      })
          .then((response) => {
            let token = response.data.user.api_token;
            localStorage.setItem("token", token);
            console.log(response);
            register="";
            window.location.replace('/');
          });
    },

    getBoardData({commit}) {
      let token = localStorage.getItem("token");
      axios
        .get("http://localhost:8000/api/boards/?api_token=" + token)
        .then((response) => {
          console.log(response);
          commit('setBoard',response.data.boards);
          //Event.$emit('boardsLoaded',this.boards);
        });
    },
};

const mutations={
  setBoard( state, data ){
    state.boards = data;
}
};
export default{
    namespaced:true,
    state, 
    getters,
    actions,
    mutations,
    
   
}