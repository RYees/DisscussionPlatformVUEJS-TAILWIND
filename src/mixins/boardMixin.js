//import axios from "axios";
export default {
  data: () => {
    return {};
  },
  computed: {
    currentUserBoard: {
      get() {
        return this.$store.state.admin.boards;
      },
    },
  },
  created() {
    this.$store.dispatch("admin/getBoardData");
  },
  // methods: {
  //   getData() {
  //     let token = localStorage.getItem("token");
  //     axios
  //       .get("http://localhost:8000/api/boards/?api_token=" + token)
  //       .then((response) => {
  //         console.log(response);
  //         this.boards = response.data.boards;

  //         //Event.$emit('boardsLoaded',this.boards);
  //       });
  //   },
  // },
};
