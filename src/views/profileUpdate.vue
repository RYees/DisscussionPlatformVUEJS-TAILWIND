<template>
  <div>
    <div
      class="overscroll-y-hidden bg-gradient-to-r from-white via-gray-50 to-white h-screen w-full flex justify-center items-center"
    >
      <form
        @submit.prevent="updateProfile"
        class="mt-60 flex justify-center ml-5 rounded-lg border w-1/3 border-gray-300 shadow-xl p-20 py-20"
        style="height:450px"
      >
        <div class="w-11/12" v-if="!submitted">
          <h1 class="block text-gray-600 text-5xl  text-center h-16">
            Update Profile
          </h1>
          <hr />
          <br />
          <div>
            <input
              id="password"
              placeholder="Enter current password"
              type="password"
              class="text-xl w-full h-16 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
              v-model="update.password"
              style="padding:20px"
              required
            />
            <br /><br />
            <input
              id="newPassword"
              placeholder="Enter new password"
              class="text-xl w-full h-16 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
              type="password"
              v-model="update.newpassword"
              style="padding:20px"
              required
            />
            <br /><br />
            <input
              id="confirmpassword"
              placeholder="Confirm new password"
              class="text-xl w-full h-16 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
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
              class="ml-80 h-14 w-32 px-4 p-4 mt-5 text-white bg-yellow-600 rounded-lg border-gray-400 border"
            >
              Update
            </button>
          </div>
        </div>
        <div v-if="submitted">
          <h3>Thanks for Registering</h3>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// Imports
import axios from "axios";
export default {
  data() {
    return {
      update: {},
      submitted: false,
    };
  },
  methods: {
    updateProfile() {
      let token = localStorage.getItem("token");
      axios
        .post("http://localhost:8000/api/usersupdate/" + token, {
          password: this.update.password,
          newPassword: this.update.newpassword,
          confirm_password: this.update.conpassword,
        })
        .then((response) => {
          console.log(response);
          this.update = "";
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
