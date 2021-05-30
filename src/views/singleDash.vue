<template>
  <div
    class="user bg-red-900 p-6 h-screen w-full overflow-y-hidden flex justify-center items-center "
  >
  <div>
   
  </div>
    <!--  <Spinner/><router-link class="text-3xl text-center  flex items-center justify-center text-white animate-none uppercase mt-8 absolute ml-60" to="/dashboard">back</router-link> -->
    <div class="scroll" style="margin-left:100px">
      <comment />
    </div>

    <div
      class=""
      style="margin-bottom:800px; margin-left:40px; height:10px;"
    >
      <!-- <div class="">
        <h1 class="xl:text-3xl lg:text-2xl flex items-center justify-center overflow-hidden md:text-xl text-white animate-bounce absolute ml-0"
        style="margin-top:0px; margin-bottom:0px;"
        >{{currentUserBoard.name}}</h1>
    </div> -->
      <div
        class=""
        v-if="Object.keys(allRoles).length !== 0 && allRoles !== undefined"
      >
        <div
          class="w-1"
          style=""
          v-if="allRoles[0].pivot.role_id == 1"
        >
          <Invitation />
        </div>
      </div>
    </div>
    <!-- <div class="h-screen flex items-center justify-center"> v-if="this.roles[0].pivot.role_id == 1"-->

    <!-- </div> -->
  </div>
</template>
<script>
//import Spinner from '@/components/Spinner.vue';
import comment from "@/views/comment.vue";
import Invitation from "./Invitation.vue";
import { mapGetters, mapActions} from "vuex";
export default {
  data() {
    return {    
    };
  },
  computed:{
    ...mapGetters(["allRoles"]),
     
    },
  methods: {
    ...mapActions(["currrentUserRole"]),
  },
  created() {
    this.currrentUserRole();
  },
  components: {
    // Spinner,
    comment,
    Invitation,
  },
};
</script>
<style>
.user {
  background-image: linear-gradient(
      to bottom,
      rgba(29, 30, 31, 0.52),
      rgba(39, 38, 39, 0.73)
    ),
    url("/mike5.jpg");
}
@media (max-width: 1536px) {
  .scroll {
    width: 9px;
    height: 300px;
    margin-bottom: 230px;
    margin-right: 1390px;
    /* overflow: scroll; */
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 18px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #da521c);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #ca8011);
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
    margin-top: 200px;
    margin-right: 1200px;
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
    margin-top: 190px;
    margin-right: 900px;
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
    margin-top: 190px;
    margin-right: 700px;
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
    margin-top: 215px;
    margin-right: 400px;
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
