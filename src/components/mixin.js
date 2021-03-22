export default{
    computed:{
        filteredProjects:function(){
            return this.projects.filter((project)=>{
                return project.toLowerCase().match(this.search.toLowerCase()) 
                
            });
        }
    }
}