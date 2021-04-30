<template>
  <div>
    <div
      class="overscroll-y-hidden bg-gradient-to-r from-white via-gray-50 to-white h-screen w-full flex justify-center items-center"
    >
      <div class="" v-if="submitted">
        <h3 class="text-gray-700 text-6xl transform capitalize">
          Thanks for Registering!!!
        </h3>
      </div>
      <form
        @submit.prevent="registerIt"
        v-if="!submitted"
        class="mt-60 flex justify-center ml-5 rounded-lg border w-1/3 border-gray-300 shadow-xl p-20 py-20"
        style="height:600px"
      >
        <div class="w-11/12">
          <h1 class="block text-gray-600 text-5xl  text-center h-16">
            Register
          </h1>
          <hr />
          <br />
          <div>
            <label class="text-2xl text-gray-600" for="insering an username"
              >Enter Fullname:</label
            >
            <input
              id="username"
              placeholder="Enter fullname"
              type="text"
              style="padding:20px"
              class="text-xl w-full h-16 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
              v-model="register.fullname"
              required
            />
            <br /><br />
            <label class="text-2xl text-gray-600" for="insering an email"
              >Enter Email:</label
            >
            <input
              id="email"
              placeholder="Enter email"
              style="padding:20px"
              v-model="invites.email"
              class="text-xl w-full h-16 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
              type="email"
              required
            />
            <br /><br />
            <label class="text-2xl text-gray-600" for="insering an password"
              >Enter Password</label
            >
            <input
              id="password"
              placeholder="Enter password"
              style="padding:20px"
              class="text-xl w-full h-16 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
              type="password"
              v-model="register.password"
              required
            />
            <br /><br />
            <div class="flex justify-between w-20">
              <hr />
            </div>
            <br />
            <button
              class="ml-80 h-14 w-32 px-4 p-4 mt-5 text-white bg-yellow-600 rounded-lg border-gray-400 border"
            >
              Submit
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
      invites: null,
      register: {},
      submitted: false,
    };
  },
  mounted() {
    //console.log(this.$route.fullPath);
    let path = this.$route.fullPath.split("=", 2);
    let token = path[1];
    console.log(this.$route.fullPath);
    axios
      .get("http://localhost:8000/api/registration/" + token)
      .then((response) => {
        this.invites = response.data[0];
        console.log(response);
        console.log(this.invites);
      });
  },
  methods: {
    registerIt() {
      axios
        .post("http://localhost:8000/api/register/" + this.invites.board_id, {
          name: this.register.fullname,
          email: this.invites.email,
          password: this.register.password,
        })
        .then((response) => {
          let token = response.data.user.api_token;
          localStorage.setItem("token", token);
          console.log(response);
          this.register.fullname = "";
          this.register.password = "";
          this.submitted = true;
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
