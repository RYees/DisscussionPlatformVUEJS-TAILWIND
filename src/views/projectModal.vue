<template>
  <div class="flex justify-center items-center">
    <div class="" style="">
      <button
        class="tracking-wider transform hover:scale-110 border border-white p-1 cursor-pointer rounded text-white text-3xl mt-5"
        style=""
        @click.prevent="showModal"
      >
        <svg
          class="h-6 w-10  inline-block"
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
      class="flex justify-center sm:ml-96 z-40 bg-white bg-opacity-95 absolute border border-gray-600 rounded-lg h-60 mt-96 p-6 overflow-hidden shadow-xl transform transition-all"
      role="dialog"
      aria-modal="false"
      aria-labelledby="modal-headline"
    >
  <div>
      <input
        type="text"
        class="w-80 hover:bg-white hover:bg-opacity-30 hover:text-dark rounded-lg px-4 h-14 border border-indgo-300 focus:outline-none"
        name=""
        id=""
        placeholder="Project Name"
        v-model="newProject"
        required
      />
      
      <span class="inline-block">
        <button type="submit" class="sm:ml-12 hover:bg-green-700 hover:text-6xl px-2 w-32 ml-4 h-11 mt-16 transform hover:scale-110 tracking-wider focus:outline-none rounded-lg text-white bg-blue-500"
           
        >
          Create Project
        </button>
      </span> 
        <div class="sm:mt-4 mt-14 absolute">  
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
    </div>
      </div>
    </form>
    <!-- </div>  -->

  </div>
</template>
<script>
//import boardMixin from '@/mixins/boardMixin';
import axios from 'axios';
//import { mapMutations, mapState } from "vuex";
export default {
  props:["user"],
  data: () => {
    return {
      newProject:'',
      // boards:[],
      isShow: false,
      usersss:null
    };
  },
   created(){
    let token = localStorage.getItem("token");
    axios.get("http://localhost:8000/api/users/"+token+"?api_token="+token)
    .then(response => {
     // console.log(response);
      this.usersss = response.data.user;
      console.log(this.usersss);
    });
  },
   methods: {
    showModal: function() {
      this.isShow = !this.isShow;
    },
     createBoard() {
      let token = localStorage.getItem("token");
         axios.post("http://localhost:8000/api/boards/"+this.usersss.id +"?api_token=" + token,
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
        })
      },
   
},
  
};
</script>
