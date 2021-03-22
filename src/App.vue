<template>
  <div id="app">
    <front /> 
    <!-- <router-view /> -->
  </div>
</template>

<script>
 import front from '@/views/front.vue'

export default {
  name:'App',
  components:{
   front,
  }
}
</script>
<style src="@/assets/tailwind.css">

</style>


