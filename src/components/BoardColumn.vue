<template>
  <div
    class=""
    @click.stop="
      upMod = false;
      updateCardId = null;
    "
  >
    <div class="text-sm ml-2 ">issues:{{ cardscount }}</div>
    <!-- class="overflow-scroll overflow-x-hidden" -->
    <draggable
      class="overflow-scroll overflow-x-hidden"
      v-model="cards"
      :options="{ group: 'cards' }"
      @add="onAdd"
      style="min-height:15px; height:360px"
      :listId="list.id"
      @change="onChange"
    >
      <div
        v-for="card in cards"
        v-bind:key="card.id"
        :cardId="card.id"
        class="card hover:border-green-300  cursor-pointer bg-white bg-opacity-30 hover:border-opacity-30 border-8 border-gray-50 border-opacity-30"
      >
        <button
          class="inline-block text-sm hover:bg-gray-600 hover:bg-opacity-30 hover:rounded"
          v-if="isEdit"
          @click="updateCardItem"
          @click.stop="showEdit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"
            />
            <path d="M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z" /></svg
          >Save
        </button>
        <input
          type="text"
          v-model="cardName"
          style="padding:20px;"
          @click.stop
          class="text-gray-500 text-sm tracking-wider w-full h-5 border-2 border-yellow-700 bg-opacity-30"
          placeholder="Write here"
          label="List Name"
          v-if="updateCardId == card.id"
        />
        <div
          v-else
          @click="(updateCardId = card.id) && (cardName = card.name)"
          @click.stop="upMod = true"
        >
          <button
            @click="showEdit"
            class="focus:outline-none w-5 hover:bg-gray-600 hover:bg-opacity-30"
            title="Edit issue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </div>
        <div
          class="p-3 cursor-pointer transform lowercase bg-white font-normal text-sm tracking-wider py-2 text-gray-500"
          style="max-height:2000px; overflow-wrap:break-word;"
        >
          {{ card.name }}
        </div>
        <div class="flex ml-56">
          <div><upload-Image :list="list" :card="card"></upload-Image></div>
          <div class="ml-4">
            <issue-Comments :list="list" :card="card"></issue-Comments>
          </div>
        </div>
      </div>
      <!-- <div
        class="cardhide bg-white v-on:cardgetting="getCard" shadow-xl w-80 h-24 mb-96 p-4 border border-yellow-300 border-opacity-30"
      >
        <p
          class="tracking-wider transform capitalize font-normal text-sm text-gray-500"
        >
          Put the issue you want it to be given a special attention and quick
          fix at the top by dragging the issue up and down
        </p> -->
      <!-- <p> 1.To edit your issues click on the issue <br /></p> -->
      <!-- </div> -->
    </draggable>
    <div class="" @keyup.esc="editCardId = null" style="margin-top:5px;">
      <textarea
        type="text"
        title="put you text"
        class="w-full overflow-hidden h-16 p-1 border-2 border-yellow-900 bg-white text-gray-700 text-sm tracking-wider"
        placeholder="+ Enter new issue"
        @click.stop
        v-model="cardData"
        required
        @click="showSave"
      />
      <!-- <a v-if="list.id == editCardId"
        @click="editCardId = list.id"
        class="text-gray-100 px-28 cursor-pointer text-sm bg-green-900 bg-opacity-50 ml-5 p-2 rounded transform capitalize "
        style="width:0px; top:80px;"
        v-else
        >Add Issue</a
      >  -->
    </div>
    <div class="bg-white h-10" style="" v-if="isSave">
      <button
        class="ml-32 focus:outline-none hover:bg-gray-600 hover:bg-opacity-30 px-2"
        @click="createCard"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="green"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
          />
        </svg>
        <p class="inline-block tracking-wider font-serif text-gray-800">save</p>
      </button>
    </div>
  </div>
</template>
<script>
import issueComments from "@/views/issueComments";
import uploadImage from "@/views/uploadImage";
import axiosLib from "axios";
const axios = axiosLib.create({
  baseURL: "https://zowidiscussionapi.herokuapp.com/api"
});
// const axios = axiosLib.create({
//   baseURL: "http://localhost:8000/api",
// });
import draggable from "vuedraggable";

export default {
  props: ["list"],
  components: {
    draggable,
    "issue-Comments": issueComments,
    "upload-Image": uploadImage,
  },
  data: () => {
    return {
      cards: [],
      boardId: "",
      cardId: "",
      listId: "",
      isSave: false,
      isEdit: false,
      cardData: "",
      cardName: "",
      cardscount: "",
      updateCardId: "",
      editCardId: "",
      upMod: false,
    };
  },

  created() {
    this.cards = this.list.cards;
    this.boardId = this.$route.params.id;
    this.listId = this.list.id;
  },
  mounted() {
    let token = localStorage.getItem("token");
    axios
      .get(
        "/boards/" +
          this.boardId +
          "/list/" +
          this.listId +
          "/cardCount?api_token=" +
          token
      )
      .then((response) => {
        this.cardscount = response.data.cards;
        //console.log(this.cardscount);
      });
    // this.getCards();
  },
  computed: {
    // cardCount: function() {
    //   return this.cards.length;
    // },
  },
  methods: {
    showSave: function() {
      this.isSave = !this.isSave;
    },
    showEdit: function() {
      this.isEdit = !this.isEdit;
    },
    getCard() {
      this.cards = this.list.cards;
    },
    createCard() {
      let token = localStorage.getItem("token");
      axios
        .post(
          "/boards/" +
            this.list.board_id +
            "/list/" +
            this.list.id +
            "/card?api_token=" +
            token,
          {
            name: this.cardData,
          }
        )
        .then((response) => {
          this.$emit("cardcreated");
          console.log(response);
          let newCard = response.data.card;
          this.cards.push(newCard);
          this.cardData = "";
          this.editCardId = "";
        });
    },
    updateCard(cardId, listId) {
      let token = localStorage.getItem("token");
      console.log(listId);
      axios.put("/card/" + cardId + "?api_token=" + token, {
        lists_id: this.list.id,
      });
      // .then((response) => {
      //  console.log(response);
      // });
    },

    onAdd(evt) {
      console.log(evt);
      let fromListId = evt.from.getAttribute("listId");
      let cardId = evt.item.getAttribute("cardId");
      let toListId = evt.to.getAttribute("listId");
      console.log(fromListId);
      this.updateCard(cardId, toListId);
    },
    onChange() {
      let newCards = this.cards.map((card, index) => {
        card.priority = index + 1;
        return card;
      });
      let token = localStorage.getItem("token");
      axios.patch("/card/update-all" + "?api_token=" + token, {
        cards: newCards,
      });
      // .then((response) => {
      //   console.log(response);
      // });
    },
    updateCardItem() {
      const updatedcards = {
        id: this.updateCardId,
        name: this.cardName,
      };
      let token = localStorage.getItem("token");
      axios
        .put("/card/" + this.updateCardId + "?api_token=" + token, {
          name: this.cardName,
        })
        .then((response) => {
          console.log(response);
          const index = this.cards.findIndex(
            (card) => card.id === updatedcards.id
          );
          if (index !== -1) {
            this.cards.splice(index, 1, updatedcards);
          }
          this.cardName = "";
          this.updateCardId = null;
        });
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  background: transparent;
  width: 12px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #070707);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #037a13);
}
::-webkit-scrollbar-corner {
  border-radius: 20px;
  background: lightgray;
}

.cardhide {
  display: none;
}

.card:hover + div {
  display: block;
}
</style>
