import axios from "axios";
export default{
methods:{
    getData() {
        let token = localStorage.getItem("token");
        console.log(token);
        axios
          .get("http://localhost:8000/api/boards?api_token=" + token)
          .then((response) => {
            console.log(response);
            this.boards = response.data.boards;
            //Event.$emit('boardsLoaded',this.boards);
          });
        }
}
}