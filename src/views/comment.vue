<template>
  <div
    class="p-0 h-full"
    style=""
    @click.stop="
      upModal = false;
      deleteModal = true;
      updateListId = null;
    "
  >
    <div class="w-8 mb-6 bg-white" style="margin-right:4000px; margin-top:110px;">
      <input
        type="text"
        class="p-2 px-16 mt-0 w-80 rounded shadow-xl hover:bg-red-900 hover:bg-opacity-30 border border-white bg-white text-white text-xl tracking-wider"
        placeholder="Enter your name"
        v-model="listName"
        required
        @keyup.enter="createList"
      />
    </div>
      <draggable
          class="grid grid-rows-1 grid-flow-col gap-5 rounded p-2"
          v-model="lists"
          :options="{ group: 'lists' }"
       >
      <div
        class="text-white bg-gray-50 bg-opacity-30 font-bold"
        v-for="list in lists"
        :key="list"
        style="height:650px; width:450px;"
      >
        
          <div
            v-if="deleteListId == list.id"
            @click.stop="deleteList();  deleteModal= fa;"
            class="inline-block ml-2 bg-white shadow-xl border border-gray-400 hover:bg-red-500 hover:text-white z-40 w-20 h-10 cursor-pointer rounded text-gray-900 text-xl p-1 "
          >
            Delete
          </div>

          <button
            class="focus:outline-none cursor-pointer"
           @click="deleteListId = list.id"
           v-else 
          >
            <svg
              class="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>

          <input
            type="text"
            @click.stop
            v-model="listName"
            class="text-gray-600 h-10 mb-1 w-80"
            label="list.name"
            v-if="updateListId == list.id"
            @keyup.enter="updateList"
          />
          <div
            class="inline-block tracking-wider transform uppercase ml-40 text-xl"
            @click="updateListId = list.id"
            @click.stop="upModal = true"
            v-else
          >
             
            {{ list.name }}
          </div>
        
        <board-column class="" :list="list" v-on:cardcreated="getData"></board-column>
      </div></draggable>
    </div>
</template>

<script>
import BoardColumn from "@/components/BoardColumn";
import axios from "axios";
import draggable from "vuedraggable";
export default {
  components: { "board-column": BoardColumn, draggable },
  data: () => {
    return {
      boards: "",
      lists:"",
      cards: "",
      boardId: "",
      listId: "",
      name: "",
      newColumnName: "",
      listName:"",
      deleteMode: false,
      updateListId: "",
      deleteListId: "",
      upModal: false,
      deleteModal:false
    };
  },
  created() {
    this.boardId = this.$route.params.id;
    console.log(this.boardId);
    this.getData();
  },
  methods: {
    deleteModal() {
      this.deleteMode = !this.deleteMode;
    },
    getLists() {
      this.boards.map((board) => {
        if (board.id == this.boardId) {
          return (this.lists = board.lists);
        }
      });
    },
    getData() {
      let token = localStorage.getItem("token");
      // console.log(token);
      axios
        .get("http://localhost:8000/api/boards?api_token=" + token)
        .then((response) => {
           
          this.boards = response.data.boards;
          this.getLists();console.log(response);
        });
    },
// computed: {
//     currentUserBoard: {
//       get() {
//         return this.$store.state.admin.boards;
//       },
//     },
//   },
//   created() {
//     this.$store.dispatch("admin/getBoardData");
// },
    createList() {
      let token = localStorage.getItem("token");
      //console.log(token);
      axios
        .post(
          "http://localhost:8000/api/boards/" +
            this.boardId +
            "/list?api_token=" +
            token,
          {
            name: this.listName,
          }
        )
        .then((response) => {
          let newList = response.data.list;
          this.lists.push(newList);
          this.listName ="";
          console.log(response);
       });
    },
    updateList() {
      let token = localStorage.getItem("token");
      axios
        .put(
          "http://localhost:8000/api/boards/" +
            this.boardId +
            "/list/" +
            this.updateListId +
            "?api_token=" +
            token,
          { name: this.listName }
        )
        .then((response) => {
          console.log(response);
          this.updateListId = null;
          this.listName = "";

          this.getData();
        });
    },
    deleteList() {
      let token = localStorage.getItem("token");
      axios
        .delete(
          "http://localhost:8000/api/boards/" +
            this.boardId +
            "/list/" +
            this.deleteListId +
            "?api_token=" +
            token
        )
        .then((response) => {
          console.log(response);
           this.deleteListId = null;
          this.getData();
        });
    },

      updateCard(listId) {
      let token = localStorage.getItem("token");
      console.log(listId);
          axios
        .put("http://localhost:8000/api/list/" + this.list.id + "?api_token=" + token, {
          id: this.list.id,
        })
        .then((response) => {
          console.log(response);
        });
    },
    // destroyCard(cardId) {
    //   let token = localStorage.getItem("token");
    //   axios
    //     .delete("http://127.0.0.1:8000/api/card/" + cardId + "?api_token=" + token)
    //     .then((response) => {
    //       console.log(response);
    //     });
    // },
   },
};
</script>

<style scoped>
/* .column {
  margin-left: -200px;
  animation: drop 0.5s ease forwards;
}
@keyframes drop {
  0% {
    opacity: 0;
  }
  70% {
    transform: translateX(800px);
  }
  100% {
    transform: translateX(750px);
    opacity: 1;
  }
} */
</style>
