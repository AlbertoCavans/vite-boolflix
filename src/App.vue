<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppHeader, AppMain },

  methods: {
    startSearchMovie(inputSearchBar) {
      axios
        .get(this.store.api.apiUrl + "/search/movie", {
          params: {
            api_key: store.api.apiKey,
            query: inputSearchBar,
          },
        })
        .then((response) => {
          store.movies = response.data.results.map((movie) => {
            return {
              title: movie.title,
              original_title: movie.original_title,
              original_language: movie.original_language,
              vote_average: movie.vote_average,
              poster_path: movie.poster_path,
            };
          });
        });
    },

    startSearchTVSeries(inputSearchBar) {
      axios
        .get(this.store.api.apiUrl + "/search/tv", {
          params: {
            api_key: store.api.apiKey,
            query: inputSearchBar,
          },
        })
        .then((response) => {
          store.series = response.data.results.map((serie) => {
            return {
              title: serie.name,
              original_title: serie.original_name,
              original_language: serie.original_language,
              vote_average: serie.vote_average,
              poster_path: serie.poster_path,
            };
          });
        });
    },

    refreshInputSearch() {
      store.inputSearchBar = this.inputSearchBar;
    },

    startSearch(inputSearchBar) {
      this.startSearchMovie(inputSearchBar);
      this.startSearchTVSeries(inputSearchBar);
    },
  },
};
</script>

<template>
  <app-header @search="startSearch"></app-header>

  <app-main></app-main>
</template>

<style lang="scss">
@use "./assets/style/general.scss";
</style>
