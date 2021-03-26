<template>
  <div class="p-0 h-full" style="">
    <div id="pop-up" class="column flex w-80 mb-6"
       style="margin-top:0px; margin-left:300px;"> 
  
    <input
      type="text"
      class="p-2 px-16 mt-0 w-80 rounded shadow-xl hover:bg-red-900 hover:bg-opacity-30 border border-white bg-white text-white text-xl tracking-wider flex-grow mr-1"
      placeholder="Enter your name"
      v-model="newColumnName"
      required 
      @keyup.enter="createColumn"
    />
    </div> 
    <!-- <div class="2xl:grid 2xl:grid-rows-1 2xl:grid-flow-col xl:grid xl:grid-rows-2 xl:grid-flow-col
               lg:grid lg:grid-rows-1 lg:grid-flow-col md:grid md:grid-rows-1 md:grid-flow-col
               sm:grid sm:grid-rows-1 sm:grid-flow-col
   " style=""> -->
   <div class="grid grid-rows-1 grid-flow-col" style="">
      <BoardColumn
      class="" style=""
      v-for="(column, $columnIndex) of conv.columns"
        :key="$columnIndex"
        v-bind:column="column"
        v-bind:columnIndex="$columnIndex"
        v-bind:conv="conv"
      />
    </div>

    <div
      class="task-bg bg-white text-white pin absolute"
      v-if="isTaskOpen"
      @click.self="close"
    >
      <router-view/>
    </div>
</div>
  
  
</template>

<script>
import {mapState} from 'vuex'
import BoardColumn from '@/components/BoardColumn'
export default {
  components: { BoardColumn },
    data:()=>{
        return{
            name:'',
            newColumnName: '',
          }
    },
    //  computed: mapState([
    //     'conversations',
    //     'conv'
    // ]),
    computed: {
    ...mapState(['conv']),
    isTaskOpen () {
      return this.$route.name === 'task'
    }
  },
    methods:{
      close () {
      this.$router.push({ name: 'comment' })
    },
      createColumn () {
      this.$store.commit('CREATE_COLUMN', {
        name: this.newColumnName
      })

      this.newColumnName = ''
    },
       
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

</style>