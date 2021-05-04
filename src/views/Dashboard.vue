<template>
<!-- <layout title="my dashboard"> -->
  <div
    class="bg-gray-100 bg-opacity-30 h-screen w-full flex items-center justify-center"
  >
    <div
      class="back flex justify-evenly flex-wrap"
      style="width:2100px; margin-bottom:640px; height:200px"
    >
      <div class="p-3 2xl:mt-14 h-10">
        <p
          class="animate-pulse sm:text-3xl md:ml-20 sm:ml-52 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl uppercase mb-96 text-white rounded tracking-wider"
        >
          dashboard
        </p>
        <br />
      </div>
      <br />
      <div class="mr-96 2xl:mt-10" style="" v-if="currentRole[0].pivot.role_id == 1">
        <projectModal v-on:boardcreated="currentBoard()"></projectModal>
      </div>
      <div class="flex" style="">
        <div class="2xl:mt-10">
          <input
            v-if="isSearch"
            class="h-12 w-96 border border-yellow-300 focus:outline-none rounded-lg mt-4 px-5"
            type="text"
            v-model="search"
            placeholder="search projects"
            style="margin-left:0px; right:300px; width:500px;"
          />
        </div>
        <div class="p-3 2xl:mt-10">
          <svg
            @click="searching"
            class="iconsearch cursor-pointer h-14 w-14 ml-0"
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
    <div
      class="scroll fixed w-11/12 bg-white bg-opacity-75 
      2xl:grid 2xl:grid-cols-4 2xl:grid-flow-row 2xl:gap-96 2xl:ml-10
      xl:grid xl:grid-cols-3 xl:grid-flow-row xl:gap-96 xl:ml-1
      lg:grid lg:grid-cols-2 lg:grid-flow-row lg:gap-96 lg:ml-1
      md:grid md:grid-cols-1 md:grid-flow-row md:gap-96 md:ml-20
      sm:grid sm:grid-cols-1 sm:grid-flow-row sm:gap-96 sm:ml-1"
      style=" margin-top:120px;"
    >
      <div
        class="mon ml-5"
        style=""
        v-for="(currentUserBoard, index) in filteredProjects"
        :key="index"
      >
        <div
          class="2xl:h-72 2xl:w-96 mt-0 leading-10 items-center rounded-t-2xl shadow-xl
           absolute hover:border-4 hover:border-gray-50 2xl:border-t-4 2xl:border-yellow-800
           sm:w-96 sm:h-96 sm:border-t-4 sm:border-yellow-800 lg:w-96 lg:h-96 lg:border-t-4 lg:border-yellow-800
           md:w-10/12 md:h-96 md:border-t-4 md:border-yellow-800  xl:w-96 xl:h-96 xl:border-t-4 xl:border-yellow-800
           "
        >
          <div>
            <!-- <div class="w-200 h-40"></div> -->
            <router-link
              :to="{ name: 'singleDash', params: { id: currentUserBoard.id } }"
            >
              <button
                class="sm:px-5 focus:outline-none mt-5 ml-4 m-auto transition duration-700 ease-in-out  transform capitalize font-semibold hover:scale-110 cursor-pointer sm:w-96 sm:border 2xl:w-96 h-64 
                2xl:border-b 2xl:border-l 2xl:border-r 2xl:rounded-xl
                sm:border-b sm:border-l sm:border-r sm:rounded-xl
                md:w-11/12 lg:w-96 xl:w-96 bg-yellow-300 bg-opacity-75
                hover:bg-white hover:bg-opacity-95 
                hover:text-gray-500 text-gray-750 text-3xl mb-10 lighten-2 absolute"
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
  </div>
 
<!-- </layout> -->
</template>

<script>
import boardMixin from "@/mixins/boardMixin";
//import Layout from "../layouts/main";
import { searchName } from "@/mixins/mixin.js";
import projectModal from "@/views/projectModal";
export default {
  data: () => ({
    search: "",
    isSearch: false,
  }),
  computed: {
    currentRole: {
      get() {
        return this.$store.state.users.role;
      },
    },
  },
  created() {
    this.$store.dispatch("users/currrentUserRole");
   },
  methods: {
    searching: function() {
      this.isSearch = !this.isSearch;
    },
  },
  components: {
    projectModal,
    //Layout
  },
  mixins: [boardMixin, searchName],
};
</script>

<style scoped>
/*   */
.scroll {
  width: 1950px;
  height: 690px;
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
.back {
  /* background: url("/mike.jpg"); */
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
    width: 1500px;
    height: 690px;
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
@media (max-width: 1280px) {
  .scroll {
    width: 1000px;
    height: 690px;
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
@media (max-width: 1024px) {
  .scroll {
    width: 700px;
    height: 600px;
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
@media (max-width: 768px) {
  .scroll {
    width: 500px;
    height: 600px;
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
    width: 200px;
    height: 600px;
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
</style>
