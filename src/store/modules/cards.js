import axiosLib from "axios";
// const axios = axiosLib.create({
//   baseURL: "https://zowidiscussionapi.herokuapp.com/api",
// });
const axios = axiosLib.create({
  baseURL: "http://localhost:8000/api",
});

const state = {
  cards: [],
  cardscount: [],
};

const getters = {
  allCards: (state) => {
    return state.cards;
  },
  allCardCount: (state) => {
    return state.cardscount;
  },
};

const actions = {
  async fetchCard({ commit }, { boardId, listId }) {
    let token = localStorage.getItem("token");
    const response = await axios.get(
      "/boards/" + boardId + "/list/" + listId + "/card?api_token=" + token
    );
    // console.log(response.data.cards);
    commit("setCards", response.data.cards);
  },

  async addCard({ commit }, { boardId, listId, cardData }) {
    let token = localStorage.getItem("token");
    const response = await axios.post(
      "/boards/" + boardId + "/list/" + listId + "/card?api_token=" + token,
      { name: cardData }
    );
    // console.log(response);
    commit("newCard", response.data.cards);
  },
  async fetchCount({ commit }, { boardId, listId }) {
    console.log(boardId);
    console.log(listId);
    let token = localStorage.getItem("token");
    const response = await axios.get(
      "/boards/" + boardId + "/list/" + listId + "/cardCount?api_token=" + token
    );
    // console.log(response);
    commit("setCardCount", response.data.cards);
  },

  async updCard({ commit }, updatedcards) {
    let token = localStorage.getItem("token");
    const response = await axios.put(
      "/card/" + updatedcards.id + "?api_token=" + token,
      {
        name: updatedcards.name,
      }
    );
    //  console.log(response);
    commit("updateCard", response.data.card);
  },

  async delCard({ commit }, { boardId, deleteListId }) {
    let token = localStorage.getItem("token");
    await axios.delete(
      "/boards/" + boardId + "/list/" + deleteListId + "?api_token=" + token
    );
    // .then((response) => {
    commit("deleteCard", deleteListId);
    //});
  },
};

const mutations = {
  setCards: (state, data) => (state.cards = data),
  setCardCount: (state, data) => (state.cardscount = data),
  newCard: (state, newdata) => state.cards.unshift(newdata),
  updateCard: (state, updatedcards) => {
    const index = state.cards.findIndex((card) => card.id === updatedcards.id);
    if (index !== -1) {
      state.cards.splice(index, 1, updatedcards);
    }
  },
  deleteCard: (state, deleteListId) =>
    (state.lists = state.lists.filter((list) => list.id !== deleteListId)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
