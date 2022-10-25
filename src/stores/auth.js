import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "auth",
  state: () => ({
    token: '',
    user: null,
  }),
  getters: { name: (state) => state.user?.name },
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem("AuthorizationToken", token);
    },
    setUser(user) {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logout() {
      this.token = "";
      this.user = null;
      localStorage.removeItem("AuthorizationToken");
      localStorage.removeItem("user");
    },
  },
});