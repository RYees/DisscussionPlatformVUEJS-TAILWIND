<template>
<div class="h-screen w-full">
    <div
      class="bg-gradient-to-r from-white via-gray-50 to-white h-screen w-full flex justify-center items-center"
    >
    <div class="" v-if="submitted">
          <h3 class="text-gray-700 text-4xl transform capitalize">Thanks for Registering!!!</h3>
    </div>
      <form
        @submit.prevent="Adminregister"
        class="mt-60 flex justify-center ml-5 rounded-lg border h-80 w-1/3  border-gray-300 shadow-xl p-20 py-20"
        style="height:450px" v-if="!submitted"
      >
        <div class="w-11/12" >
          <h1 class="block text-gray-600 text-4xl transform capitalize text-center h-16">
            Admin Register
          </h1>
          <hr />
          <br />
          <input
            id="name"
            placeholder="Enter fullname"
            type="text"
            class="w-full h-12 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
            required
            v-model="register.fullname"
            style="padding:20px"
          />
          <br/><br />
          <input
            id="email"
            placeholder="Enter email"
            required
            v-model="register.email"
            class="w-full h-12 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
            type="email"
            style="padding:20px"
          />
          <br /><br />
          <input
            id="password"
            placeholder="Enter password"
            class="w-full h-12 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
            type="password"
            style="padding:20px"
            required
            v-model="register.password"
           />
          <br /><br />
           <input
            id="password"
            placeholder="Enter confirm password"
            class="w-full h-12 rounded hover:bg-blue-50 border border-gray-200 focus:outline-none"
            type="password"
            style="padding:20px"
            required
            v-model="register.confirm_password"
           />
           <div class="text-red-500 transform capitalize" v-if="register.password != register.confirm_password">Passwords don't match</div>
          <br /><br />
          <div class="flex justify-between w-20">
            <hr />
            <button
              class="ml-80 h-10 w-32 px-5 p-4 mt-5 transform capitalize text-white bg-yellow-600 rounded-lg border-gray-400 border"
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
export default {
  data() {
    return {
      register: {fullname:"",email:"",password:"",confirm_password:""},
      submitted: false,
    };
  },
  methods: {
    Adminregister() {
           this.$store.dispatch('admin/Adminregister',this.register)
          .then(()=>{
            this.register="",
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
