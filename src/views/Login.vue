<template>
  <div
    class=" overscroll-y-hidden bg-gradient-to-r from-white via-gray-50 to-white h-screen w-full flex justify-center items-center"
  >
  <form
      class="shadow-2xl flex justify-center w-1/3 bg-white rounded-lg border border-gray-300"
      style="height:450px"
      @submit.prevent="enterIt"
    >
      <div class="w-11/12">
      <div class="shadow bg-yellow-500 bg-opacity-95 h-20 w-full" style="margin-top:10px" v-if="isLoggingIn">
      <!-- <h3 style="padding:15px;"  class="shadow flex justify-center bg-yellow-500 bg-opacity-75 h-20  text-white text-3xl flex-1 transform capitalize">Loged in successfully!!!</h3> -->
   <h3 style="padding:15px;"  class="shadow flex justify-center bg-yellow-500 bg-opacity-75 h-20  text-white text-xl flex-1 transform capitalize">{{flashMessage}}</h3>
  </div>
        <h1 class="text-gray-600 text-center tracking-wider text-4xl ml-2 h-16" style="margin-top:10px">
          Login
        </h1>
        <hr />
        <br />
        <div>
          <br />
          <label class="text-lg text-gray-600" for="insering an email"
            >Email</label
          >
          <input
            type="email"
            required
            v-model="login.email"
            placeholder="Enter your email"
            style="padding:20px"
            class="text-sm w-full h-8 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
            />
            <span class="text-red-500 text-sm transform capitalize" v-if="errorEmail">{{ errorEmail }}</span>
            <br />
           <br />
          <label class="text-lg text-gray-600" for="inserting an email"
            >Password</label
          >
          <input
            placeholder="Enter your password"
            style="padding:20px"
            class="text-sm w-full h-8 hover:bg-blue-50 rounded border border-gray-200 focus:outline-none"
            type="password"
            required
            v-model="login.password"
            />
            <span class="text-red-500 text-sm transform capitalize" v-if="errorMessage">{{ errorMessage }}</span>
          <div class="text-red-500 text-sm transform capitalize" v-if="login.password.length > 1 && login.password.length < 6">Password should be more than 6</div>
          </div>
        <br />
        <button
          class="transition duration-700 ease-in-out ml-80 h-10 w-24 px-2 p-4 mt-0 tracking-wider text-white bg-yellow-600 rounded-lg border-gray-400 border"
          style="width:0x"
        >
          Login
        </button>
        <br />
        <a class="text-sm text-blue-600 underline" href="/forgotpassword"
          >forgot password?</a
        >
      </div>
    </form>
  </div>
</template>

<script>
import axiosLib from 'axios';
const axios = axiosLib.create({
  baseURL: "http://localhost:8000/api"
});
export default {
  components: {},
  data() {
    return {
      isLoggingIn: false,
      login: {
        email: "",
        password: "",
      },
      flash:false,
      flashMessage:'Loged in Successfully!!!',
      errorMessage:'',
      errorEmail:''
    };
  },
  // computed:{
  //   currentMessage:{
  //     get(){
  //       return this.$store.state.users.errorMessage;
  //     }    
  //   },
  //   currentEmail:{
  //     get(){
  //       return this.$store.state.users.errorEmail;
  //     }    
  //   }
  // },
  methods: {
     enterIt() {
      axios.post('/login',
        {email:this.login.email, password:this.login.password}
        )
        .then(response => {
          console.log(response);
            let token = response.data.user.api_token;
            let user= response.data.user;
            localStorage.setItem('token',token);
            localStorage.setItem('user',JSON.stringify(user));
            this.$router.push('/dashboard');
            //window.location.replace('/dashboard');
        }).catch(e=>{
              if(e.response.status == 422){
                this.errorMessage= e.response.data.message;
              } else if(e.response.status == 404){
                this.errorEmail = e.response.data;
              }
                
          //console.log(e);
        });
      //  this.$store.dispatch("users/enter", this.login)
      // .then(()=>{  
      //         this.isLoggingIn = true;
              
      //   });
    
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.backG {
  /* background: url("/mike.jpg"); */
  background-image: linear-gradient(
      to bottom,
      rgba(29, 30, 31, 0.52),
      rgba(39, 38, 39, 0.73)
    ),
    url("/mike.jpg");
}
.box-shadow-hover:hover {
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
}
</style>
