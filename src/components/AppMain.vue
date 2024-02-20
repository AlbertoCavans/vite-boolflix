<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppCard,
  },
};
</script>

<template>
  <div class="container-fluid py-4">
    <h3>Series:</h3>
    <div class="cards-container">
      <app-card
        v-for="serie in store.series"
        :infoCard="serie"
        :key="serie.id"
        class="card"
      ></app-card>
    </div>

    <!--     <ul v-for="serie in store.series" class="my-3">
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
      <li>
        Voto:
        <font-awesome-icon
          v-for="star in 5"
          :icon="
            star <= serie.vote_average
              ? 'fa-solid fa-star'
              : 'fa-regular fa-star'
          "
        />
      </li>

      <li>
        <img
          :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`"
          alt=""
        />
      </li>
    </ul> -->

    <h3>Movies:</h3>
    <div class="cards-container">
      <app-card
        v-for="movie in store.movies"
        :infoCard="movie"
        :key="movie.id"
        class="card"
      ></app-card>
    </div>
    <!--     <ul v-for="movie in store.movies" class="my-3">
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
      <li>
        Voto:
        <font-awesome-icon
          v-for="star in 5"
          :icon="
            star <= movie.vote_average
              ? 'fa-solid fa-star'
              : 'fa-regular fa-star'
          "
        />
      </li>

      <li>
        <img
          :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`"
          alt=""
        />
      </li>
    </ul> -->
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  background-color: gray;
  min-height: calc(100vh - 80px);
  color: white;
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .card {
      width: 400px;
      height: 740px;
      background-color: black;
      color: white;
      padding: 30px;
      margin: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
