
export const searchName ={
    computed:{
        filteredProjects:function(){
            return this.boards.filter((board)=>{
                return board.name.toLowerCase().match(this.search.toLowerCase()) 
                
            });
        }
    }
}