<template>
    <div>
    <div class="">
      <button 
      @click.prevent="Invite"
      class="bg-red-400 hover:bg-gray-500 hover:bg-opacity-30 bg-opacity-30 h-14 focus:outline-none rounded-lg px-2 text-2xl mt-0 text-white" style="margin-left:500px">
      InviteMembers
      </button>
    </div>
    <div
      v-if="isInvite"
      class="flex justify-center z-40 bg-white bg-opacity-95 absolute border border-gray-600 rounded-lg h-40 p-6 overflow-hidden shadow-xl transform transition-all"
      style="top:70px; width:400px; height:505px; left:390px;"
      role="dialog"
      aria-modal="false"
      aria-labelledby="modal-headline"
    >
      <form action="" @submit.prevent="createInvitation">
          <div>
         <input type="email" value="" class="shadow-2xl text-gray-900 px-5 h-20 w-80" placeholder="Email address"
         v-model="newEmail"
         /></div>
         <!-- <div v-for="(find,index) in finds" :key="index">
         <input type="email" value="" class="shadow-2xl text-gray-900 px-5 h-20 w-80" placeholder="Email address"
         v-model="find.value"
         /></div> -->
         <!-- <div class="scroll">
             <ul >
                 <li class="mt-1 text-gray-900 text-xl">
                     {{find.value}}
                 </li>
             </ul>
         </div> -->
         <!-- <div class="scroll">
             <ul >
                 <li class="mt-1 text-gray-900 text-xl" v-for="(email,index) in emails" :key="index">
                     {{email}}
                 </li>
             </ul>
         </div> -->
         <div class="mt-6">
             <button class="bg-green-500 transform hover:scale-110 focus:outline-none p-2 rounded text-white text-xl">
                sendMember
             </button>
         </div>
      </form>
    </div>
    </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
import axios from 'axios'
export default {
  props:["board"],
    data:()=>{
        return{
            isInvite:false,
            newEmail:"",
        }
    },
    computed: mapState([
       'emails'
    ]),
    created() {
    this.boardId = this.$route.params.id;
    console.log(this.boardId);
    //this.getData();
  },
    methods:{
        ...mapMutations([
            'ADD_EMAIL'
        ]),
        Invite:function(){
            this.isInvite = !this.isInvite
        },
        addEmail: function() {
        this.ADD_EMAIL(this.newEmail)
        this.newEmail= ''
    },
    createInvitation() {
      let token = localStorage.getItem("token");
    
      axios.post("http://localhost:8000/api/users/invite/"+this.boardId+"?api_token=" + token,
          {
            email: this.newEmail,       
          }
        )
        .then((response) => {
          let itoken=response.data.invite.token;
          localStorage.setItem('token',itoken);
          this.newEmail="";
          console.log(response);
          console.log(itoken);
        });
    },
    }
}
</script>

<style scoped>

.scroll {
  width: 300px;
  margin-left:20px;
  margin-top:5px;
  height: 300px;
  overflow: scroll;
 }
::-webkit-scrollbar {
  background: transparent;
  width: 16px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #161515);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #0f0f0f);
}
::-webkit-scrollbar-corner {
  border-radius: 10px;
  background: lightgray;
}
</style>