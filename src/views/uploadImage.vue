<template>
  <div class="flex">
    <!-- <div class="profile"> -->
    <div>
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
    </div>
    <div class="text-sm mt-2 text-yellow-600">
      <small>{{ imageCount }}</small>
    </div>
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
              <form
                action=""
                method="POST"
                enctype="multipart/form-data"
                @submit.prevent="uploadImage"
              >
                <input
                  class="text-gray-800 w-80 h-14"
                  type="file"
                  @change="onImageChange"
                />
                <button
                  type="submit"
                  class="w-60 h-12 mt-2 ml-3 border rounded-lg bg-yellow-500 text-white"
                  @click="uploadImage"
                >
                  upload image
                </button>
                <div v-if="imagepreview">
                  <img :src="imagepreview" class="h-40 w-40" alt="" />
                </div>
              </form>
            </div>
            <div class="" style="width:3px;"></div>
          </div>
          <div
            class="upload bg-gray-100 grid grid-rows-1 grid-flow-col gap-3 ml-4"
          >
            <div
              class="p-3 text-gray-500 text-sm bg-yellow-500 bg-opacity-30 mb-1"
              v-for="(image, index) in images"
              :key="index"
              style="width:300px"
            >
             <!-- <img
                class="h-64 w-72"
                :src="'http://localhost:8000/storage/images/' + image.images"
                alt="images"
              /> -->
              <img
                class="h-64 w-72"
                :src="'https://zowidiscussionapi.herokuapp.com/storage/images/' + image.images"
                alt="images"
              />
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
      images: [],
      imageCount: [],
      image: "",
      commentName: "",
      boardId: "",
      imagepreview: null,
      newimages: "",
      listId: "",
      isShow: false,
    };
  },
  created() {
    let token = localStorage.getItem("token");
    axios
      .get(
        "/boards/" +
          this.list.board_id +
          "/list/" +
          this.list.id +
          "/card/" +
          this.card.id +
          "/cardimages" +
          "?api_token=" +
          token
      )
      .then((response) => {
        this.images = response.data.images;
      });
  },
  mounted() {
    this.counts();
  },
  methods: {
    counts: function() {
      let token = localStorage.getItem("token");
      axios
        .get(
          "/boards/" +
            this.list.board_id +
            "/list/" +
            this.list.id +
            "/card/" +
            this.card.id +
            "/imagesCount" +
            "?api_token=" +
            token
        )
        .then((response) => {
          this.imageCount = response.data.images;
          console.log(this.imageCount);
        });
    },
    showModal: function() {
      this.isShow = !this.isShow;
    },
    onImageChange(e) {
      console.log(e.target.files[0]);
      this.image = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.image);
      reader.onload = (e) => {
        this.imagepreview = e.target.result;
      };
      setTimeout(() => {
        this.imagepreview = "";
      }, 3000);
    },
    uploadImage(e) {
      e.preventDefault();

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      let formData = new FormData();
      formData.append("images", this.image);

      let token = localStorage.getItem("token");
      axios
        .post(
          "/boards/" +
            this.list.board_id +
            "/list/" +
            this.list.id +
            "/card/" +
            this.card.id +
            "/images" +
            "?api_token=" +
            token,
          formData,
          config
        )
        .then((response) => {
          let newImage = response.data.images;
          this.images.push(newImage);
          this.counts();
        });
    },
  },
};
</script>
<style>
@media (max-width: 1536px) {
  .upload {
    width: 620px;
    height: 300px;
    margin-top: 20px;
    overflow: scroll;
  }
}
</style>
