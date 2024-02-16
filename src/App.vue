<script>
import { store } from "./store";

export default {
  data() {
    return {
      store,
      title: "Hello world",
    };
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style lang="scss">
@use "./assets/style/general.scss";
</style>
