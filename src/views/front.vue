<template>
  <div class="w-full h-screen flex">
     <div class="w-full h-full">
       <div class="bg-gray-900" style="">
          <!-- <navbar></navbar> -->
          <!-- <Layout :title="title" ></Layout> -->
      </div>
      <div class="row bg-white" style="height:100%">
        <transition name="slide" mode="out-in">
         <router-view></router-view>
        </transition>
      </div>
     </div>
  </div>
</template>
<script>
//import navbar from '@/components/navbar.vue';
//import Layout from '@/layouts/main.vue';
export default {
  data: () => {
    return {
      user:null,
      title:"helllo newyork"
      
      };
  },
  components: {
   //navbar,
  // Layout
  },
 };
</script>

<style scoped>

body{
  padding:30px;
}
.slide-enter-active{
animation: slide-in 600ms ease-out forwards;
}
.slide-leave-active{
animation: slide-out 900ms ease-out forwards;
}
@keyframes slide-in {
  from{
    transform: translateY(-30px);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from{
    transform: translateY(0);
    opacity: 1;
  }
  to{
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
