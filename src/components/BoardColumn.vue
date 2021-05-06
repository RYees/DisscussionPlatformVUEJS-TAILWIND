<template>
  <div
    class=""
    @click.stop="
      upMod = false;
      updateCardId = null;
    "
  >
  <!-- class="overflow-scroll overflow-x-hidden" -->
    <draggable
     class="overflow-scroll overflow-x-hidden"
      v-model="cards"
      :options="{ group: 'cards' }"
      @add="onAdd"
      style="min-height:15px; height:370px"
      :listId="list.id"
      @change="onChange"
    >
      <div
        v-for="card in cards"
        v-bind:key="card.id"
        :cardId="card.id"
        class="card hover:border-green-300  cursor-pointer bg-white bg-opacity-30 hover:border-opacity-30 border-8 border-gray-50 border-opacity-30"
      >
        <input
          type="text"
          v-model="cardName"
          style="padding:20px;"
          @click.stop
          class="text-gray-800 text-sm tracking-wider w-full h-5 border-2 border-yellow-700 bg-opacity-30"
          placeholder="Write here"
          label="List Name"
          v-if="updateCardId == card.id"
          @keyup.enter="updateCardItem"
        />
        <div v-else @click="updateCardId = card.id" @click.stop="upMod = true">
          <button class="focus:outline-none w-10 hover:bg-green-200 hover:bg-opacity-95" title="Edit issue">
            <img class="w-3 mt-2 inline-block bg-green-500" src="/edit.svg" alt="" />
          </button>
          </div>
        <div
          class="p-3 cursor-pointer transform lowercase bg-white text-sm tracking-wider py-2 text-gray-600"
          style="max-height:2000px; overflow-wrap:break-word;"
        >
          {{ card.name }}
        </div>
        
      </div>
      <div
        class="cardhide bg-white shadow-xl mt-5 p-4 border border-yellow-300 border-opacity-30"
      >
        <p
          class="tracking-wider transform capitalize font-normal text-gray-500"
        >
          Put the issue you want it to be given a special attention and quick
          fix at the top by dragging the issue up and down
        </p>
        <!-- <p> 1.To edit your issues click on the issue <br /></p> -->
      </div>
    </draggable>

    <div @keyup.esc="editCardId = null" style="margin-top:10px;">
      <textarea
        type="text"
        title="It only take seven line of sentences"
        class="w-full overflow-hidden h-16 p-5 mt-0 border border-gray-300 bg-white text-gray-700 text-sm tracking-wider"
        placeholder="+ Enter new issue"
        @click.stop
        v-model="cardData.name"
        v-if="list.id == editCardId"
        required
        @keyup.enter="createCard(list.id)"
      />
      <a
        @click="editCardId = list.id"
        class="text-gray-100 px-28 cursor-pointer text-sm bg-green-900 bg-opacity-50 ml-5 p-2 rounded transform capitalize "
        style="width:0px; top:80px;"
        v-else
        >Add Issue</a
      >
    </div>
  </div>
</template>
<script>
import axiosLib from 'axios';
const axios = axiosLib.create({
  baseURL: "http://localhost:8000/api"
});
import draggable from "vuedraggable";
export default {
  props: ["list"],
  components: { draggable },
  data() {
    return {
      cards: "",
      lists: "",
      boards: "",
      boardId: "",
      cardData: { name: "" },
      updateCardId: "",
      editCardId: "",
      upMod: false,
    };
  },

  created() {
    this.cards = this.list.cards;
  },
  methods: {
    createCard(listId) {
      console.log(listId);
      this.editCardId = listId;
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
            name: this.cardData.name,
          }
        )
        .then((response) => {
          let newCard = response.data.card;
          this.$emit("cardcreated");
          this.cards.push(newCard);
          this.cardData = "";
          this.editCardId = "";
        });
    },
    updateCard(cardId, listId) {
      let token = localStorage.getItem("token");
      console.log(listId);
      console.log(cardId);
      axios
        .put(
          "/card/" + cardId + "?api_token=" + token,
          {
            lists_id: this.list.id,
          }
        )
        .then((response) => {
          console.log(response);
        });
    },
    destroyCard(cardId) {
      let token = localStorage.getItem("token");
      axios
        .delete(
          "/card/" + cardId + "?api_token=" + token
        )
        .then((response) => {
          console.log(response);
        });
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
      axios
        .patch(
          "/card/update-all" + "?api_token=" + token,
          {
            cards: newCards,
          }
        )
        .then((response) => {
          console.log(response);
        });
    },
    updateCardItem() {
      let token = localStorage.getItem("token");
      axios
        .put(
          "/card/" +
            this.updateCardId +
            "?api_token=" +
            token,
          {
            name: this.cardName,
          }
        )
        .then((response) => {
          this.cardName = "";
          this.updateCardId = null;
          console.log(response);
          this.$emit("cardcreated");
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
