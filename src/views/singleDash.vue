<template>
   <div class="user p-6 h-screen w-full overflow-y-hidden">
    <!-- <router-link class="text-3xl text-center text-white animate-none uppercase mt-8 absolute ml-60" to="/dashboard">back</router-link> -->
   <div class="flex justify-start mt-10 absolute">
    <div class="">
        <h1 class="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-white animate-bounce absolute ml-0"
        style="margin-top:0px; margin-bottom:0px;"
        >{{currentUserBoard.name}}</h1>
    </div>
    <div class="" v-if="currentRole[0].pivot.role_id == 1">
      <Invitation/>
    </div>
    </div>
      <!-- <div class="h-screen flex items-center justify-center"> v-if="this.roles[0].pivot.role_id == 1"-->
      <div class="scroll" style="">
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
    url("/mike.jpg");
}
.scroll {
  width: 9px;
  margin-left: 10px;
  height: 770px;
  /* overflow:scroll; */
  /* overflow-y: hidden; */
}
::-webkit-scrollbar {
  background: transparent;
  width: 20px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #f54040);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #f6f8f6);
}
::-webkit-scrollbar-corner {
  border-radius: 20px;
  background: lightgray;
}


@media (max-width: 1536px){
  .scroll {
  width: 3099px;
  margin-left: 1000px;
  height: 770px;
  /* overflow:scroll; */
  /* overflow-y: hidden; */
}
::-webkit-scrollbar {
  background: transparent;
  width: 20px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #f54040);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #f6f8f6);
}
::-webkit-scrollbar-corner {
  border-radius: 20px;
  background: lightgray;
}
 }
@media (max-width: 1280px){
 .scroll {
  width: 3099px;
  margin-left: 1900px;
  height: 770px;
  /* overflow:scroll; */
  /* overflow-y: hidden; */
}
::-webkit-scrollbar {
  background: transparent;
  width: 20px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #f54040);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #f6f8f6);
}
::-webkit-scrollbar-corner {
  border-radius: 20px;
  background: lightgray;
}
}
@media (max-width: 1024px){
 .scroll {
  width: 3099px;
  margin-left: 1000px;
  height: 770px;
  /* overflow:scroll; */
  /* overflow-y: hidden; */
}
::-webkit-scrollbar {
  background: transparent;
  width: 20px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #f54040);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #f6f8f6);
}
::-webkit-scrollbar-corner {
  border-radius: 20px;
  background: lightgray;
}
}
@media (max-width: 768px){
.scroll {
  width: 3099px;
  margin-left: 2200px;
  height: 770px;
  /* overflow:scroll; */
  /* overflow-y: hidden; */
}
::-webkit-scrollbar {
  background: transparent;
  width: 20px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #f54040);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #f6f8f6);
}
::-webkit-scrollbar-corner {
  border-radius: 20px;
  background: lightgray;
}
}
</style>