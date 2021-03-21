import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    search: null,
  },

  getters: {
    allImage: (state) => state.images,
    searchImage: (state) => state.search,
  },

  mutations: {
    GET_PHOTO(state, photo) {
      state.images = photo;
    },
    SEARCH_PHOTO(state, keyword) {
      state.search = keyword;
    },
  },

  actions: {
    getPhoto({ commit }) {
      axios
        .get(
          `https://api.unsplash.com/photos/?client_id=MTNcHBiwJl1DewakSTL6sNA2KmtlZ77ggYJvlB4S6SM&per_page=20`
        )
        .then((response) => {
          commit("GET_PHOTO", response.data);
        });
    },

    getSearch({ commit }, topic) {
      axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=MTNcHBiwJl1DewakSTL6sNA2KmtlZ77ggYJvlB4S6SM&query=${topic}&per_page=20`
        )
        .then((response) => {
          commit("SEARCH_PHOTO", response.data);
        });
    },
  },

  modules: {},
});
