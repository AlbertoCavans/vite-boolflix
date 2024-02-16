<script>
import axios from "axios";
import { store } from "./store";

export default {
  data() {
    return {
      store,
      inputSearchBar: "",
    };
  },

  methods: {
    startSearch() {
      axios
        .get(this.store.api.apiUrl + "/search/movie", {
          params: {
            api_key: store.api.apiKey,
            query: this.inputSearchBar,
          },
        })
        .then((response) => {
          /* console.log(response.data.results); */
          store.movies = response.data.results.map((movie) => {
            return {
              title: movie.title,
              original_title: movie.original_title,
              original_language: movie.original_language,
              vote_average: movie.vote_average,
            };
          });
        });
    },

    flagForLanguage(language) {
      if (language == "it") {
        return "./assets/images/it.svg";
      }
      if (language == "en") {
        return "./assets/images/uk.svg";
      }

      return "bandiera mancante";
    },

    refreshInputSearch() {
      store.inputSearchBar = this.inputSearchBar;
    },
  },
};
</script>

<template>
  <div class="container mt-3 d-flex">
    <input
      type="text"
      @keyup.enter="startSearch()"
      class="form-control"
      @keyup="refreshInputSearch()"
      v-model="inputSearchBar"
    />
    <button class="btn btn-success" @click="startSearch()">Cerca</button>
  </div>

  <div class="mt-4">
    <ul v-for="movie in store.movies" class="my-3">
      <li>Titolo: {{ movie.title }}</li>
      <li>Titolo originale: {{ movie.original_title }}</li>
      <li>Lingua: {{ flagForLanguage(movie.original_language) }}</li>
      <li>Voto: {{ movie.vote_average }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
@use "./assets/style/general.scss";
</style>
