<template>
  <div>
    <div
      class="overscroll-y-hidden bg-gradient-to-r from-white via-gray-50 to-white h-screen w-full flex justify-center items-center"
    >
          <div class="" style="margin-left:100px;" v-if="isReseted ">
        <h3 class="text-gray-700 text-3xl transform capitalize">
          {{ errorMail }}
        </h3>
      </div>
      <span class="text-red-500 text-sm transform capitalize" v-if="isR">{{ errorMail }}</span>
      <form
        @submit.prevent="resetcode"
        class="mt-60 flex justify-center ml-5 rounded-lg border w-1/3 border-gray-300 shadow-xl p-20 py-20"
        style="height:250px"
        v-if="!isReseted"
      >
        <div class="w-11/12">
          <h1 class="block text-gray-600 text-3xl transform capitalize text-center h-16">
            Forgot password
          </h1>
          <hr />
          <br />
          <div> 
          
            <input
              id="email"
              placeholder="Enter your email"
              type="email"
              class="text-sm w-full h-8 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
              required
              v-model="resetEmail"
              style="padding:20px"
            />
            <br /><br />
           <div class="flex justify-between w-20">
              <hr />
            </div>
            <button
              class="ml-80 h-10 w-24 px-1 p-1 mt-5 transform capitalize text-white bg-yellow-600 rounded-lg border-gray-400 border"
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
import axios from "axios";
export default {
  data() {
    return {
      resetEmail:'',
      submitted: false,
      isReseted:false,
      isR:false,
      errorMail:''
    };
  },
  methods: {
    resetcode() {
      axios
        .post("https://zowidiscussionapi.herokuapp.com/api/reset-password-request", {
          email: this.resetEmail,
         })
        .then((response) => {
            // console.log(response);
           if(response.status == 200){
             this.errorMail = response.data.message;
             // console.log(this.errorMail);
             } 
            this.isReseted = true;
            setTimeout(()=>{
                    this.isReseted = false;
                    this.$router.push('/resetpassword');
             },3000);
           this.resetEmail = "";
          
        })
        .catch((e)=> {
           if(e.response.status == 500){
                this.errorMail = e.response.data.message;
                this.isReseted = true;
           }
               setTimeout(()=>{
                    this.isReseted = false;
             },3000);
          });

      // this.$store.dispatch("users/resetcode", this.resetEmail)
      //  .then(()=>{
      //        this.resetEmail = "";
      //       this.isReseted = true;
      //       });
   
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
