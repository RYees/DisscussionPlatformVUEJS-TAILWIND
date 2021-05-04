<template>
  <div class="w-full h-screen bg-yellow-500 flex">
     <div class="w-full bg-gray-900 h-full ">
       <div class="bg-gray-900" style="">
          <navbar></navbar>
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
//import axios from "axios";
 import navbar from '@/components/navbar.vue';
export default {
 // props:["user"],
   data: () => {
    return {user:null};
  },
  components: {
   navbar,
  //Login
  },
  // created(){
  //   this.CurrentUserData(); 
  // },
  // methods:{
  //   CurrentUserData(){
  //   let token = localStorage.getItem('token');
  //   axios.get("http://127.0.0.1:8000/api/users/"+token+"?api_token="+token)
  //     .then(response => {
  //       console.log(response);
  //       this.user = response.data.user;
  //     });
  //   }
  // }
  
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
