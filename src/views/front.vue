<template>
  <div class="w-full h-screen bg-yellow-500 flex">
     <div class="w-full bg-gray-900 h-full ">
       <div class="bg-gray-900" style="">
          <Header />
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
//import Login from "@/views/Login";
import Header from '../components/Header.vue';
export default {
  name: "header",
  components: {
  Header,
  //Login
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
