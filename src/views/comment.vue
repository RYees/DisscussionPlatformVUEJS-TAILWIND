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
    <div
      class="w-8 mb-3 bg-yellow-200"
      style="margin-top:40px; margin-left:0px;"
    >
      <input
        type="text"
        class="input p-1 px-10 mt-0 w-60 rounded shadow-xl hover:bg-yellow-900 hover:bg-opacity-30 border border-white bg-white text-white text-sm tracking-wider"
        placeholder="Enter your name"
        v-model="listName"
        required
        @keyup.enter="createList"
      />
    </div>
    <draggable
      class="scroll grid grid-rows-1 grid-flow-col gap-5 rounded p-0"
      v-model="lists"
      :options="{ group: 'lists' }"
    >
      <div
        class="past text-white bg-yellow-300 bg-opacity-75 font-bold"
        v-for="(list,index) in lists"
        :key="index"
        style="height:450px; width:330px;"
      >
        <!-- <div
            v-if="deleteListId == list.id"
            @click.stop="deleteList();  deleteModal= fa;"
            class="inline-block ml-2 bg-white shadow-xl border border-gray-400 hover:bg-red-500 hover:text-white z-40 w-20 h-10 cursor-pointer rounded text-gray-900 text-xl p-1 "
          >
            Delete
          </div> -->
        <!-- <div v-if="currentRole[0].pivot.role_id == 1"> -->
        <button
          class="focus:outline-none cursor-pointer hover:bg-white hover:bg-opacity-30"
          @click="deleteListId = list.id"
          v-if="currentRole[0].pivot.role_id == 1"
          @click.stop="deleteList()"
        >
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="green"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <!-- <svg
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
            </svg> -->
        </button>
        <!-- </div> -->
        <input
          type="text"
          @click.stop
          v-model="listName"
          placeholder="Edit you name here"
          style="padding:15px;"
          class="text-gray-600 h-5 w-60 border-4 border-yellow-700"
          label="list.name"
          v-if="updateListId == list.id"
          @keyup.enter="updateList"
        />
        <div
          class="inline-block tracking-wider transform uppercase ml-20 text-sm"
          @click="updateListId = list.id"
          @click.stop="upModal = true"
          v-else
        >
          {{ list.name }}
          <div class="inline-block mb-1 ml-32">
            <button
              class="focus:outline-none hover:bg-yellow-200 w-10 hover:bg-opacity-95"
              title="Edit name"
            >
              <img
                class="w-3 mt-0 inline-block bg-yellow-200"
                src="/edit.svg"
                alt=""
              />
            </button>
          </div>
        </div>

        <board-column
          class=""
          :list="list"
          v-on:cardcreated="getData()"
        ></board-column>
      </div>
      <div
        class="listhide bg-white shadow-xl w-80 h-20 mb-96 p-4 border border-yellow-300 border-opacity-30"
      >
        <p
          class="tracking-wider transform capitalize font-normal text-gray-500"
        >
          you can drag your conversation and others from side to side
        </p>
      </div>
    </draggable>
  </div>
</template>

<script>
import BoardColumn from "@/components/BoardColumn";
import axiosLib from 'axios';
const axios = axiosLib.create({
  baseURL: "http://localhost:8000/api"
});
import draggable from "vuedraggable";
export default {
  components: { "board-column": BoardColumn, draggable },
  data: () => {
    return {
      boards: "",
      lists: [],
      cards: "",
      boardId: "",
      listId: "",
      name: "",
      newColumnName: "",
      listName: "",
      deleteMode: false,
      updateListId: "",
      deleteListId: "",
      upModal: false,
      deleteModal: false,
    };
  },
  created() {
    this.boardId = this.$route.params.id;
    //console.log(this.boardId);
    this.getData();
  },
  computed: {
    currentRole: {
      get() {
        return this.$store.state.users.role;
      },
    },
  },
  methods: {
    // deleteModal() {
    //   this.deleteMode = !this.deleteMode;
    // },
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
        .get("/boards?api_token=" + token)
        .then((response) => {
          this.boards = response.data.boards;
          this.getLists();
          console.log(response);
        });
    },
    createList() {
      let token = localStorage.getItem("token");
      // console.log(this.boardId);
      axios
        .post(
          "/boards/" +
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
          this.listName = "";
          console.log(response);
        });
      // this.$store.dispatch('users/createList',this.listName,this.boardId)
      // .then(()=>{
      //    this.listName = "";
      // })
    },
    updateList() {
      let token = localStorage.getItem("token");
      axios
        .put(
          "/boards/" +
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
          "/boards/" +
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
        .put(
          "/list/" +
            this.list.id +
            "?api_token=" +
            token,
          {
            id: this.list.id,
          }
        )
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style scoped>
.listhide {
  display: none;
}

.past:hover + div {
  display: block;
}

@media (max-width: 1536px) {
  .scroll {
    width: 1330px;
    height: 500px;
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 18px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #305a27);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #4d9c02);
  }
  ::-webkit-scrollbar-corner {
    border-radius: 20px;
    background: lightgray;
  }
}
@media (max-width: 1280px) {
  .scroll {
    width: 1200px;
    height: 490px;
    margin-left:10px;
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 27px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #305a27);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #4d9c02);
  }
  ::-webkit-scrollbar-corner {
    border-radius: 20px;
    background: lightgray;
  }
}
@media (max-width: 1024px) {
  .scroll {
    width: 800px;
    height: 500px;
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 27px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #305a27);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #4d9c02);
  }
  ::-webkit-scrollbar-corner {
    border-radius: 20px;
    background: lightgray;
  }
}
@media (max-width: 768px) {
  .scroll {
    width: 800px;
    height: 450px;
    overflow: scroll;
    margin-left:140px;
  }
  .input{
    margin-left:140px;
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 27px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #305a27);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #4d9c02);
  }
  ::-webkit-scrollbar-corner {
    border-radius: 20px;
    background: lightgray;
  }
}
@media (max-width: 640px) {
  .scroll {
    width: 450px;
    height: 400px;
    margin-right: 150px;
    overflow: scroll;
  }
  .input{
    margin-right:140px;
  }
  ::-webkit-scrollbar {
    background: transparent;
    width: 17px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #305a27);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #4d9c02);
  }
  ::-webkit-scrollbar-corner {
    border-radius: 20px;
    background: lightgray;
  }
}
</style>
