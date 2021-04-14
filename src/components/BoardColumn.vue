<template>
  <div class=""  @click.stop="upMod=false; updateCardId=null">
    <draggable
      class="overflow-scroll overflow-x-hidden"
      v-model="cards"
      :options="{ group: 'cards' }"
      @add="onAdd"
      style="min-height:15px; height:550px"
      :listId="list.id"
      @change="onChange"
    >
      <div
        v-for="card in cards"
        v-bind:key="card.id"
        :cardId="card.id"
        class="hover:border-red-400  cursor-pointer bg-blue-300 bg-opacity-30 hover:border-opacity-30 border-8 border-gray-50 border-opacity-30"
      >
      
        <input
          type="text"
          v-model="cardName"
          style=""
          @click.stop
          class="text-gray-800 text-lg tracking-wider w-full h-10"
          label="List Name" 
          v-if="updateCardId == card.id"
          @keyup.enter="updateCardItem"
        />
        <div
          class="p-3 cursor-pointer  bg-white text-lg tracking-wider py-2 text-gray-600"
          style="max-height:2000px; overflow-wrap:break-word;"
          @click="updateCardId = card.id"
           @click.stop="upMod=true;"
          v-else
        >
          {{ card.name }}
        </div>
      </div>
    </draggable>
    <div>
      <textarea
        type="text"
        title="it only take seven line of sentences"
        class="w-full overflow-hidden h-16 p-10 mt-4 hover:bg-red-900 hover:bg-opacity-30 border border-white bg-white text-white text-xl tracking-wider"
        placeholder="+ Enter new issue"
        v-model="cardName"
        required
        @keyup.enter="createCard"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import draggable from "vuedraggable";
export default {
  props: ["list"],
 //  props: [],
  components: { draggable },
  data() {
    return {
      cards: "",
      lists: "",
      boards:"",
      boardId: "",
      cardName: "",
      updateCardId: '',
      upMod:false
    };
  },

  created() {
    this.cards = this.list.cards;
    console.log(this.cards);
  },
  methods: {
      createCard() {
      let token = localStorage.getItem("token");
      axios
        .post(
          "http://localhost:8000/api/boards/" +
            this.list.board_id +
            "/list/" +
            this.list.id +
            "/card?api_token=" +
            token,
          {
            name: this.cardName,
            description: this.cardName,
          }
        )
        .then((response) => {
         let newCard = response.data.card;
          this.cards.push(newCard);
          this.cardName = "";
          console.log(response);
        });
    },
    updateCard(cardId, listId) {
      let token = localStorage.getItem("token");
      console.log(listId);
      console.log(cardId);
      axios
        .put("http://localhost:8000/api/card/" + cardId + "?api_token=" + token, {
          lists_id: this.list.id,
        })
        .then((response) => {
          console.log(response);
        });
    },
    destroyCard(cardId) {
      let token = localStorage.getItem("token");
      axios
        .delete("http://localhost:8000/api/card/" + cardId + "?api_token=" + token)
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
          "http://localhost:8000/api/card/update-all" + "?api_token=" + token,
          {
            cards: newCards,
          }
        )
        .then((response) => {
          console.log(response);
        });
    },
    getCard() {
       let token = localStorage.getItem("token");
      axios.get(
        "http://localhost:8000/api/card/" +
          this.updateCardId +
          "?api_token=" +
          token,
        );
    },
    updateCardItem() {
     let token = localStorage.getItem("token");
      axios
        .put(
          "http://localhost:8000/api/card/" +
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
  width: 15px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #ec0808);
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

