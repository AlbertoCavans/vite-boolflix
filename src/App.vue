<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      store,
      /* inputSearchBar: "", */
    };
  },

  components: { AppHeader },

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

    startSearchTVSeries(inputSearchBar) {
      axios
        .get(this.store.api.apiUrl + "/search/tv", {
          params: {
            api_key: store.api.apiKey,
            query: inputSearchBar,
          },
        })
        .then((response) => {
          /* console.log(response.data.results); */
          store.series = response.data.results.map((serie) => {
            return {
              title: serie.name,
              original_title: serie.original_name,
              original_language: serie.original_language,
              vote_average: serie.vote_average,
            };
          });
        });
    },

    flagForLanguage(language) {
      if (language == "it") {
        return new URL("./assets/imgs/it.webp", import.meta.url).href;
      }
      if (language == "en") {
        return new URL("./assets/imgs/gb.webp", import.meta.url).href;
      }

      return "bandiera mancante";
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

  <div class="mt-4">
    <h3>Series</h3>
    <ul v-for="serie in store.series" class="my-3">
      <li>Titolo: {{ serie.title }}</li>
      <li>Titolo originale: {{ serie.original_title }}</li>
      <li>
        Lingua:
        <img
          :src="flagForLanguage(serie.original_language)"
          alt="flag language"
          width="30px"
        />
      </li>
      <li>Voto: {{ serie.vote_average }}</li>
    </ul>

    <h3>Movies</h3>
    <ul v-for="movie in store.movies" class="my-3">
      <li>Titolo: {{ movie.title }}</li>
      <li>Titolo originale: {{ movie.original_title }}</li>
      <li>
        Lingua:
        <img
          :src="flagForLanguage(movie.original_language)"
          alt="flag language"
          width="30px"
        />
      </li>
      <li>Voto: {{ movie.vote_average }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
@use "./assets/style/general.scss";
</style>
