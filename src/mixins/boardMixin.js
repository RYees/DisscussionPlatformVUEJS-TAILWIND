//import axios from "axios";
export default {
  data: () => {
    return {};
  },
  computed: {
    currentUserBoard(){
      // get() {
        return this.$store.state.admin.boards;
      
    },
  },
  methods:{
    currentBoard(){
    this.$store.dispatch("admin/getBoardData");
    //this.boards
    }
  }
};
