<template>
<div class="backG h-screen w-full">
    <div
      class="backG bg-gradient-to-r from-white via-gray-900 to-white h-screen w-full flex justify-center items-center"
    >
      <form
        @submit.prevent="Adminregister"
        class="mt-60 flex justify-center ml-5 rounded-lg border h-80 w-1/3  border-gray-300 shadow-xl p-20 py-20"
      >
        <div class="w-11/12" v-if="!submitted">
          <h1 class="block text-white text-3xl">Register</h1>
          <br />
          <input
            id="username"
            placeholder="Enter user name"
            type="text"
            class="h-12 w-full border border-gray-300"
            v-model="register.username"
            required
          />
          <br /><br />
          <input
            id="email"
            placeholder="Enter email"
            v-model="register.email"
            class="h-12 w-full border border-gray-300"
            type="email"
            required
          />
          <br /><br />
          <input
            id="password"
            placeholder="Enter password"
            class="h-12 w-full border border-gray-300"
            type="password"
            v-model="register.password"
            required
          />
          <br /><br />
          <div class="flex justify-between w-20">
            <hr />
            <button
              class="ml-40 h-10 w-20 px-4 p-4 mt-5 text-white bg-blue-900 rounded-lg border-gray-400 border"
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
//import axios from "axios";
export default {
  data() {
    return {
      register: {username:"",email:"",password:""},
      submitted: false,
    };
  },
  methods: {
    Adminregister() {
      // axios
      //   .post("http://localhost:8000/api/Adminregister/", {
      //     username: this.register.username,
      //     email: this.register.email,
      //     password: this.register.password,
      //   })
      //   .then((response) => {
      //     let token = response.data.user.api_token;
      //     localStorage.setItem("token", token);
      //     console.log(response);
      //     this.register="";
      //     this.$router.push('/');
      //   });
          this.$store.dispatch('admin/Adminregister',this.register);
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
