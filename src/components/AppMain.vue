<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    flagForLanguage(language) {
      if (language == "it") {
        return new URL("../assets/imgs/it.webp", import.meta.url).href;
      }
      if (language == "en") {
        return new URL("../assets/imgs/gb.webp", import.meta.url).href;
      }

      return "bandiera mancante";
    },
  },
};
</script>

<template>
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

<style lang="scss" scoped></style>
