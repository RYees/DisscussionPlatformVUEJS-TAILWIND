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
     
    <form @submit.prevent="createBoard"
      v-if="isShow" 
      class="flex justify-center ml-20 mr-10 sm:ml-5 sm:w-96 lg:mr-64 xl:mr-80 z-40 bg-white bg-opacity-95 absolute border border-yellow-200 rounded-lg h-40 sm:h-56 w-2/3 mt-56 sm:mt-72 p-6 overflow-hidden shadow-xl transform transition-all"
 
      role="dialog"
      aria-modal="false"
      aria-labelledby="modal-headline"
    >
  <div>
      <input
        type="text"
        class="w-48 hover:bg-white hover:bg-opacity-30 hover:text-dark text-sm sm:w-80 rounded-lg px-4 h-12 border border-indgo-300 focus:outline-none"
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
      </div>
    </form>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
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
    ...mapActions(["createB"]),
    showModal: function() {
      this.isShow = !this.isShow;
    },
     createBoard() {
       this.createB(this.newProject);
       this.newProject = '';
         
      },
   },
  
};
</script>
