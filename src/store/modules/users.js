import axiosLib from "axios";
const state = {
     user:{},
     role:{},
     login:{},
     invites: {},
     register: {},
     errorMessage:{},
     errorEmail:{},
     comment:{},
     comments:{}
};
const getters = {};
const axios = axiosLib.create({
  baseURL: "https://zowidiscussionapi.herokuapp.com/api"
});
// const axios = axiosLib.create({
//   baseURL: "http://localhost:8000/api",
// });
const actions = {
    CurrentUserData({commit}){
        let token = localStorage.getItem('token');
        axios.get("/users/"+token,{headers:{'Authorization':'Bearer' + token}})
          .then(response => {
              commit('setUser',response.data.user);
           // console.log(response); console.log("yeresponse");
            //this.user = response.data.user;
          });
        },
        commentCounts({commit}){
          let token = localStorage.getItem('token');
          axios
          .get(
            "/boards/" +
              this.list.board_id +
              "/list/" +
              this.list.id +
              "/card/" +
              this.card.id +
              "/cardComment" +
              "?api_token=" +
              token
          )
            .then(response => {
                commit('setComment',response.data.comments);
                   
            });
          },
          comments({commit}){
            let token = localStorage.getItem("token");
            axios
              .get(
                "/boards/" +
                  this.list.board_id +
                  "/list/" +
                  this.list.id +
                  "/card/" +
                  this.card.id +
                  "/cardComment" +
                  "?api_token=" +
                  token
              )
              .then(response => {
                  commit('Comment',response.data.comments);
                     
              });
            },
    currrentUserRole({commit}){
        let token = localStorage.getItem("token");
        axios.get("/usersroles/"+token+"?api_token="+token)
        .then(response => {
          commit('setRole',response.data.user);
     })
},
    enter({commit,dispatch},login){
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
            this.$router.push('/dashboard');
            //window.location.replace('/dashboard');
        })
        .catch(e=>{
          if(e.response.status == 422){
            let errorMessage= e.response.data.message;
            commit('setMessage',errorMessage);
          } else if(e.response.status == 404){
            let errorEmail = e.response.data;
            commit('setEmail',errorEmail);
          }
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
            this.$router.push('/resetpassword');
            //window.location.replace('/resetpassword');
          });
      },
      createList({commit,dispatch},listName,boardId) {
        let token = localStorage.getItem("token");
        console.log(commit);
        console.log(dispatch);
        axios
          .post(
            "/boards/" +
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
          .post("/reset-password", {
            email: reset.email,
            verification_code: reset.verCode,
            password: reset.password,
            confirm_password: reset.conpassword,
          })
          .then((e) => {
            console.log(e);
            // this.reset = "";
            // this.isReset = true;
            this.$router.push('/login');
            //window.location.replace('/login');
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
    setMessage( state, data ){
      state.errorMessage = data;
    },
    setEmail( state, data ){
      state.errorEmail = data;
    },
    setComment( state, data ){
      state.comment = data;
    },
    Comment( state, data ){
      state.comments = data;
    },
};
export default{
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}