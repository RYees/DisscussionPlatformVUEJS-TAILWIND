import axios from "axios";
const state = {
     user:{},
     role:{},
     login:{},
     invites: {},
     register: {},
};
const getters = {};
const actions = {
    CurrentUserData({commit}){
        let token = localStorage.getItem('token');
        axios.get("http://localhost:8000/api/users/"+token+"?api_token="+token)
          .then(response => {
              commit('setUser',response.data.user);
            console.log(response);
            //this.user = response.data.user;
          });
        },
    currrentUserRole({commit}){
        let token = localStorage.getItem("token");
        axios.get("http://localhost:8000/api/usersroles/"+token+"?api_token="+token)
        .then(response => {
          commit('setRole',response.data.user);
          //console.log(this.roles[0].pivot.role_id);
    })
},
    enter({commit,dispatch},login ){
        console.log(commit);
        console.log(dispatch);
        axios.post('http://localhost:8000/api/login',
        {email:login.email, password:login.password}
        )
        .then(response => {
            let token = response.data.user.api_token;
            //localStorage.getItem('token');
            let user= response.data.user;
            localStorage.setItem('token',token);
            localStorage.setItem('user',JSON.stringify(user));
            //Event.$emit('login',user);
           window.location.replace('/dashboard');
           // console.log(user.pivot);
        });
      },

     
};

const mutations={
    setUser( state, data ){
        state.user = data;
    },
    setRole( state, data ){
        state.role = data;
    }

};
export default{
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}