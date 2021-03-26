<template>
  <AppDrop
    @drop="moveTaskOrColumn"
  >
    <AppDrag
      class="bg-gray-50 bg-opacity-30 ml-20 rounded mt-0 p-2"
      :transferData="{
        type: 'column',
        fromColumnIndex: columnIndex
      }"
    >
    <!-- <div> -->
    <!-- <div class="bg-gray-50 bg-opacity-30 ml-20 rounded mt-0 p-2" style="height:680px; width:450px;"
     >  -->
      <div class="grid grid-rows-1 grid-flow-col text-white ml-4 tracking-wider transform 
      uppercase mb-2 font-bold"
     style=""
      >
        {{ column.name }}
      </div>
      
        <div class="scroll" style="">
        <ColumnTask
          v-for="(task, $taskIndex) of column.tasks"
          :key="$taskIndex"
          :task="task"
          :taskIndex="$taskIndex"
          :column="column"
          :columnIndex="columnIndex"
          :conv="conv"
        />
      
        <!-- <div class="mb-96 list-reset" style="margin-bottom:1500px;"> -->
        <input
          type="text"
          class="p-2 w-full hover:bg-red-900 hover:bg-opacity-30 border border-white bg-white text-white text-xl tracking-wider"
          placeholder="+ Enter new issue" 
          @keyup.enter="createTask($event, column.tasks)"
        />
        </div>
      
      <!-- </div> -->
      <!-- </div> -->
    </AppDrag>
  </AppDrop>
</template>

<script>
import ColumnTask from './ColumnTask'
import AppDrag from './AppDrag'
import AppDrop from './AppDrop'
import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin'

export default {
  components: {
     ColumnTask,
    AppDrag,
    AppDrop
  },
  mixins: [movingTasksAndColumnsMixin],
  methods: {
    pickupColumn (e, fromColumnIndex) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('from-column-index', fromColumnIndex)
      e.dataTransfer.setData('type', 'column')
    },
    createTask (e, tasks) {
      this.$store.commit('CREATE_TASK', {
        tasks,
        name: e.target.value
     }) 
      e.target.value = ''
    }
  }
}
</script>

<style scoped>
.scroll {
  width:420px;
  margin-left:10px;
  height: 640px;
  overflow: scroll;
  }
::-webkit-scrollbar {
  background: transparent;
  width: 15px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #141414);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #efffeb);
}
::-webkit-scrollbar-corner {
  border-radius: 20px;
  background: lightgray;
}
</style>