import axios from "axios";
export default{
  data: () => {
    return{
      // users:null,
      // userId:""
    }
  },
  // mounted(){
  //   let token = localStorage.getItem("token");
  //   axios.get("http://localhost:8000/api/users/"+token+"?api_token="+token)
  //   .then(response => {
  //     //console.log(response);
  //     this.users = response.data.user;
  //     console.log(this.users.id);
  //   });
  // },
methods:{
     getData() {
        let token = localStorage.getItem("token");
        //console.log(this.user.id);   .get("http://localhost:8000/api/boards/"+this.user.id+"?api_token=" + token)
       // console.log(this.users);
        axios
          .get("http://localhost:8000/api/boards/?api_token=" + token)
          .then((response) => {
            console.log(response);
            this.boards = response.data.boards;
            
            //Event.$emit('boardsLoaded',this.boards);
          });
        }
}
}