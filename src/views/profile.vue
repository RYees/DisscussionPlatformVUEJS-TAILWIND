<template>
  <div class="flex justify-end">
    <div class="profile">
    <button
      class="h-11 w-11 mr-1 p-1 px-1 text-xl tracking-wider bg-white focus:outline-none "
      style="border-radius:50%;"
      @click.prevent="showModal"
    >
      RY
    </button>
</div>
    <div
      v-if="isShow"
      class="z-40 absolute bg-white h-64 mb-80 p-0 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full"
      style="margin-left:576px; top:49px"
      role="dialog"
      aria-modal="false"
      aria-labelledby="modal-headline"
    >
      <h1 class="ml-40 py-2 text-lg tracking-wider">
        Account
        <button class="focus:outline-none" @click.prevent="showModal">
        <svg
          class="h-5 w-5 inline-block ml-28 "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        </button>
      </h1>
      <hr />
      <div class="p-1">
        <p
          class="inline-block h-9 w-10  p-1 px-2 text-xl tracking-wider bg-blue-100"
          style="border-radius:50%;"
        >
          RY
        </p>
        <!-- <div v-for="user in user" :key="user"> -->
        <p class="p-3 inline-block ml-5 text-lg">
          {{user.username}}
          <small class="ml-1 text-gray-500 leading-tight">{{user.email}}</small
          ><br />
        </p>
        <!-- </div> -->
        <hr />
        <p class="p-5 text-lg tracking-wider">Help</p>
        <hr />
        <button class="p-5 text-lg tracking-wider cursor-pointer focus:outline-none" v-if="!isLoggingOut" v-on:click="logout">Logout</button>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props:["user"],
  data: () => {
    return {
      //user:'',
      isShow: false,
      isLoggingOut:false
    };
  },
  // created(){
  //     this.user=this.users;
  // },
  methods: {
    showModal: function() {
      this.isShow = !this.isShow;
    },
    logout(){
      let token = localStorage.getItem('token');
      if(!token){
          return false;
      }
      // if(!token){
      //     this.$router.push({name:'logreg'});
      // }
      axios.get("http://127.0.0.1:8000/api/logout?api_token="+token)
      .then(response => {
        console.log(response);
        localStorage.removeItem('token');
        this.$router.push({name:'logreg'});
      });
    },
  //  created(){
  //     let token = localStorage.getItem('token');
  //   axios.get("http://localhost:8000/users/"+token+"?api_token="+token)
  //     .then(response => {
  //       console.log(response);
  //       this.user = response.data.user;
  //     });
  // }
},
}
</script>
<style>
@media (max-width: 2100px){
.profile{
  
  margin-left:920px;
}
.mod{
  margin-left:610px;
}
}
@media (max-width: 1900px){
 .profile{
  
  margin-left:830px;
}
.mod{
  margin-left:510px;
}
}
@media (max-width: 1600px){
 .profile{
  
  margin-left:680px;
}
.mod{
  margin-left:345px;
}
}
@media (max-width: 1500px){
 .profile{
  
  margin-left:530px;
}
.mod{
  margin-left:200px;
}
}
@media (max-width: 1800px){
 .profile{
  
  margin-left:760px;
}
.mod{
  margin-left:437px;
}
}
@media (max-width: 1700px){
 .profile{
  
  margin-left:710px;
}
.mod{
  margin-left:377px;
}
}
@media (max-width: 1550px){
 .profile{
  
  margin-left:650px;
}
.mod{
  margin-left:330px;
}
}
@media (max-width: 1000px){
.profile{
  margin-left:380px;
}
.mod{
  margin-left:42px;
}
}
@media (max-width: 900px){
.profile{
  margin-left:270px;
}
.mod{
  margin-left:0px;
}
}
</style>