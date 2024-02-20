<script>
export default {
  data() {
    return {};
  },

  props: {
    infoCard: Object,
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
  <ul class="my-3">
    <li class="align-self-start">Titolo: {{ infoCard.title }}</li>
    <li class="align-self-start">
      Titolo originale: {{ infoCard.original_title }}
    </li>
    <li>
      Lingua:
      <img
        :src="flagForLanguage(infoCard.original_language)"
        alt="flag language"
        width="30px"
      />
    </li>
    <li>
      Voto:
      <font-awesome-icon
        v-for="star in 5"
        :icon="
          star <= infoCard.vote_average
            ? 'fa-solid fa-star'
            : 'fa-regular fa-star'
        "
      />
    </li>

    <li>
      <img
        :src="`https://image.tmdb.org/t/p/w342/${infoCard.poster_path}`"
        alt=""
        height="500px"
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
