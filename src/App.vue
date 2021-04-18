<template>
  <div id="app"> 
    <front></front> 
    <!-- <router-view /> -->
  </div>
</template>

<script>
import front from '@/views/front.vue'
import axios from 'axios'
export default {
  name:'App',
  components:{
   front,
  },  
  data: () => {
    return {
      user:null,
      loggedIn:false
      };
  },
  created(){
    Event.$on('login',($user)=>{
      this.user=$user;
      this.CurrentUserData(); 
    })

    // Event.$on('logout',()=>{
    //   this.loggedIn=false; 
    // })
    
  },
  methods:{
    CurrentUserData(){
    let token = localStorage.getItem('token');
    axios.get("http://localhost:8000/api/users/"+token+"?api_token="+token)
      .then(response => {
        console.log(response);
        this.user = response.data.user;
      });
    }
  }
}
</script>
<style src="@/assets/tailwind.css">

</style>


