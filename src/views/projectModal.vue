<template>
  <div class="flex justify-center items-center ">
    <div class="" style="">
      <button
        class="tracking-wider px-5 transform hover:scale-110 border border-white p-2 cursor-pointer rounded  text-white text-3xl mt-20"
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
     
    <div
      v-if="isShow"
      class="flex justify-center z-40 bg-white bg-opacity-95 absolute border border-gray-600 rounded-lg h-40 p-6 overflow-hidden shadow-xl transform transition-all"
      style="top:300px; height:305px; right:760px;"
      role="dialog"
      aria-modal="false"
      aria-labelledby="modal-headline"
    >
  <form action=""  @submit.prevent="createProject">
      <input
        type="text"
        class="w-80 hover:bg-white hover:bg-opacity-30 hover:text-dark rounded-lg px-4 h-14 border border-indgo-300 focus:outline-none"
        name=""
        id=""
        placeholder="Project Name"
        v-model="newProject"
        required
      />
      
      <div class="inline-block">
        <button 
          class=" hover:bg-green-700 hover:text-6xl px-2 w-32 ml-4 h-11 mt-16 transform hover:scale-110 tracking-wider focus:outline-none rounded-lg text-white bg-blue-500"
           
        >
          Create Project
        </button>
        </div> 
        <div class=" mt-24 ml-3 absolute">  
    <button class="  focus:outline-none" @click.prevent="showModal">
                  <svg
                    class="h-10 w-10 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="red"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
    </div>
      </form>
    </div>
    <!-- </div>  -->

  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  data: () => {
    return {
      newProject:'',
      isShow: false,
    };
  },
  computed: mapState([
      'projects'
      ]),
   methods: {
    ...mapMutations([
        'ADD_PROJECT'
        ]),
    showModal: function() {
      this.isShow = !this.isShow;
    },
    addProject: function() {
      this.ADD_PROJECT(this.newProject);
      this.newProject = '';
    },
     createProject (e, projects) {
      this.$store.commit('ADD_PROJECT', {
        projects,
        name: e.target.value
      })
      e.target.value = ''
    }
  }
  };
</script>
