<template>
  <div class="flex">
    <!-- <div class="profile"> -->
    <button class="ml-64" style="left:0px;">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        @click.prevent="showModal"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </button>

    <div
      v-if="isShow"
      class="z-10 absolute bg-gray-100 h-64 mb-0 p-0 overflow-hidden shadow-xl transform transition-all"
      style="margin-left:370px; width:650px; top:10px; height:460px"
      role="dialog"
      aria-modal="false"
      aria-labelledby="modal-headline"
    >
      <div class="text-gray-700 ml-64 tracking-wider transform capitalize p-1">
        Your comments
      </div>
      <hr />
      <div class="flex gap-2">
    <!-- <div class=" > -->
     <div class="scr  bg-gray-100  ml-4" style="width:300px">
      <ul class="">
          <li class="p-3 text-gray-500 text-sm bg-white mb-1" style="width:300px"  v-for="(find,index) in finds" :key="index">
         {{find.email}}
             </li>
          </ul>
    </div>
      <!-- </div> -->
      <div>
        <div class=" bg-green-600" style="width:320px;">
          <textarea
            style="padding:20px;"
            class="h-40 w-80"
            name="commentinput"
            id=""
            cols="30"
            rows="10"
            placeholder="write your comment"
          ></textarea>
        </div>
        <div class="ml-5">
          <p class="text-gray-700 transform capitalize">comments</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axiosLib from "axios";
// const axios = axiosLib.create({
//   baseURL: "https://zowidiscussionapi.herokuapp.com/api"
// });
// const axios = axiosLib.create({
//   baseURL: "http://localhost:8000/api",
// });
export default {
  //props:["user"],
  data: () => {
    return {
      //user:'',
      isShow: false,
      isLoggingOut: false,
      finds:[
             {email:"jactekdj"},
             {email:"fjadklsd"},
             {email:"thoreurd"},
             {email:"jactekdj"},
             {email:"fjadklsd"},
             {email:"thoreurd"},
             {email:"jactekdj"},
             {email:"fjadklsd"},
             {email:"thoreurd"},
             {email:"jactekdj"},
             {email:"fjadklsd"},
             {email:"thoreurd"},
             {email:"funboddy"},
             {email:"funboddy"},
             {email:"funboddy"},
             {email:"funboddy"},
             {email:"funboddy"},
             {email:"funboddy"},
             {email:"funboddy"},
             {email:"funboddy"},
      ]
    };
  },
  methods: {
    showModal: function() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
<style>
/* .scroll {
    width: 300px;
    height: 50px;
    overflow: scroll;
} */
@media (max-width: 1536px) {
  .scr {
    width: 250px;
    height: 500px; 
    overflow: scroll;
    
}
    /* background: chartreuse; */
    /* overflow: scroll;
         */

  ::-webkit-scrollbar {
    background: transparent;
    width: 18px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #305a27);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #4d9c02);
  }
  ::-webkit-scrollbar-corner {
    border-radius: 20px;
    background: lightgray;
  }
}
</style>
