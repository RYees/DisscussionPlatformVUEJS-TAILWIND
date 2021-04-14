<template>
<div>
      <div class="backG bg-gradient-to-r from-white via-gray-900 to-white h-screen w-full flex justify-center items-center"> 
        <form @submit.prevent="registerIt" class="mt-60 flex justify-center ml-5 rounded-lg border h-80 w-1/3  border-gray-300 shadow-xl p-20 py-20">
            <div class="w-11/12" v-if="!submitted">
            <h1 class="block text-white text-3xl">Register</h1><br>
            <input id="username" placeholder="Enter user name" type="text" class="h-12 w-full border border-gray-300"  v-model="register.username" required />
            <br><br>
            <input id="email" placeholder="Enter email" v-model="invites.email"  class="h-12 w-full border border-gray-300" type="email" required />
            <br><br>
            <input id="password" placeholder="Enter password" class="h-12 w-full border border-gray-300" type="password" v-model="register.password" required />
            <br><br>
            <div class="flex justify-between w-20">
            <hr />
            <button class="ml-40 h-10 w-20 px-4 p-4 mt-5 text-white bg-blue-900 rounded-lg border-gray-400 border">Submit</button>
            </div>  
            
        </div>
        <div v-if="submitted">
            <h3>Thanks for Registering</h3>
        </div>
       
        </form>
      </div>
    </div>
</template>

<script>
// Imports
import axios from "axios";
export default {
        data () {
        return {
            invites: null,
            register: {},
            submitted: false,
            
        }
    },
    mounted(){
        //console.log(this.$route.fullPath);
        let path = this.$route.fullPath.split('=',2)
        let token = path[1];
        console.log(this.$route.fullPath);
        axios.get("http://localhost:8000/api/registration/"+token)
                .then(response => {
                   this.invites=response.data[0];
                    //console.log(response);
                    //console.log(this.invites);
             });
          },
    methods:{
               registerIt(){
                axios.post('http://localhost:8000/api/register', 
                {
                    username:this.register.username,
                    email:this.invites.email,
                    password:this.register.password
                })
                .then(response => {
                    let token=response.data.user.api_token;
                    localStorage.setItem('token',token);
                    console.log(response);
                    this.register.username=""
                    this.register.password=""
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
 </style>
