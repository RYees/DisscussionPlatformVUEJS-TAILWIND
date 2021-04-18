<template> 
<div  class="backG bg-gradient-to-r from-white via-gray-900 to-white h-screen w-full flex justify-center items-center">
      

         <div class="box shadow-2xl mt-60 flex justify-center h-80 w-1/3 rounded-lg border border-gray-300">
            <div class="w-11/12">
             <h1 class="text-white text-center text-3xl ml-2 mb-5 ">Login</h1><br>
            <div class="ml-10">
            <!-- <label class="block ml-10 mt-10 text-xl text-gray-600">Email:</label> -->
            <br>
            <input type="email" v-model="login.email" placeholder="Enter your email" class="text-xl w-full h-12 ml-10 rounded border border-gray-100 focus:outline-none"   required /><br>
            <!-- <label class="block mt-10 ml-10 text-xl text-gray-600">Password:</label> -->
            <br><hr>
            <input v-model="login.password" placeholder="Enter your password" class=" text-xl w-full h-12 ml-10 rounded border border-gray-100 focus:outline-none" type="password"  required /><br>
            </div><br>
                <button class="ml-40 h-12 w-24 px-4 p-4 mt-10 text-white bg-blue-900 rounded-lg border-gray-400 border"  @click="enter" >Login</button>
      
        </div>
        
</div>
</div>
</template>

<script>
import axios from "axios";
export default {
    components: {
        
    },
    data () {
        return {
          isLoggingIn:false,
          login:{
              email:"",
              password:""
          }
        }
    },
    methods: {
        enter(){
                axios.post('http://localhost:8000/api/login',this.login)
                .then(response => {
                    let token = response.data.user.api_token;
                    window.token=token;
                    let user= response.data.user;
                    localStorage.setItem('token',token);
                    localStorage.setItem('user',JSON.stringify(user));
                    Event.$emit('login',user);
                    this.$router.push('/dashboard');
                   // console.log(user.pivot);
                });
              },
          
    }
}
</script>
 

 <style scoped>
 *{
     padding: 0;
     margin: 0;
 }
 .backG{
     /* background: url("/mike.jpg"); */
     background-image:
    linear-gradient(to bottom, rgba(29, 30, 31, 0.52), rgba(39, 38, 39, 0.73)),
    url('/mike.jpg');
 }
 .box-shadow-hover:hover {
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.50));
 }
 </style>
