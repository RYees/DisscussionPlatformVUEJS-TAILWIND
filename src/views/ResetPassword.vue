<template>
  <div>
    <div
      class="overscroll-y-hidden bg-gradient-to-r from-white via-gray-50 to-white h-screen w-full flex justify-center items-center"
    >
     <form
        @submit.prevent="resetpassword"
        class="mt-60 flex justify-center ml-5 rounded-lg border w-1/3 border-gray-300 shadow-xl p-20 py-20"
        style="height:470px"
      >
        <div class="w-11/12">
          <div
            class="shadow bg-yellow-500 bg-opacity-95 h-14 w-full"
            style="margin-top:10px"
            v-if="isReset"
          >
            <h3
              style="padding:15px;"
              class="shadow flex justify-center bg-yellow-500 bg-opacity-75 h-14  text-white text-sm flex-1 transform capitalize"
            >
              {{ errorReset }}
            </h3>
          </div>
          <h1 class="block text-gray-600 text-3xl  text-center h-16">
            Reset Password
          </h1>
          <hr />
          <br />
          <div>
            <input
              id="email"
              placeholder="Enter email"
              required
              v-model="reset.email"
              class="text-sm w-full h-8 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
              type="email"
              style="padding:20px"
            />
            <br /><br />
            <input
              id="number"
              placeholder="Enter verification code"
              class="text-sm w-full h-8 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
              type="text"
              required
              v-model="reset.verCode"
              style="padding:20px"
            />
            <br /><br />
            <input
              id="password"
              placeholder="Enter new password"
              class="text-sm w-full h-8 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
              type="password"
              required
              v-model="reset.password"
              style="padding:20px"
            />
            <br /><br />
            <input
              id="confirmpassword"
              placeholder="Enter confirm password"
              class="text-sm w-full h-8 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
              type="password"
              required
              v-model="reset.conpassword"
              style="padding:20px"
            />
            <div
              class="text-red-500 transform capitalize"
              v-if="reset.password != reset.conpassword"
            >
              Passwords don't match
            </div>
            <br /><br />
            <div class="flex justify-between w-20">
              <hr />
            </div>
            <button
              class="ml-80 h-10 w-24 px-4 p-4 mt-5 text-white bg-yellow-600 rounded-lg border-gray-400 border"
            >
              Submit
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
      reset: {},
      isReset: false,
      errorMail: "",
      errorReset: "",
    };
  },
  methods: {
    resetpassword() {
      axios
        .post("/reset-password", {
          email: this.reset.email,
          verification_code: this.reset.verCode,
          password: this.reset.password,
          confirm_password: this.reset.conpassword,
        })
        .then((response) => {
          console.log(response);
          this.reset = "";
          this.isReset = true;
          if (response.status == 200) {
            this.errorReset = response.data.message;
            this.isReset = true;
          }
          setTimeout(() => {
            this.isReset = false;
            this.$router.push("/");
          }, 6000);
        })
        .catch((e) => {
          if (e.response.status == 401) {
            this.errorReset = e.response.data.message;
            console.log(this.errorReset);
            this.isReset = true;
          }else if (e.response.status == 500) {
            this.errorReset = e.response.data.message;
            this.isReset = true;
          }
          setTimeout(() => {
            this.isReset = false;
          }, 6000);
          //this.errorMail=e.response.data.message
        });
      //  this.$store.dispatch("users/resetpassword", this.reset)
      //      .then(()=>{
      //         this.reset = "";
      //         this.isReset = true;
      //         });
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
