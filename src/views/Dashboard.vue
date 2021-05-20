<template>
  <!-- <layout title="my dashboard"> -->
  <div>
    <div
      class="back bg-opacity-30 flex justify-center items-center h-screen w-full"
    >
      <div class="flex justify-evenly flex-wrap" style="margin-top:20px;">
        <div class="p-3 h-10" style="">
          <p
            class="animate-pulse mt-5 sm:text-xl md:ml-20 sm:ml-10 md:text-xl lg:text-2xl xl:text-2xl uppercase mb-96 text-white rounded tracking-wider"
          >
            dashboard
          </p>
          <br />
        </div>
        <br />
        <div
          v-if="
            Object.keys(currentRole).length !== 0 && currentRole !== undefined
          "
        >
          <div
            class="mr-10 mt-5 sm:mr-60 xl:ml-40"
            style=""
            v-if="currentRole[0].pivot.role_id == 1"
          >
            <projectModal v-on:boardcreated="currentBoard()"></projectModal>
          </div>
        </div>
        <div
          class="flex justify-end items-end xl:ml-96 lg:ml-96 md:ml-80"
          style=""
        >
          <div
            class="inline-block mt-1 ml-1 xl:mt-1 xl:ml-96 lg:mt-2 md:mt-5 sm:ml-72 sm:mt-1"
          >
            <input
              v-if="isSearch"
              class="h-8 border text-sm border-yellow-300 focus:outline-none rounded-lg mt-1 px-5"
              type="text"
              v-model="search"
              placeholder="search projects"
              style="width:340px;"
            />
          </div>
          <div
            class="searIcon inline-block p-0 mt-1 md:mt-5 xl:mt-1 lg:mt-2 xl:ml-0"
          >
            <svg
              class="cursor-pointer h-10 w-10 ml-0"
              @click="searching"
              style=""
              title="search"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="absolute flex justify-center items-center" style=" margin-top:2950px;"> -->
    <div
      class="scroll fixed w-11/12 bg-white bg-opacity-75 
      grid grid-cols-1 grid-flow-row gap-32 ml-1
      xl:grid xl:grid-cols-4 xl:grid-flow-row xl:gap-10 xl:ml-2
      lg:grid lg:grid-cols-3 lg:grid-flow-row lg:gap-32 lg:ml-1
      md:grid md:grid-cols-2 md:grid-flow-row md:gap-32 md:ml-4
      sm:grid sm:grid-cols-1 sm:grid-flow-row sm:gap-32 sm:ml-8"
      style=""
    >
      <div
        class="mon ml-5"
        style=""
        v-for="(currentUserBoard, index) in filteredProjects"
        :key="index"
      >
        <div
          class="w-72 h-56 border-t-4 border-yellow-800
           mt-0 leading-10 items-center rounded-t-2xl shadow-xl
           hover:border-4 hover:border-gray-50 
           sm:w-96 sm:h-56 sm:border-t-4 sm:border-yellow-800 lg:w-80 lg:h-60 lg:border-t-4 lg:border-yellow-800
           md:w-10/1 md:h-60 md:border-t-4 md:border-yellow-800  xl:w-72 xl:h-48 xl:border-t-4 xl:border-yellow-800
           "
        >
          <div>
            <!-- <div class="w-200 h-40"></div> -->
            <router-link
              :to="{ name: 'singleDash', params: { id: currentUserBoard.id } }"
            >
              <button
                class="sm:px-5 px-6  w-72 focus:outline-none mt-2 ml-4 m-auto 
                transition duration-700 ease-in-out  transform capitalize 
                font-semibold hover:scale-110 cursor-pointer sm:w-96 sm:border h-44
                border-b border-l border-r rounded-xl
                sm:border-b sm:border-l sm:border-r sm:rounded-xl
                md:w-11/12 lg:w-72 xl:w-72 bg-yellow-300 bg-opacity-75
                hover:bg-white hover:bg-opacity-95 
                hover:text-gray-500 text-gray-750 text-xl mb-10 lighten-2"
              >
                <!-- <button
                  class="sm:px-5 focus:outline-none mt-10 ml-4 m-auto transform capitalize font-semibold hover:scale-110"
                > -->
                {{ currentUserBoard.name }}
                <!-- </button> -->
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>

  <!-- </layout> -->
</template>

<script>
//import boardMixin from "@/mixins/boardMixin";
//import Layout from "../layouts/main";
import axiosLib from "axios";
// const axios = axiosLib.create({
//   baseURL: "https://zowidiscussionapi.herokuapp.com/api",
// });
const axios = axiosLib.create({
  baseURL: "http://localhost:8000/api",
});
//import { searchName } from "@/mixins/mixin.js";
import projectModal from "@/views/projectModal";
export default {
  data: () => ({
    search: "",
    isSearch: false,
    boards: [],
  }),
  // async created() {
  //   let token = localStorage.getItem("token");
  //   axios.get("/boards/?api_token=" + token);
  //   let { data } = await axios.get("/boards/?api_token=" + token);
  //   this.boards = data.boards;
     created(){
        let token = localStorage.getItem("token");
      axios.get("/boards?api_token=" + token)
            .then((response) => {
              console.log(response)
              this.boards = response.data.boards;
              console.log(this.boards)});
    },
  //},
  computed: {
    currentRole: {
      get() {
        return this.$store.state.users.role;
      },
    },
    filteredProjects() {
      let normalizedQuery = this.search.trim().toLowerCase();
      if (normalizedQuery.length) {
        return this.boards.filter(({ name }) =>
          name.toLowerCase().startsWith(normalizedQuery)
        );
      }
      return this.boards;
    },
  },
   methods: {
    getBard(){
           let token = localStorage.getItem("token");
      axios.get("/boards?api_token=" + token)
            .then((response) => {
              console.log(response)
              this.boards = response.data.boards
              console.log(this.boards)});
    },
    // async getBard() {
    //   let token = localStorage.getItem("token");
    //   axios.get("/boards/?api_token=" + token);
    //   let { data } = await axios.get("/boards/?api_token=" + token);
    //   this.boards = data.boards;
    // },
    searching: function() {
      this.isSearch = !this.isSearch;
    },
    currentBoard() {
     this.getBard();
    },
  },
  components: {
    projectModal,
    //Layout
  },
  //mixins: [boardMixin,searchName],
};
</script>

<style scoped>
.back {
  height: 200px;
  background-image: linear-gradient(
      to bottom,
      rgba(29, 30, 31, 0.52),
      rgba(39, 38, 39, 0.73)
    ),
    url("/mike5.jpg");
}
/* url("/mike.jpg"); */
@media (max-width: 1536px) {
  .scroll {
    width: 1350px;
    height: 450px;
    bottom: 0px;
    top: 200px;
    overflow: scroll;
  }
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
@media (max-width: 1280px) {
  .scroll {
    width: 1040px;
    height: 415px;
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 20px;
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
@media (max-width: 1024px) {
  .scroll {
    width: 895px;
    height: 413px;
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 20px;
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
@media (max-width: 768px) {
  .scroll {
    width: 500px;
    height: 400px;
    margin-left: 110px;
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 27px;
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
@media (max-width: 640px) {
  .scroll {
    width: 400px;
    height: 400px;
    margin-left: 0px;
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 20px;
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
