<template>
   <div class="h-screen fixed w-full overscroll-y-hidden">
       <h1 class="ml-32 text-5xl ">Zowi Discussion Platform</h1>
        <keep-alive>
            <component v-bind:is="component"></component>
        </keep-alive>
        <div class="absolute flex justify-end" style="top:0px; left:1750px;">
        <a class="focus:outline-none text-3xl cursor-pointer text-gray-700" v-on:click="component = 'login'">Login</a> 
        <a class="myDIV text-3xl ml-4 cursor-pointer text-gray-700" v-on:click="component = 'register'">Register</a>
        <div class="may mr-96 bg-white shadow-xl mt-5 p-4 border border-yellow-300 border-opacity-30">
            <p class="tracking-wider transform capitalize font-normal text-gray-500">
            To register you have to first receive an email invitaion from the admin</p>
        </div>
        </div>
      </div>
</template>

<script>
// Imports
import login from '@/views/Login.vue';
import registration from '@/views/Registration.vue';
export default {
components: {
    'login': login,
    'register': registration,
   
  },
        data () {
        return {
            component: 'login',
            
        }
    },
    methods: {
           handleSubmit: function(){
            alert('thanks for submitting');
}}
}
</script>

<style scoped>
.may {
    display: none;
}
    
.myDIV:hover + div {
    display: block;
}
</style>