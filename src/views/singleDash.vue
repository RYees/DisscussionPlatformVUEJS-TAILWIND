<template>
   <div class="user p-6 h-screen w-full overflow-y-hidden">
    <!-- <router-link class="text-3xl text-center text-white animate-none uppercase mt-8 absolute ml-60" to="/dashboard">back</router-link> -->
   <div class="flex justify-start mt-10 absolute">
    <div class="" v-if="project">
        <h1 class="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-white animate-bounce absolute ml-0">{{project.name}}</h1>
    </div>
    <div class="">
      <Invitation/>
    </div>
    </div>
      <div class="h-screen flex items-center justify-center">
      <div class="scroll mt-1 p-0" style="margin-top:100px; margin-bottom:0px;">
        <comment />
      </div>
    </div>
</div>

</template>
<script>
import comment from "@/views/comment.vue";
import Invitation from './Invitation.vue';
export default {
     computed:{
        project(){
            return this.$store.getters.project(parseInt(this.$route.params.id));
        }
    },
    components:{
        comment,
        Invitation
    }
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
  width: 3099px;
  margin-left: 1000px;
  height: 770px;
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
</style>