<template>
  <div class="flex justify-center items-center">
    <div class="" style="">
      <button
        class="tracking-wider ml-2 xl:mr-72 lg:mr-60 md:mr-4 transition duration-700 ease-in-out transform hover:scale-110 bg-yellow-900 bg-opacity-70 border border-yellow-200 border-opacity-30 h-10 p-3 py-1 cursor-pointer rounded text-white text-xl mt-3"
        style=""
        @click.prevent="showModal"
      >
        <svg
          class="h-8 w-8  inline-block"
          @click.prevent="showModal"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          /></svg
        >create project
      </button>
    </div>

    <!-- <div class="flex justify-center" style=""> -->
     
    <form @submit.prevent="createBoard"
      v-if="isShow"
      class="flex justify-center ml-1 mr-10 sm:ml-5 sm:w-96 lg:mr-64 xl:mr-80 z-40 bg-white bg-opacity-95 absolute border border-yellow-200 rounded-lg h-52 w-2/3 mt-72 p-6 overflow-hidden shadow-xl transform transition-all"
 
      role="dialog"
      aria-modal="false"
      aria-labelledby="modal-headline"
    >
  <div>
      <input
        type="text"
        class="w-72 hover:bg-white hover:bg-opacity-30 hover:text-dark text-sm sm:w-80 rounded-lg px-4 h-12 border border-indgo-300 focus:outline-none"
        name=""
        id=""
        placeholder="Project Name"
        v-model="newProject"
        required
      />
      <span class="inline-block">
        <button type="submit" class="sm:ml-12 transition duration-700 ease-in-out hover:bg-green-700 hover:text-lg text-sm px-1 w-28 ml-4 h-10 mt-10 transform hover:scale-110 tracking-wider focus:outline-none rounded-lg text-white bg-yellow-500"
        
        >
          Create
        </button>
      </span> 
        <!-- <div class="sm:mt-4 mt-14 absolute">  
    <button class="focus:outline-none" @click.prevent="showModal">
                  <svg
                    class="h-10 w-10 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="dark"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
    </div> -->
      </div>
    </form>
    <!-- </div>  -->

  </div>
</template>
<script>
//import boardMixin from '@/mixins/boardMixin';
import axiosLib from "axios";
const axios = axiosLib.create({
  baseURL: "https://zowidiscussionapi.herokuapp.com/api"
});
const axios = axiosLib.create({
  baseURL: "http://localhost:8000/api",
});
//import {mapState } from "vuex";
export default {
  props:["user"],
  data: () => {
    return {
      newProject:'',
      isShow: false,
      usersss:null
    };
  },
  created(){
    this.$store.dispatch('users/CurrentUserData');
   },
  methods: {
    showModal: function() {
      this.isShow = !this.isShow;
    },
     createBoard() {
      let token = localStorage.getItem("token");
         axios.post("/boards/"+ this.$store.state.users.user.id +"?api_token=" + token,
          {
            name: this.newProject,
          }
        )
        .then((response) => {
          let board_token = response.data.board.board_token;
          localStorage.setItem('board_token',board_token);
           console.log(response);
           this.newProject = "";
         this.$emit("boardcreated"); 
        });
      //   this.$store.dispatch('admin/createBoard',this.newProject)
      //  .then(() => {
      //    this.newProject="";
      // }).catch((err)=>console.log(err))
      // .finally(()=> this.$emit("boardcreated"))
         
      },
   
},
  
};
</script>
