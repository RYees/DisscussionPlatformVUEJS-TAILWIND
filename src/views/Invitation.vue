<template>
    <div class="flex justify-end">
    <!-- <div > -->
      <button 
      @click.prevent="Invite"
      class="inv bg-yellow-400 transition duration-700 ease-in-out hover:bg-yellow-500 hover:bg-opacity-30 bg-opacity-9 mb-0 h-10 focus:outline-none rounded-lg px-3 text-lg text-white" 
      style="">
      InviteMembers
      </button>
    <!-- </div> -->
    
    <div
      v-if="isInvite"
      class="mod z-40 bg-yellow-500 bg-opacity-75 absolute border border-gray-600 rounded-lg h-40 p-6 overflow-hidden shadow-xl transform transition-all"
      style="width:300px; height:305px; "
      role="dialog"
      aria-modal="false"
      aria-labelledby="modal-headline"
    >
     <form action="" @submit.prevent="createInvitation">
          <div>
        <div class="shadow bg-blue-500 bg-opacity-95 h-16 w-64" v-if="isSubmitted">
        <h3 style="padding:15px" class="shadow flex justify-center w-64 bg-yellow-500 bg-opacity-75 h-16 text-white text-sm flex-1 transform capitalize">
          {{flashMessage}}
        </h3>
      </div><br>
         <input type="email" value="" class="text-sm shadow-2xl text-gray-900 px-5 h-16 w-64" placeholder="Email address" required
         v-model="newEmail"
         /></div>
       <div class="mt-6">
             <button class="bg-green-900 bg-opacity-75 h-10 transition duration-700 ease-in-out transform hover:scale-110 focus:outline-none p-1 px-4 rounded text-white text-sm">
                sendMember
             </button>
         </div>
      </form>
   
    </div>
   
       
    </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
import axiosLib from "axios";
const axios = axiosLib.create({
  baseURL: "https://zowidiscussionapi.herokuapp.com/api"
});
// const axios = axiosLib.create({
//   baseURL: "http://localhost:8000/api",
// });
export default {
  props:["board"],
    data:()=>{
        return{
            isInvite:false,
            isSubmitted:false,
            newEmail:"",
            flashMessage:'Email sent successfully!!!',
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
    
      axios.post("/users/invite/"+this.boardId+"?api_token=" + token,
          {
            email: this.newEmail,       
          }
        )
        .then((response) => {
          //this.isSubmitted = true;
            if(response.status == 202){
                this.flashMessage= response.data.message;
              } else if(response.status == 200){
                this.flashMessage= response.data.message;
              }
             this.isSubmitted = true;
                    setTimeout(()=>{
                    this.isSubmitted = false;
             },3000);
                     
          //this.flashMessage= response.data.message;
          //console.log(response.data.message);
         // let itoken=response.data.invite.token;
         // localStorage.setItem('token',itoken);
          this.newEmail="";
          // console.log(response);
          // console.log(itoken);
                   
        });
    },
    }
}
</script>

<style scoped>
@media (max-width: 1536px) {
.inv{
  /* margin-left:1280px; */
  margin-right:100px;
  margin-top: 134px;
}
.mod{
  left:1054px;
  top:75px;
}
}
@media (max-width: 1280px) {
.inv{
  margin-right:105px;
  margin-top:140px;
}
.mod{
  left:865px;
}
}
@media (max-width: 1024px) {
.inv{
  margin-right:30px;
  margin-top:140px;
}
.mod{
  left:700px;
}
}
@media (max-width: 768px) {
.inv{
  margin-right:70px;
  margin-top:140px;
}
 .mod{
  left:440px;
  margin-top: 1px;
}
}
@media (max-width: 640px) {
.inv{
  margin-right:30px;
  margin-top:140px;
}
.mod{
  left:183px;
  margin-top:1px;
}
}

</style>