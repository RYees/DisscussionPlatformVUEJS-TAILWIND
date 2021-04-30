<template>
    <div class="flex justify-end">
    <!-- <div > -->
      <button 
      @click.prevent="Invite"
      class="bg-yellow-400 transition duration-700 ease-in-out hover:bg-yellow-500 hover:bg-opacity-30 bg-opacity-9 mb-96 5 h-14 focus:outline-none rounded-lg px-5 text-2xl text-white" 
      style="">
      InviteMembers
      </button>
    <!-- </div> -->
    
    <div
      v-if="isInvite"
      class="mod z-40 bg-yellow-500 bg-opacity-75 absolute border border-gray-600 rounded-lg h-40 p-6 overflow-hidden shadow-xl transform transition-all"
      style="top:60px; width:400px; height:505px;"
      role="dialog"
      aria-modal="false"
      aria-labelledby="modal-headline"
    >
     <form action="" class="" v-if="!isSubmitted" @submit.prevent="createInvitation">
          <div>
         <input type="email" value="" class="shadow-2xl text-gray-900 px-5 h-20 w-80" placeholder="Email address" required
         v-model="newEmail"
         /></div>

         <!-- <div >
         <input type="email" value="" class="shadow-2xl text-gray-900 px-5 h-20 w-80" placeholder="Email address"
         v-model="email"
         /></div>
         <div class="scroll" v-for="(find,index) in finds" :key="index">
             <ul >
                 <li class="mt-1 text-gray-900 text-xl">
                     {{find.email}}
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
             <button class="bg-green-900 bg-opacity-75 transition duration-700 ease-in-out transform hover:scale-110 focus:outline-none p-4 rounded text-white text-2xl">
                sendMember
             </button>
         </div>
      </form>
   
    </div>
   
        <div class="" v-if="isSubmitted">
        <h3 style="margin-left:1200px; padding:20px" class="bg-yellow-300 w-72 px-1 rounded py-2 bg-opacity-30 text-white text-3xl transform capitalize">
          Invitation is sent!
        </h3>
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
            isSubmitted:false,
            newEmail:"",
            finds:[]
        }
    },
    computed: mapState([
       'emails'
    ]),
    created() {
    this.boardId = this.$route.params.id;
    //console.log(this.boardId);
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
          this.isSubmitted = true;
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
 .mod{
  left:1598px;
}
::-webkit-scrollbar {
  background: transparent;
  width: 16px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #6b5e2e);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #da9605);
}
::-webkit-scrollbar-corner {
  border-radius: 10px;
  background: lightgray;
}

@media (max-width: 1536px) {
.mod{
  left:1085px;
}
}
@media (max-width: 1280px) {
.mod{
  left:795px;
}

}
@media (max-width: 1024px) {
.mod{
  left:499px;
  /* //right:2000px; */
}
}
@media (max-width: 768px) {
 .mod{
  left:300px;
}
 
}
@media (max-width: 640px) {
 .mod{
  left:0px;
}
}
</style>