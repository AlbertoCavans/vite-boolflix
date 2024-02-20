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
  <div class="container mt-3 d-flex">
    <input
      type="text"
      @keyup.enter="$emit('search', this.inputSearchBar)"
      class="form-control"
      v-model="inputSearchBar"
    />
    <button
      class="btn btn-success"
      @click="$emit('search', this.inputSearchBar)"
    >
      Cerca
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
