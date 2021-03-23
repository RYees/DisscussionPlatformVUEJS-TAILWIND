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
    projects:[
      {id:1, name: 'Bus tailing developmett apain' },
      {id:2, name: 'Simuni development apran' },
      {id:3, name: 'Pharmacy developmetn apran' },
      {id:4, name: 'Simuni development apran' },
      {id:5, name: 'Pharmacy developmetn apran' },
      {id:6, name: 'form development apran' },
      {id:7, name: 'formy developmetn apran' },
      {id:8, name: 'formys development apran' },
      {id:9, name: 'pains developmetn apran' },
    ]
  },
  mutations: {
    ADD_PROJECT:(state,{name})=>{
      state.projects.push({
        name,
        id: uuid(),
      })
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
      const columnList = state.conv.columns

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
        for (const column of state.conv.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task
            }
          }
        }
      }
    },
    project:state=>id=>{
      return state.projects.find(project=>project.id == id);
    },
   
  }
})
