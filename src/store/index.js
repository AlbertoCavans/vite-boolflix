import { reactive } from "vue";

export const store = reactive({
  api: {
    apiUrl: "https://api.themoviedb.org/3",
    apiKey: "2920016933702ecf930c459e3d0b65db",
  },

  movies: [],
});
