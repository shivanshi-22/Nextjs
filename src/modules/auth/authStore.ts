import { types, flow } from "mobx-state-tree";

export const AuthStore = types
  .model("AuthStore", {
    isAuthenticated: types.boolean,
    user: types.maybeNull(types.model({
      email: types.string,
    })),
  })
  .actions((self) => ({
    login: flow(function* (email: string, password: string) {
      // Simulated login logic
      if (email === "test@example.com" && password === "password") {
        self.isAuthenticated = true;
        self.user = { email };
        return true;
      }
      return false;
    }),
    logout() {
      self.isAuthenticated = false;
      self.user = null;
    },
  }));
