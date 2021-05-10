<template>
  <div
    class="z-10 cursor-pointer fixed inset-x-0 w-full h-8 bg-yellow-600 bg-opacity-95 flex justify-between"
  
  >
    <div class="flex">
      <p class="inline-block">
        <router-link to="/dashboard">
          <svg
            class="h-8 py-1 w-12 ml-5 hover:bg-white hover:bg-opacity-30"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            /></svg
        ></router-link>
        <!-- <slot name="home"></slot> -->
        </p>
        <!-- <div v-if="currentRole">
        <div v-if="currentRole.user[0]">-->
          <!-- <div v-if="Object.keys(currentRole).length !== 0 && currentRole !== undefined">  -->
      <!-- <div class="inline-block ml-1" v-if="currentRole[0].pivot.role_id == 1"> -->
         <router-link to="/Adminregister"><h1 class="text-sm xl:mt-0 xl:p-1 h-8 text-white hover:bg-white hover:bg-opacity-30">Add Admin</h1>
      </router-link> 
      <!-- </div> -->
      <!-- </div> -->
      <div><slot></slot></div>
      </div>
    <div class="">
      <profile></profile>
    </div>
  </div>
</template>

<script>
import profile from "@/views/profile";
// import axiosLib from 'axios';
// const axios = axiosLib.create({
//   baseURL: "http://localhost:8000/api"
// });
export default {
 data: () => ({
  roles:[]
  }),
  components: {
    profile,
  },
  created(){
    this.$store.dispatch("users/currrentUserRole");
   console.log(this.currentRole)
  },
  
  computed:{
    //   showHeader(){"/usersroles/"+token+"?api_token="+token
    //    return this.$route.name !== 'logreg' && this.$route.name !==  'login' && this.$route.name !==  'register';
    //  },
     currentRole: {
      get() {
        return this.$store.state.users.role;
      },
    },
  },
};
</script>

