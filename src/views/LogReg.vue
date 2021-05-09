<template>
  <div
    class="pic flex justify-between h-screen fixed w-full overscroll-y-hidden"
  >
    <div class="pic flex justify-center items-center h-screen fixed w-full">
      <h1
        class="ml-14 text-6xl text-gray-900 tracking-wider transform capitalize "
      >
        Welcome to Zowi discussion platform
      </h1>
      <!-- <keep-alive>
            <component v-bind:is="component"></component>
        </keep-alive> -->
    </div>
    <div
      class="flex justify-end fixed h-screen w-full "
      style="top:10px; right:50px;"
    >
      <router-link
        to="/login"
        class="hover:bg-white hover:bg-opacity-30 h-10 py-1 px-2 rounded-lg text-left focus:outline-none text-xl cursor-pointer text-gray-900"
        >Login</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      component: "login",
    };
  },
  methods: {},
};
</script>

<style scoped>
.pic {
  background-image: linear-gradient(
      to bottom,
      rgba(255, 167, 4, 0.52),
      rgba(241, 241, 241, 0.73)
    ),
    url("/back1.jpg");
}
.may {
  display: none;
}

.myDIV:hover + div {
  display: block;
}

@media (max-width: 1536px) {
  .logtext {
    right: 50px;
  }
}
@media (max-width: 1280px) {
  .logtext {
    right: 840px;
  }
}
@media (max-width: 1024px) {
  .logtext {
    right: 540px;
    /* //right:2000px; */
  }
}
@media (max-width: 768px) {
  .logtext {
    right: 340px;
  }
}
@media (max-width: 640px) {
  .logtext {
    right: 40px;
    /* margin-top:16px; */
  }
}
</style>
