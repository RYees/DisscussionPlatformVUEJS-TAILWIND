<template>
  <div>
    <div class="main">
      <navbar />
      <main>
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
      </main>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
export default {
  //props: ["title"],
  data() {
    return { title: "mi" };
  },
  components: {
    navbar,
  },
};
</script>
<style scoped>
body {
  padding: 30px;
}
.slide-enter-active {
  animation: slide-in 600ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 900ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
