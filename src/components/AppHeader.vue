<script>
export default {
  data() {
    return {
      inputSearchBar: "",
    };
  },

  emits: ["search"],
};
</script>

<template>
  <header>
    <div><h1 class="text-danger mx-3">BOOLFLIX</h1></div>
    <div class="container d-flex mx-3">
      <input
        type="text"
        @keyup.enter="$emit('search', this.inputSearchBar)"
        class="form-control"
        v-model="inputSearchBar"
      />
      <button
        class="btn btn-danger mx-2"
        @click="$emit('search', this.inputSearchBar)"
      >
        Cerca
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
