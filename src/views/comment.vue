<template>
  <div class="board p-0 h-full" style="">
    <div id="pop-up" class="column flex w-80 mb-6"
       style="margin-top:0px; margin-left:300px;"> 
  
    <input
      type="text"
      class="p-2 px-16 mt-0 w-80 rounded  shadow-xl hover:bg-red-900 hover:bg-opacity-30 border border-white bg-white text-white text-xl tracking-wider flex-grow mr-1"
      placeholder="Enter your name"
      v-model="newColumnName"
      required 
      @keyup.enter="createColumn"
    />
    </div> 
   <div class="grid grid-rows-1 grid-flow-col" style="">
     <!-- <div class="grid grid-rows-1 grid-flow-col overflow-x-auto overflow-y-none h-96" style="height:800px"> TO CREATE A SCROLL-->
     <!-- <div class="wrapper"> -->
      <BoardColumn
      class="" style=""
      v-for="(column, $columnIndex) of conv.columns"
        :key="$columnIndex"
        :column="column"
        :columnIndex="$columnIndex"
        :conv="conv"
      />
    </div>

    <!-- <div
      class="task-bg bg-white text-white pin absolute"
      v-if="isTaskOpen"
      @click.self="close"
    >
      <router-view/>
    </div> -->
</div>
  
  
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import BoardColumn from '@/components/BoardColumn'
export default {
  components: { BoardColumn },
    data:()=>{
        return{
            name:'',
            newColumnName: '',
          }
    },
     computed: mapState([
        'conversations',
        'conv'
    ]),
    methods:{
      ...mapMutations([
        'ADD_CONVERSATION'
      ]),
      createColumn () {
      this.$store.commit('CREATE_COLUMN', {
        name: this.newColumnName
      })

      this.newColumnName = ''
    },
        inputModal:function(){
            this.inputShow = !this.inputShow
        },
        nameModal:function(){
            this.nameShow = !this.nameShow
        },
        textModal:function(){
          this.textShow =!this.textShow
            // this.ADD_CONVERSATIONS(this.textShow)
            // this.textarea = ''
        },
        addConversation:function(){
            this.ADD_CONVERSATION(this.newConversation)
            this.newConversation = ''
        }
    }
};
</script>


<style scoped>
.column {
  margin-left:-200px;
  animation:drop 0.5s ease forwards;
}
@keyframes drop{
  0%{opacity: 0}
  70%{transform: translateX(800px)}
  100%{transform: translateX(750px); opacity: 1;}
  
}

@media (max-width: 2100px){
.tab{
  display:grid;
  grid-template-rows:30% ;
  grid-row-gap: 0px;
   grid-row-gap: 0px;
  margin-left:100px;
}
}
@media (max-width: 1600px){
.table{
  display:grid;
  grid-template-columns:30% 30% 30%;
  grid-column-gap: 0px;
  margin-left:100px;
}
.dash{
  margin-left: 200px;
}
.search{
  margin-right: 300px;
}
.iconsearch{
  margin-left: 680px;
}
.modal{
  margin-left: 900px;
}
}
@media (max-width: 1500px){
.tab{
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow:row;
  grid-auto-rows:minmax(600px,auto);
  grid-column-gap:0px;
  /* grid-row-gap: 0px; */
  margin-left:330px;
}
}
@media (max-width: 1000px){
.tab{
  display:grid;
  grid-auto-flow:row;
  grid-auto-rows:minmax(600px,auto);
  /* grid-column-gap:2px; */
  grid-row-gap: 0px;
  margin-left:630px;
}
}
@media (max-width: 900px){
.tab{
  display:grid;
  grid-auto-flow:row;
  grid-auto-rows:minmax(680px,auto);
  /* grid-column-gap:2px; */
  grid-row-gap: 0px;
  margin-left:630px;
}
}
</style>