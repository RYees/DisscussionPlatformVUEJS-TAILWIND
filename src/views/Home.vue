<template>
  <div class="bac p-6 h-screen w-full overflow-y-hidden">
    <!-- <div class="" style="bottom:900px">
          <Header />
      </div> -->
    <div class="mt-0 mb-96 flex p-0">
      <p class="text-5xl mt-7 ml-20 text-white rounded tracking-wider">
        Share your <br />
        opinions!
      </p>
      <br />
    </div>
    <div class="h-screen flex items-center justify-center">
      <div class="scroll mt-1 p-0" style="margin-top:0px; margin-bottom:900px;">
        <comment />
      </div>
    </div>
  </div>
</template>

<script>
//import Header from '../components/Header.vue';
import comment from "@/views/comment.vue";
export default {
  data: () => {
    return {};
  },
  components: {
    comment,
    //Header
  },
};
</script>

<style scoped>
.bac {
  /* background: url("/mike.jpg"); */
  background-image: linear-gradient(
      to bottom,
      rgba(29, 30, 31, 0.52),
      rgba(39, 38, 39, 0.73)
    ),
    url("/mike.jpg");
  /* height: 3000px; */
}
.scroll {
  width: 3099px;
  margin-left: 50px;
  height: 770px;
  overflow-y: hidden;
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
/* @media (max-width: 2100px){
  .scroll {
  width:2099px;
  margin-left:50px;
  height: 680px;
  overflow-y: hidden

}
::-webkit-scrollbar {
  background: transparent;
  width: 12px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #ec190a);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #efffeb);
}
::-webkit-scrollbar-corner {
  border-radius: 20px;
  background: lightgray;
}

}
@media (max-width: 1600px){
   .scroll {
  width: 1100px;
  height: 400px;
}
::-webkit-scrollbar {
  background: transparent;
  width: 12px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #ec190a);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #efffeb);
}
::-webkit-scrollbar-corner {
  border-radius: 20px;
  background: lightgray;
}
}
@media (max-width: 1500px){
   .scroll {
  width: 1000px;
  height: 600px;
 }
::-webkit-scrollbar {
  background: transparent;
  width: 12px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #ec190a);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #efffeb);
}
::-webkit-scrollbar-corner {
  border-radius: 20px;
  background: lightgray;
}

}
@media (max-width: 1000px){

}
@media (max-width: 900px){
 .scroll {
  width: 500px;
  height: 600px;
}
::-webkit-scrollbar {
  background: transparent;
  width: 12px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #ec190a);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #efffeb);
}
::-webkit-scrollbar-corner {
  border-radius: 20px;
  background: lightgray;
}

}
@media (max-width: 900px){
 .scroll {
  width: 1150px;
  height: 900px;
  }
::-webkit-scrollbar {
  background: transparent;
  width: 12px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #ec190a);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #efffeb);
}
::-webkit-scrollbar-corner {
  border-radius: 20px;
  background: lightgray;
}
}  */
</style>
