<template>
  <div>
    <div
      class="overscroll-y-hidden bg-gradient-to-r from-white via-gray-50 to-white h-screen w-full flex justify-center items-center"
    >
      <form
        @submit.prevent="updateProfile"
        class="mt-60 flex justify-center ml-5 rounded-lg border w-1/3 border-gray-300 shadow-xl p-20 py-20"
        style="height:400px"
      >
        <div class="w-11/12">
          <div
            class="shadow bg-yellow-500 bg-opacity-95 h-14 w-full"
            style="margin-top:10px"
            v-if="submitted"
          >
            <h3
              style="padding:15px;"
              class="shadow flex justify-center bg-yellow-500 bg-opacity-75 h-14  text-white text-xl flex-1 transform capitalize"
            >
              {{ errorUpdate }}
            </h3>
          </div>
          <h1 class="block text-gray-600 text-3xl text-center h-16">
            Update Profile
          </h1>
          <hr />
          <br />
          <div>
            <input
              id="password"
              placeholder="Enter current password"
              type="password"
              class="text-sm w-full h-8 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
              v-model="update.password"
              style="padding:20px"
              required
            />
            <br /><br />
            <input
              id="newPassword"
              placeholder="Enter new password"
              class="text-sm w-full h-8 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
              type="password"
              v-model="update.newpassword"
              style="padding:20px"
              required
            />
            <br /><br />
            <input
              id="confirmpassword"
              placeholder="Confirm new password"
              class="text-sm w-full h-8 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
              type="password"
              v-model="update.conpassword"
              style="padding:20px"
              required
            />
            <br /><br />
            <div class="flex justify-between w-20">
              <hr />
            </div>
            <button
              class="ml-80 h-10 w-32 px-2 p-2 mt-5 text-white bg-yellow-600 rounded-lg border-gray-400 border"
            >
              Update
            </button>
          </div>
        </div>
      </form>
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
export default {
  data() {
    return {
      update: {},
      submitted: false,
      errorUpdate: "",
    };
  },
  methods: {
    updateProfile() {
      let token = localStorage.getItem("token");
      axios
        .post("/usersupdate/" + token, {
          password: this.update.password,
          newPassword: this.update.newpassword,
          confirm_password: this.update.conpassword,
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            this.errorUpdate = response.data.message;
          }
          this.submitted = true;
          setTimeout(() => {
            this.submitted = false;
          }, 3000);
          this.update = "";
        })
        .catch((e) => {
          if (e.response.status == 401) {
            this.errorUpdate = e.response.data.message;
            this.submitted = true;
          } else if (e.response.status == 422) {
            this.errorUpdate = e.response.data.message;
            this.submitted = true;
          }
          setTimeout(() => {
            this.submitted = false;
          }, 6000);
        });
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.backG {
  /* background: url("/mike.jpg"); */
  background-image: linear-gradient(
      to bottom,
      rgba(29, 30, 31, 0.52),
      rgba(39, 38, 39, 0.73)
    ),
    url("/mike.jpg");
}
</style>
