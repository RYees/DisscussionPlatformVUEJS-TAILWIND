<template>
   <div class="backG h-screen w-full">
        <keep-alive>
            <component v-bind:is="component"></component>
        </keep-alive>
        <div class="z-40 absolute">
        <a class="ml-72 mb-80 focus:outline-none mt-0 text cursor-pointer text-gray-900" v-on:click="component = 'login'">Login</a>
        <a class="text mt-0 cursor-pointer text-gray-900" v-on:click="component = 'register'">Register</a>
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

