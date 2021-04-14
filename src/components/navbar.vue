<template>
  <div
    class="z-10 cursor-pointer fixed inset-x-0 w-full bg-gray-50 bg-opacity-75 flex justify-between"
    v-if="showHeader"
  >
    <div class="flex">
      <p class="inline-block">
        <router-link to="/dashboard">
          <svg
            class="h-12 py-1 w-12 ml-5"
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
      </p>
      <p class="inline-block ml-2">
        <router-link to="/BO">
          <svg
            class="h-12 py-1 w-12 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            /></svg
        ></router-link>
      </p>
        <!-- <div
          v-for="(project,index) in projects" :key="index"
          class="inline-block ml-96 animate-bounce text-xl tracking-wider mt-1 absolute mb-5"
          style="margin-bottom:1000px"
        >
          {{ project }}
        </div> -->
    </div>
    <div class="">
      <profile :user="user"></profile>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
import profile from "@/views/profile";
export default {
  props:["user"],
  data: () => {
    return {user:null};
  },
  components: {
    profile,
  },
  computed:{
      showHeader(){
      return this.$route.name !== 'logreg';
    },
 // computed: mapState(["projects"]),
  }
};
</script>

