import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from '../default-board'
import { saveStatePlugin,uuid} from '../utils'

Vue.use(Vuex)
const conv = JSON.parse(localStorage.getItem('con')) || defaultBoard
export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    conv,
    conversations:['fgfdfdf'],
    projects: [
      "Shufarys developmetn aprain",
      "Bus tailing devekioment aoraub",
      "Simuni development aprain",
      "Pharmacy development aprain",
      "Pharmacy development aprain",
      "Pharmacy development aprain",
      "Pharmacy developmetn aprain",
      "Pharmacy developmetn aprain",
      "Shufar development aprain",
      "Bus tailing developmett apain",
      "Simuni development apran",
      "Pharmacy developmetn apran",
      "Simuni development apran",
      "Pharmacy developmetn apran",
      "Shufar development aprain" 
      // { name: "Bus tailing developmett apain" },
      // { name: "Simuni development apran" },
      // { name: "Pharmacy developmetn apran" },
      // { name: "Simuni development apran" },
      // { name: "Pharmacy developmetn apran" },
      // { name: "form development apran" },
      // { name: "formy developmetn apran" },
      // { name: "formys development apran" },
      // { name: "pains developmetn apran" },
    ],
  },
  mutations: {
    ADD_CONVERSATION:(state,conversation)=>{
      state.conversations.push(conversation)
    },
    ADD_PROJECT:(state,project)=>{
      state.projects.push(project)
    } , 
     CREATE_TASK (state, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: ''
      })
    },
    CREATE_COLUMN (state, { name }) {
      state.conv.columns.push({
        name,
        tasks: []
      })
    },
    UPDATE_TASK (state, { task, key, value }) {
      task[key] = value
    },
    MOVE_TASK (state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0]
      toTasks.splice(toTaskIndex, 0, taskToMove)
    },
    MOVE_COLUMN (state, { fromColumnIndex, toColumnIndex }) {
      const columnList = state.board.columns

      const columnToMove = columnList.splice(fromColumnIndex, 1)[0]
      columnList.splice(toColumnIndex, 0, columnToMove)
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getTask (state) {
      return (id) => {
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task
            }
          }
        }
      }
    }
  }
})
