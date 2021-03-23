export default{
    computed:{
        filteredProjects:function(){
            return this.projects.filter((project)=>{
                return project.name.toLowerCase().match(this.search.toLowerCase()) 
                
            });
        }
    }
}