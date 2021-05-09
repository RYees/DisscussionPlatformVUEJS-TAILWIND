// import axiosLib from 'axios';
// const axios = axiosLib.create({
//   baseURL: "http://localhost:8000/api"
// });
export const searchName = {
  // data: () => ({
  //   boards: [],
  //   currentUserBoard:[]
  // }),
  // async created() {
  //   let token = localStorage.getItem("token");
  //   let { data } = await axios.get("/boards/?api_token=" + token);
  //   this.boards = data.boards;
  // },
  // computed: {
  //   filteredProjects() {
  //     let normalizedQuery = this.search.trim().toLowerCase();
  //     if (normalizedQuery.length) {
  //       return this.boards.filter(({ name }) =>
  //         name.toLowerCase().startsWith(normalizedQuery)
  //       );
  //     }
  //     return this.boards;
  //   },
  // },
  computed:{
      filteredProjects:function(){
          return this.currentUserBoard.filter((board)=>{
              return board.name.toLowerCase().match(this.search.toLowerCase())

          });
      },
      currentUserBoard: {
          get() {
            return this.$store.state.admin.boards;
          },
        },
  },

   created() {
    this.$store.dispatch("admin/getBoardData");
  },
};
