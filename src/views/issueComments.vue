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
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </button>
<div class="flex justify-center items-center">
    <div
      v-if="isShow"
      class="z-10 fixed bg-gray-100 h-64 overflow-hidden shadow-xl transform transition-all"
      style="margin-left:80px; width:650px; top:60px; height:460px"
      role="dialog"
      aria-modal="false"
      aria-labelledby="modal-headline"
    >
      <div class="inline-block text-sm text-gray-700 ml-24 tracking-wider transform capitalize p-1">
          <p class="inline-block text-lg">{{list.name}}</p> comments
      </div>
        <svg
            class="inline-block ml-96 h-5 w-5"
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
    <!-- <div class=" > -->
     <div class="scr  bg-gray-100  ml-4" style="width:300px">
      <ul class="">
          <li class="p-3 text-gray-500 text-sm bg-white mb-1" style="width:300px"  v-for="(comment,index) in comments" :key="index">
         {{comment.description}}
             </li>
          </ul>
    </div>
      <!-- </div> -->
      <div>
        <div class="bg-white" style="width:320px;">
          <textarea
            style="padding:20px;"
            class="h-40 w-80 text-gray-500 focus:outline-none"
            name="commentinput"
            v-model="commentName"
            id=""
            cols="30"
            rows="10"
            placeholder="write your comment"
            @click="showOn"
          ></textarea>
        </div>
        <div class="bg-white" v-if="isOn">
          <button @click="addComment" class="bg-green-600 focus:outline-none hover:bg-green-500 rounded ml-5 mb-1 h-10 w-20" style="">save</button>
        </div>
        <div class="ml-5">
          <p class="text-gray-700 transform capitalize">comments</p>
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
 props: ["card","list"],
  data: () => {
    return {
      comments:[],
      commentName:'',
      boardId: "",
      listId: "",
      isShow: false,
      isOn: false,
      finds:[
             {email:"jactekdj"},
             {email:"fjadklsd"},
             {email:"thoreurd"},
             {email:"jactekdj"},
             {email:"fjadklsd"},
             {email:"thoreurd"},
             
      ]
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
    showOn: function() {
      this.isOn= !this.isOn;
    },
    addComment() {
      let token = localStorage.getItem("token");
      axios
        .post(
          "/boards/" +
            this.list.board_id +
            "/list/" +
            this.list.id +
            "/card/" + this.card.id +"?api_token=" +
            token,
          {
            description: this.commentName,
          }
        )
        .then((response) => {
          let newComment = response.data.card;
         // this.$emit("cardcreated");
          this.comments.push(newComment);
          console.log("dfjdou899")
          console.log(response);
          this.commentName = "";
          //this.editCardId = "";
        });
    },
  },
};
</script>
<style>
/* .scroll {
    width: 300px;
    height: 50px;
    overflow: scroll;
} */
@media (max-width: 1536px) {
  .scr {
    width: 250px;
    height: 440px; 
    overflow: scroll;
    
}
    /* background: chartreuse; */
    /* overflow: scroll;
         */

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
</style>
