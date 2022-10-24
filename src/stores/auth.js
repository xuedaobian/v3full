import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "auth",
  state: () => ({
    token: '',
    user: null,
  }),
  getters: {},
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem("token", token);
    },
    setUser(user) {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logout() {
      this.token = "";
      this.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});