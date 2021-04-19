
export const searchName ={
    computed:{
        filteredProjects:function(){
            return this.$store.state.admin.boards.filter((board)=>{
                return board.name.toLowerCase().match(this.search.toLowerCase()) 
                
            });
        }
    },

    // computed: {
    //     currentUserBoard: {
    //       get() {
    //         return this.$store.state.admin.boards;
    //       },
    //     },
    //   },
      created() {
        this.$store.dispatch("admin/getBoardData");
      },
}