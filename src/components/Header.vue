<template>
  <div
    class="z-10 cursor-pointer fixed inset-x-0 w-full bg-gray-50 bg-opacity-75 flex justify-between"
    v-if="showHeader"
  >
    <div class="flex">
      <p class="inline-block">
        <router-link to="/dashboard">
          <svg
            class="h-12 py-1 w-12 ml-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            /></svg
        ></router-link>
      </p>
      <p class="inline-block ml-2">
        <router-link to="/home">
          <svg
            class="h-12 py-1 w-12 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            /></svg
        ></router-link>
      </p>
      <router-link to="/board">
        <button
          class="inline-block ml-48 text-xl tracking-wider mt-1 absolute mb-5"
          style="margin-bottom:1000px"
        >
          Project name
        </button></router-link
      >
    </div>

    <!-- <p>
     <button
      class="h-11 w-11 p-1 mt-0 px-1 text-xl tracking-wider bg-white focus:outline-none float-left mr-1"
      style="border-radius:50%;"
      @click.prevent="showModal"
    >
      RY
    </button>
    </p> -->
    <div class="">
      <profile />
    </div>

    <!-- <p
      class="inline-block ml-96 text-xl tracking-wider mt-1 absolute mb-5"
      style="margin-bottom:1000px"
    >
      <svg
        class="h-9 py-1 w-10 ml-96 inline-block"
        style="margin-left:850px"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      Logout
    </p> -->
    <!-- <p
      class="inline-block ml-96 h-9 w-10 p-1 px-2 text-xl tracking-wider mt-1 absolute mb-10 bg-white"
      style="margin-bottom:1000px; border-radius:50%; margin-left:1340px;"
    >
    RY 
  </p> -->
  </div>
</template>

<script>
import profile from "@/views/profile";
export default {
  data: () => {
    return {};
  },
  components: {
    profile,
  },
  computed:{
    showHeader(){
      return this.$route.name !== 'login';
    }
  }
};
</script>
<style>
/* @media (max-width: 2100px){
.header{
  width:2100px;
}

}
@media (max-width: 1900px){
 .header{
  width:1890px;
}

}
@media (max-width: 1800px){
 .header{
  width:1710px;
}

}
@media (max-width: 1700px){
 .header{
  width:1590px;
}

}
@media (max-width: 1600px){
 .header{
  width:1530px;
}
}
@media (max-width: 1550px){
 .header{
  width:1490px;
}
}

@media (max-width: 1500px){
.header{
  width:1240px;
}
}
@media (max-width: 1000px){
.header{
  width:930px;
}
}
@media (max-width: 900px){
.header{
  width:716px;
}
} */
</style>
