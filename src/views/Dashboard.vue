<template>
  <div class="back h-screen w-full flex items-center justify-center">
    <!-- <div class="" style="margin-bottom:937px">
          <Header />
      </div> -->
    <div
      class="flex justify-between"
      style="width:1800px; margin-bottom:650px; height:200px"
    >
      <div class="p-3 h-10">
        <p
          class="dash text-4xl uppercase  mb-96 text-white rounded tracking-wider"
        >
          dashboard
        </p>
        <br />
      </div>
      <br />
      <div style="margin-right:450px;">
        <projectModal />
      </div>
      <div class="flex" style="">
        <div>
          <input
            v-if="isSearch"
            class="search h-12 w-96 border border-gray-400 focus:outline-none rounded-lg mt-4 px-5"
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
      class=" scroll mt-0 fixed w-11/12 grid grid-cols-4 gap-y-48 "
      style=" margin-top:100px; margin-left:0px; width:1500px;"
    >
      <div
        class="mon ml-5"
        style=""
        v-for="(project, index) in filteredProjects"
        :key="index"
      >
        <div
          class="h-72 w-80 mt-0 leading-10 items-center rounded-t-2xl shadow-xl absolute hover:border-4 hover:border-gray-100  border-t-4 border-red-500"
        >
          <div>
            <!-- <div class="w-200 h-40"></div> -->
            <div
              class=" w-80 h-40 hover:bg-white hover:bg-opacity-25  hover:text-gray-50 text-white text-2xl  border-gray-700 border-b border-l border-r rounded-xl mb-10 lighten-2 absolute"
            >
              <button
                class="focus:outline-none mt-10 ml-4 m-auto transform hover:scale-110"
              >
                {{ project }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
//import Header from "@/components/Header";
import smixin from "../components/mixin.js";
import projectModal from "@/views/projectModal";
import { mapState } from "vuex";
export default {
  name: "projects",
  data: () => ({
    search: "",
    isSearch: false,
  }),
  computed: mapState(["projects"]),
  methods: {
    searching: function() {
      this.isSearch = !this.isSearch;
    },
  },
  components: {
    projectModal,
   // Header,
  },
  mixins: [smixin],
};
</script>

<style scoped>
/*   */
.scroll {
  width: 1500px;
  height: 600px;
  overflow: scroll;
}
::-webkit-scrollbar {
  background: transparent;
  width: 12px;
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
/*
@media (max-width: 2100px){
  .scroll {
  width: 1500px;
  height: 600px;
  overflow: scroll;
  background: lightblue;
	margin-bottom: 20px;
   margin:0px 0px 200px auto;
}
::-webkit-scrollbar {
  background: transparent;
  width: 12px;
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
.iconsearch{
   margin-left:820px
}
.table{
  display:grid;
  grid-template-columns:30% 30% 30% 30%;
  grid-column-gap: 0px;
  margin-left:100px;
}
.search{
  margin-right: 3px;
}
.iconsearch{
   margin-left:830px
}
}
@media (max-width: 1600px){
   .scroll {
  width: 1100px;
  height: 400px;
  overflow: scroll;
  background: lightblue;
	margin-bottom: 20px; 
  margin:0px 0px 200px auto;
}
::-webkit-scrollbar {
  background: transparent;
  width: 12px;
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

.table{
  display:grid;
  grid-template-columns:30% 30% 30%;
  grid-column-gap: 0px;
  margin-left:100px;
}
.dash{
  margin-left: 200px;
}
.search{
  margin-right: 300px;
}
.iconsearch{
  margin-left: 680px;
}
.modal{
  margin-left: 900px;
}
}
@media (max-width: 1500px){
   .scroll {
  width: 1000px;
  height: 600px;
  overflow: scroll;
 
}
::-webkit-scrollbar {
  background: transparent;
  width: 12px;
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
.table{
  display:grid;
  grid-template-columns:30% 30% 30%;
  grid-column-gap: 0px;
  margin-left:100px;
}
.dash{
  margin-left: 600px;
}
.modal{
  margin-left: 700px;
}
.search{
  margin-right: 800px;
}
.iconsearch{
  margin-left:430px;
}
}
@media (max-width: 1000px){
.table{
  display:grid;
  grid-template-columns:30% 30%;
  grid-column-gap: 0px;
  margin-left:300px;
}
.dash{
  margin-left: 800px;
}
.modal{
  margin-left: 650px;
}
}
@media (max-width: 900px){
 .scroll {
  width: 500px;
  height: 600px;
  overflow: scroll;
 }
::-webkit-scrollbar {
  background: transparent;
  width: 12px;
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
.table{
  display:grid;
  grid-template-columns:100%;
  margin-left:500px;
}
.dash{
  margin-left: 1000px;
  margin-top: 200px;
}
.modal{
  margin-left: 470px;
}
.search{
  margin-right: 1100px;
}
.iconsearch{
  margin-left: 280px;
}
} */
</style>
