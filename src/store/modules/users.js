import axiosLib from "axios";
const state = {
     user:{},
     role:{},
     login:{},
     invites: {},
     register: {},
};
const getters = {};
const axios = axiosLib.create({
  baseURL: "http://localhost:8000/api"
})
const actions = {
    CurrentUserData({commit}){
        let token = localStorage.getItem('token');
        axios.get("/users/"+token+"?api_token="+token)
          .then(response => {
              commit('setUser',response.data.user);
            //console.log(response);
            //this.user = response.data.user;
          });
        },
    currrentUserRole({commit}){
        let token = localStorage.getItem("token");
        axios.get("/usersroles/"+token+"?api_token="+token)
        .then(response => {
          commit('setRole',response.data.user);
     })
},
    enter({commit,dispatch},login ){
        console.log(commit);
        console.log(dispatch);
        axios.post('/login',
        {email:login.email, password:login.password}
        )
        .then(response => {
          console.log(response);

            let token = response.data.user.api_token;
            let user= response.data.user;
            localStorage.setItem('token',token);
            localStorage.setItem('user',JSON.stringify(user));
            window.location.replace('/dashboard');
        })
        .catch(error => {
          console.log(error);
          //console.log(response);
        })
      },
      resetcode({commit,dispatch},resetEmail) {
        console.log(commit);
        console.log(dispatch);
        axios
          .post("/reset-password-request", {
            email: resetEmail,
           })
          .then((response) => {
            console.log(response);
            //this.resetEmail = "";
            //this.isReseted = true;
            window.location.replace('/resetpassword');
          });
      },
      createList({commit,dispatch},listName,boardId) {
        let token = localStorage.getItem("token");
        console.log(commit);
        console.log(dispatch);
        axios
          .post(
            "http://localhost:8000/api/boards/" +
              boardId +
              "/list?api_token=" +
              token,
            {
              name: listName,
            }
          )
          .then((response) => {
            console.log(response);
            let newList = response.data.list;
            this.lists.push(newList);
            this.listName = "";
           
          });
      },
      resetpassword({commit,dispatch},reset) {
        console.log(commit);
        console.log(dispatch);
        axios
          .post("/reset-password/", {
            email: reset.email,
            verification_code: reset.verCode,
            password: reset.password,
            confirm_password: reset.conpassword,
          })
          .then((e) => {
            console.log(e);
            // this.reset = "";
            // this.isReset = true;
            window.location.replace('/');
          });
      }

};

const mutations={
    setUser( state, data ){
        state.user = data;
    },
    setRole( state, data ){
        state.role = data;
    },
};
export default{
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}