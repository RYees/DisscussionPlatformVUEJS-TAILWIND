<template>
  <div class="flex justify-end">
    <div class="">
      <button
        class="profile h-8 w-8 p-0 px-1 text-xl transform uppercase tracking-wider bg-white focus:outline-none"
        style="border-radius:50%; margin-left:0px;"
        @click.prevent="showModal"
      >
        P
      </button>
    </div>
    <div
      v-if="isShow"
      class="z-40 absolute bg-white h-64 mb-80 p-0 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full"
      style="margin-left:576px; width:300px; top:33px; height:280px"
      role="dialog"
      aria-modal="false"
      aria-labelledby="modal-headline"
    >
      <h1 class="ml-24 py-2 text-lg tracking-wider">
        Account
        <button class="focus:outline-none" @click.prevent="showModal">
          <svg
            class="h-5 w-5 inline-block ml-24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </h1>
      <hr />
      <div class="p-1">
        <p
          class="inline-block h-7 w-8 transform uppercase p-0 px-3 py-0 text-lg tracking-wider bg-blue-100"
          style="border-radius:50%;"
        >
          p
        </p>
        <!-- <div v-for="user in user" :key="user"> -->
        <p class="p-3 inline-block ml-5 text-lg">
          {{ allUsers.name }}
          <small class="ml-1 text-gray-500 leading-tight">{{
            allUsers.email
          }}</small
          ><br />
        </p>
        <!-- </div> -->
        <hr />
        <button
          class="p-3 text-sm tracking-wider transition duration-100 ease-in-out transform hover:scale-105 hover:bg-yellow-500 hover:bg-opacity-30"
        >
          Help
        </button>
        <hr />
        <router-link to="/profileUpdate">
          <button
            class="p-3 text-sm tracking-wider transition duration-100 ease-in-out transform hover:scale-105 hover:bg-yellow-500 hover:bg-opacity-30 cursor-pointer focus:outline-none"
          >
            Change Password
          </button>
        </router-link>
        <hr />
        <button
          class="p-3 text-sm tracking-wider transition duration-100 ease-in-out transform hover:scale-105 hover:bg-yellow-500 hover:bg-opacity-30 cursor-pointer focus:outline-none"
          v-if="!isLoggingOut"
          v-on:click="logout"
        >
          Logout
        </button>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import axiosLib from "axios";
// const axios = axiosLib.create({
//   baseURL: "https://zowidiscussionapi.herokuapp.com/api"
// });
const axios = axiosLib.create({
  baseURL: "http://localhost:8000/api",
});
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => {
    return {
      isShow: false,
      isLoggingOut: false,
    };
  },
  computed: {
    ...mapGetters(["allUsers"]),
  },
  methods: {
    ...mapActions(["CurrentUserData"]),
    showModal: function() {
      this.isShow = !this.isShow;
    },
    logout() {
      let token = localStorage.getItem("token");
      if (!token) {
        return false;
      }
      axios.get("/logout?api_token=" + token).then((response) => {
        console.log(response);
        localStorage.removeItem("token");
        this.$router.push("/");
      });
    },
  },
  created() {
    this.CurrentUserData();
  },
};
</script>
<style>
@media (max-width: 1536px) {
  .profile {
    margin-left: 920px;
  }
}
@media (max-width: 1280px) {
  .profile {
    margin-left: 830px;
  }
}
@media (max-width: 1024px) {
  .profile {
    margin-left: 280px;
  }
}
@media (max-width: 768px) {
  .profile {
    margin-left: 280px;
  }
}
@media (max-width: 640px) {
  .profile {
    margin-left: 280px;
  }
}
</style>
