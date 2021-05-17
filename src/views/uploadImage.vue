<template>
  <div class="flex">
    <!-- <div class="profile"> -->
    <button
      class="focus:outline-none hover:bg-gray-600 w-6 hover:bg-opacity-30"
      title="add image"
      style="left:0px;"
    >
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
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </button>
    <div
      v-if="isShow"
      class="z-40 fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
    >
      <div class="z-40 fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      <div
        v-if="isShow"
        class="z-40 absolute bg-gray-100 h-64 mb-0 p-0 overflow-hidden shadow-xl transform transition-all"
        style="width:650px; top:60px; height:460px"
        role="dialog"
        aria-modal="false"
        aria-labelledby="modal-headline"
      >
         <div
          class="inline-block text-sm text-gray-700 ml-2 tracking-wider transform capitalize p-1"
          style="top:0px;"
        >
          <p class="inline-block text-lg">{{ list.name }}</p>
          upload image
        </div>
         <div
          class="inline-block mt-3"
          style="top:0px; left:0px; margin-left:440px"
        >
        <button
          class="focus:outline-none hover:bg-gray-600 w-5 hover:bg-opacity-30"
          title="comment"
          style="left:0px;"
        >
          <svg
            class="h-5 w-5"
            style="left:0px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="green"
            @click.prevent="showModal"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        </div>
        <hr />
        <div class="">
          <div class="flex gap-4">
            <div class="ml-4 mt-3">
              <input class="text-white w-80 h-14 bg-green-400" type="file">
            </div>
            <div class="" style="width:3px;">
              <button
                class="w-60 h-12 mt-2 ml-3 border rounded-lg bg-yellow-500 text-white"
              >
                upload image
              </button>
            </div>
          </div>
          <div class="upload bg-gray-100 grid grid-rows-1 grid-flow-col gap-3 ml-4" >
            <div class="p-3 text-gray-500 text-sm bg-yellow-500 bg-opacity-30 mb-1"  v-for="(find, index) in finds" :key="index" 
            style="width:300px">
              {{ find.email }}
                </div>
             </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosLib from "axios";
const axios = axiosLib.create({
  baseURL: "https://zowidiscussionapi.herokuapp.com/api"
});
// const axios = axiosLib.create({
//   baseURL: "http://localhost:8000/api",
// });
export default {
  props: ["card", "list"],
  data: () => {
    return {
      comments: [],
      commentName: "",
      boardId: "",
      listId: "",
      isShow: false,
       finds: [
        { email: "jactekdj" },
        { email: "fjadklsd" },
        { email: "thoreurd" },
        { email: "jactekdj" },
        { email: "fjadklsd" },
        { email: "thoreurd" },
      ],
    };
  },
  created() {
    this.comments = this.card.comments;
    // console.log("whenuseetalent");
    // console.log(this.comments);
  },
  methods: {
    showModal: function() {
      this.isShow = !this.isShow;
    },
    addComment() {
      let token = localStorage.getItem("token");
      axios
        .post(
          "/boards/" +
            this.list.board_id +
            "/list/" +
            this.list.id +
            "/card/" +
            this.card.id +
            "?api_token=" +
            token,
          {
            description: this.commentName,
          }
        )
        .then((response) => {
          let newComment = response.data.card;
          // this.$emit("cardcreated");
          this.comments.push(newComment);
          console.log("dfjdou899");
          console.log(response);
          this.commentName = "";
          //this.editCardId = "";
        });
    },
  },
};
</script>
<style>
@media (max-width: 1536px) {
  .upload {
    width: 620px;
    height: 330px;
    margin-top: 20px;
    overflow: scroll;
  }

}
</style>
