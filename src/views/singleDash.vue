<template>
   <div class="user p-6 h-screen w-full overflow-y-hidden flex justify-center items-center ">
    <!-- <router-link class="text-3xl text-center  flex items-center justify-center text-white animate-none uppercase mt-8 absolute ml-60" to="/dashboard">back</router-link> -->
   <div class="flex mt-0 absolute" style="margin-bottom:800px; margin-left:40px; height:10px;">
    <!-- <div class="">
        <h1 class="xl:text-3xl lg:text-2xl flex items-center justify-center overflow-hidden md:text-xl text-white animate-bounce absolute ml-0"
        style="margin-top:0px; margin-bottom:0px;"
        >{{currentUserBoard.name}}</h1>
    </div> -->
    <div
          v-if="
            Object.keys(currentRole).length !== 0 && currentRole !== undefined
          "
        >
    <div class="inv" style="" v-if="currentRole[0].pivot.role_id == 1">
      <Invitation/>
    </div>
    </div>
   </div>
      <!-- <div class="h-screen flex items-center justify-center"> v-if="this.roles[0].pivot.role_id == 1"-->
      <div class="scroll" style="margin-left:100px">
        <comment/>
      </div>
    <!-- </div> --> 
</div>

</template>
<script>
//import boardMixin from '@/mixins/boardMixin';
import comment from "@/views/comment.vue";
import Invitation from './Invitation.vue';
export default {
   data(){
    return{
       currentUserBoard:'',
       }
  },
computed:{
    currentRole: {
      get(){
        return this.$store.state.users.role
      }
    }
  },
  created(){
   this.$store.dispatch('users/currrentUserRole');
    },
  components:{
        comment,
        Invitation
    },
  // mixins: [boardMixin],
  }
</script>
<style>
.user{
  background-image: linear-gradient(
      to bottom,
      rgba(29, 30, 31, 0.52),
      rgba(39, 38, 39, 0.73)
    ),
    url("/mike5.jpg");
}
/* .inv{
  margin-left: 1800px;
} */
@media (max-width: 1536px) {
.inv{
  /* margin-left:1280px; */
  margin-left:1160px;
}
}
@media (max-width: 1280px) {
.inv{
  margin-left:1000px;
}
}
@media (max-width: 1024px) {
.inv{
  margin-left:700px;
}
}
@media (max-width: 768px) {
.inv{
  margin-left:500px;
  margin-top:20px;
}
}
@media (max-width: 640px) {
.inv{
  margin-left:200px;
  margin-top:20px;
}
}

@media (max-width: 1536px) {
  .scroll {
    width: 9px;
    height: 500px;
    margin-right:1390px;
    /* overflow: scroll; */
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 18px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #305a27);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #4d9c02);
  }
  ::-webkit-scrollbar-corner {
    border-radius: 20px;
    background: lightgray;
  }
}
@media (max-width: 1280px) {
  .scroll {
    width: 9px;
    height: 500px;
    margin-right:1200px;
    /* overflow: scroll; */
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 27px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #305a27);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #4d9c02);
  }
  ::-webkit-scrollbar-corner {
    border-radius: 20px;
    background: lightgray;
  }
}
@media (max-width: 1024px) {
.scroll {
    width: 9px;
    height: 500px;
    margin-right:900px;
    /* overflow: scroll; */
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 27px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #305a27);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #4d9c02);
  }
  ::-webkit-scrollbar-corner {
    border-radius: 20px;
    background: lightgray;
  }
}
@media (max-width: 768px) {
 .scroll {
    width: 9px;
    height: 500px;
    margin-right:700px;
    /* overflow: scroll; */
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 27px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #305a27);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #4d9c02);
  }
  ::-webkit-scrollbar-corner {
    border-radius: 20px;
    background: lightgray;
  }
}
@media (max-width: 640px) {
  .scroll {
    width: 9px;
    height: 500px;
    margin-right:550px;
    /* overflow: scroll; */
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 17px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #305a27);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #4d9c02);
  }
  ::-webkit-scrollbar-corner {
    border-radius: 20px;
    background: lightgray;
  }
}

</style>