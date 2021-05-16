<template>
  <div class="flex">
    <!-- <div class="profile"> -->
    <button class="" style="left:0px;">
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
      class="z-10 absolute bg-gray-100 h-64 mb-0 p-0 overflow-hidden shadow-xl transform transition-all"
      style="margin-left:120px; width:350px; top:100px; height:220px"
      role="dialog"
      aria-modal="false"
      aria-labelledby="modal-headline"
    >
      <div
        class="inline-block text-sm text-gray-700 ml-4 tracking-wider transform capitalize p-1"
      >
        <p class="inline-block text-lg">{{ list.name }}</p>
        upload image
      </div>
      <svg
        class="inline-block ml-32 h-5 w-5"
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
      <hr />
      <div class="flex gap-2">
        <div>
          <div class="" style="width:3px;">
            <button class="w-80 h-10 mt-5 ml-3 border bg-yellow-200 text-gray-600">upload image</button>
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
<style></style>
