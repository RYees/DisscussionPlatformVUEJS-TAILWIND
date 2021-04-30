<template>
  <div
    class=" overscroll-y-hidden bg-gradient-to-r from-white via-gray-50 to-white h-screen w-full flex justify-center items-center"
  >
  <!-- <div class="" v-if="isLoggingIn">
      <h3 class="text-gray-700 text-6xl transform capitalize">Loged in successfully!!!</h3>
  </div> -->
    <form
      class="shadow-2xl flex justify-center w-1/3 bg-white rounded-lg border border-gray-300"
      style="height:550px"
      v-if="!isLoggingIn"
      @submit.prevent="enterIt"
    >
      <div class="w-11/12">
        <h1 class="text-gray-600 text-center tracking-wider text-5xl ml-2 h-16">
          Login
        </h1>
        <hr />
        <br />
        <div>
          <br />
          <label class="text-2xl text-gray-600" for="insering an email"
            >Email</label
          >
          <input
            type="email"
            required
            v-model="login.email"
            placeholder="Enter your email"
            style="padding:20px"
            class="text-xl w-full h-16 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
            /><br />
           <br /><br />
          <label class="text-2xl text-gray-600" for="insering an email"
            >Password</label
          >
          <input
            placeholder="Enter your password"
            style="padding:20px"
            class="text-xl w-full h-16 hover:bg-blue-50 rounded border border-gray-200 focus:outline-none"
            type="password"
            required
            v-model="login.password"
            />
          <div class="text-red-500 transform capitalize" v-if="login.password.length > 1 && login.password.length < 6">Password should be more than 6</div>
          </div>
        <br /><br />
        <button
          class="transition duration-700 ease-in-out ml-80 h-14 w-32 px-4 p-4 mt-20 text-xl tracking-wider text-white bg-yellow-600 rounded-lg border-gray-400 border"
          style="width:0x"
        >
          Login
        </button>
        <br /><br />
        <a class="text-xl text-blue-600 underline" href="/forgotpassword"
          >forgot password?</a
        >
      </div>
    </form>
  </div>
</template>

<script>
//import axios from 'axios';
export default {
  components: {},
  data() {
    return {
      isLoggingIn: false,
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    enterIt() {
      // axios.post('http://localhost:8000/api/login',
      //   {email:this.login.email, password:this.login.password}
      //   )
      //   .then(response => {
      //       let token = response.data.user.api_token;
      //       //localStorage.getItem('token');
      //       let user= response.data.user;
      //       localStorage.setItem('token',token);
      //       localStorage.setItem('user',JSON.stringify(user));
      //       //Event.$emit('login',user);
      //        this.isLoggingIn = true;
      //      window.location.replace('/dashboard');
      //      // console.log(user.pivot);
      //   });
       this.$store.dispatch("users/enter", this.login)
      .then(()=>{  
              this.isLoggingIn = true;
        });
    
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
