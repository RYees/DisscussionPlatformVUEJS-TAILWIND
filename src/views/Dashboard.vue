<template>
  <div class="back h-screen w-full flex items-center justify-center">
    <!-- <div class="" style="margin-bottom:937px">
          <Header />
      </div> -->
    <div
      class="flex justify-evenly flex-wrap"
      style="width:2000px; margin-bottom:600px; height:200px"
    >
      <div class="p-3 h-10">
        <p
          class="animate-pulse sm:text-3xl md:ml-20 sm:ml-52 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl uppercase  mb-96 text-white rounded tracking-wider"
        >
          dashboard
        </p>
        <br />
      </div>
      <br />
      <div class="mr-96" style="">
        <projectModal v-on:boardcreated="getData"></projectModal>
      </div>
      <div class="flex" style="">
        <div class="">
          <input
            v-if="isSearch"
            class="h-12 w-96 border border-gray-400 focus:outline-none rounded-lg mt-4 px-5"
            type="text"
            v-model="search"
            placeholder="search projects"
            style="margin-left:0px; right:300px; width:500px;"
          />
        </div>
        <div class="p-3">
          <svg
            @click="searching"
            class="iconsearch cursor-pointer h-14 w-14 ml-0"
            style=""
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
      class="scroll fixed w-11/12 
      2xl:grid 2xl:grid-cols-6 2xl:grid-flow-row 2xl:gap-56
      xl:grid xl:grid-cols-4 xl:grid-flow-row xl:gap-56
      lg:grid lg:grid-cols-3 lg:grid-flow-row lg:gap-56
      md:grid md:grid-cols-2 md:grid-flow-row md:gap-56
      sm:grid sm:grid-cols-1 sm:grid-flow-row sm:gap-56"
      style=" margin-top:100px; margin-left:0px;"
    >
      <div
        class="mon ml-5"
        style=""
        v-for="(board, index) in filteredProjects"
        :key="index"
      >
        <div
          class="2xl:h-72 2xl:w-80 mt-0 leading-10 items-center rounded-t-2xl shadow-xl
           absolute hover:border-4 hover:border-gray-100  2xl:border-t-4 2xl:border-red-500
           sm:w-96 sm:h-96 sm:border-t-4 sm:border-red-500 lg:w-96 lg:h-96 lg:border-t-4 lg:border-red-500
           md:w-96 md:h-96 md:border-t-4 md:border-red-500  xl:w-96 xl:h-96 xl:border-t-4 xl:border-red-500
           "
        >
          <div>
            <!-- <div class="w-200 h-40"></div> -->
            <div
              class="sm:w-96 sm:border 2xl:w-80 h-40 
                2xl:border-b 2xl:border-l 2xl:border-r 2xl:rounded-xl
                sm:border-b sm:border-l sm:border-r sm:rounded-xl
                md:w-96 lg:w-96 xl:w-96
                hover:bg-white hover:bg-opacity-25
                hover:text-gray-50 text-white text-2xl  border-gray-700 mb-10 lighten-2 absolute"
            >
              <router-link
                :to="{ name: 'singleDash', params:{id:board.id} }"
              >
                <button
                  class="sm:px-5 focus:outline-none mt-10 ml-4 m-auto transform hover:scale-110"
                >
                  {{ board.name }}
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
//import axios from 'axios';
import boardMixin from '@/mixins/boardMixin';
import {searchName} from "@/mixins/mixin.js";
import projectModal from "@/views/projectModal";
//import { mapState } from "vuex";
export default {
  data: () => ({
    boards: [],
    user:null,
    search: "",
    isSearch: false,
  }),
  // computed: mapState(["projects"]),
  methods: {
    searching: function() {
      this.isSearch = !this.isSearch;
    },
    },
  
  mounted() {
    this.getData();
  },

  components: {
    projectModal,
  
  },
  mixins: [boardMixin,searchName],
//mixins: [smixin],
};
</script>

<style scoped>
/*   */
.scroll {
  width: 2000px;
  height: 730px;
  overflow: scroll;
}
::-webkit-scrollbar {
  background: transparent;
  width: 20px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #ec190a);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #efffeb);
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
    url("/mike.jpg");
}

@media (max-width: 1536px) {
  .scroll {
    width: 1500px;
    height: 690px;
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #ec190a);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #efffeb);
  }
  ::-webkit-scrollbar-corner {
    border-radius: 20px;
    background: lightgray;
  }
}
@media (max-width: 1280px) {
  .scroll {
    width: 1200px;
    height: 690px;
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #ec190a);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #efffeb);
  }
  ::-webkit-scrollbar-corner {
    border-radius: 20px;
    background: lightgray;
  }
}
@media (max-width: 1024px) {
  .scroll {
    width: 800px;
    height: 600px;
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 29px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #ec190a);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #efffeb);
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
    width: 30px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #ec190a);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #efffeb);
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
    width: 30px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #ec190a);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #efffeb);
  }
  ::-webkit-scrollbar-corner {
    border-radius: 20px;
    background: lightgray;
  }
}
</style>
