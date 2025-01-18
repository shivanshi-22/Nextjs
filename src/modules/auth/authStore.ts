import { types, flow } from "mobx-state-tree";

const UserModel = types.model("User", {
  email: types.string,
});

const AuthStore = types
  .model("AuthStore", {
    isAuthenticated: types.boolean,
    user: types.maybeNull(UserModel),
  })
  .actions((self) => ({
    afterCreate() {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        self.isAuthenticated = true;
        self.user = parsedUser;
      }
    },
    login: flow(function* (email: string, password: string) {
      try {
        if (email === "test@example.com" && password === "password") {
          const user = { email };
          self.isAuthenticated = true;
          self.user = user;
          localStorage.setItem("user", JSON.stringify(user));
          return true;
        }
        return false;
      } catch (error) {
        console.error("Login failed", error);
        throw new Error("Login failed. Please try again.");
      }
    }),
    logout() {
      self.isAuthenticated = false;
      self.user = null;
      localStorage.removeItem("user");
    },
  }));

export default AuthStore;
