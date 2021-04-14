import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from '../default-board'
import { saveStatePlugin,uuid} from '../utils'

Vue.use(Vuex)
const conv = JSON.parse(localStorage.getItem('con')) || defaultBoard
export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    emails:['youright@gmail.com'],
    conv,
    boards:[],
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
      {id:10, name: 'form development apran' },
      {id:11, name: 'formy developmetn apran' },
      {id:12, name: 'formys development apran' },
      {id:13, name: 'pains developmetn apran' },
      {id:14, name: 'form development apran' },
      {id:15, name: 'formy developmetn apran' },
      {id:16, name: 'formys development apran' },
      {id:17, name: 'pains developmetn apran' },
      {id:18, name: 'form development apran' },
      {id:19, name: 'formy developmetn apran' },
      {id:20, name: 'formys development apran' },
      {id:21, name: 'pains developmetn apran' },
      {id:10, name: 'form development apran' },
      {id:11, name: 'formy developmetn apran' },
      {id:12, name: 'formys development apran' },
      {id:13, name: 'pains developmetn apran' },
      {id:14, name: 'form development apran' },
      {id:15, name: 'formy developmetn apran' },
      {id:16, name: 'formys development apran' },
      {id:17, name: 'pains developmetn apran' },
      {id:18, name: 'form development apran' },
      {id:19, name: 'formy developmetn apran' },
      {id:20, name: 'formys development apran' },
      {id:21, name: 'pains developmetn apran' },
      {id:17, name: 'pains developmetn apran' },
      {id:18, name: 'form development apran' },
      {id:19, name: 'formy developmetn apran' },
      {id:20, name: 'formys development apran' },
      {id:21, name: 'pains developmetn apran' },
      {id:10, name: 'form development apran' },
      {id:11, name: 'formy developmetn apran' },
      {id:12, name: 'formys development apran' },
      {id:13, name: 'pains developmetn apran' },
      {id:14, name: 'form development apran' },
      {id:15, name: 'formy developmetn apran' },
      {id:16, name: 'formys development apran' },
      {id:17, name: 'pains developmetn apran' },
      {id:18, name: 'form development apran' },
      {id:19, name: 'formy developmetn apran' },
      {id:20, name: 'formys development apran' },
      {id:21, name: 'pains developmetn apran' },
      {id:17, name: 'pains developmetn apran' },
      {id:18, name: 'form development apran' },
      {id:19, name: 'formy developmetn apran' },
      {id:20, name: 'formys development apran' },
      {id:21, name: 'pains developmetn apran' },
      {id:10, name: 'form development apran' },
      {id:11, name: 'formy developmetn apran' },
      {id:12, name: 'formys development apran' },
      {id:13, name: 'pains developmetn apran' },
      {id:14, name: 'form development apran' },
      {id:15, name: 'formy developmetn apran' },
      {id:16, name: 'formys development apran' },
      {id:17, name: 'pains developmetn apran' },
      {id:18, name: 'form development apran' },
      {id:19, name: 'formy developmetn apran' },
      {id:20, name: 'formys development apran' },
      {id:21, name: 'rehmet' },
      
    ]
  },
  mutations: {
    ADD_EMAIL:(state,email) => {
      state.emails.push(email)
    },
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
    CREATE_LISTS (state, { name }) {
      state.boards.lists.push({
        name,
        cards: []
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
    board:state=>id=>{
      return state.boards.find(board=>board.id == id);
    },
    project:state=>id=>{
      return state.projects.find(project=>project.id == id);
    },
  }
})
