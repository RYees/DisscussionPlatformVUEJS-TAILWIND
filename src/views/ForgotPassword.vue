<template>
  <div>
    <div
      class="overscroll-y-hidden bg-gradient-to-r from-white via-gray-50 to-white h-screen w-full flex justify-center items-center"
    >
      <div class="" v-if="isReseted">
        <h3 class="text-gray-700 text-4xl transform capitalize">
          Verification code is sent to your email!
        </h3>
      </div>
      <form
        @submit.prevent="resetcode"
        class="mt-60 flex justify-center ml-5 rounded-lg border w-1/3 border-gray-300 shadow-xl p-20 py-20"
        style="height:300px"
        v-if="!isReseted"
      >
        <div class="w-11/12">
          <h1 class="block text-gray-600 text-5xl transform capitalize text-center h-16">
            Forgot password
          </h1>
          <hr />
          <br />
          <div>
            <input
              id="email"
              placeholder="Enter your email"
              type="email"
              class="text-xl w-full h-16 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
              required
              v-model="resetEmail"
              style="padding:20px"
            />
            <br /><br />
           <div class="flex justify-between w-20">
              <hr />
            </div>
            <button
              class="ml-80 h-14 w-32 px-4 p-4 mt-5 transform capitalize text-white bg-yellow-600 rounded-lg border-gray-400 border"
            >
              sent
            </button>
          </div>
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
      resetEmail:'',
      submitted: false,
      isReseted:false
    };
  },
  methods: {
    resetcode() {
      // axios
      //   .post("http://localhost:8000/api/reset-password-request", {
      //     email: this.resetEmail,
      //    })
      //   .then((response) => {
      //     console.log(response);
      //     this.resetEmail = "";
      //     this.isReseted = true;
      //     this.$router.push('/resetpassword');
      //   });

      this.$store.dispatch("users/resetcode", this.resetEmail)
       .then(()=>{
             this.resetEmail = "";
            this.isReseted = true;
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
