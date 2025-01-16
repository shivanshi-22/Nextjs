import { types } from "mobx-state-tree";
import { AuthStore } from "@/modules/auth/authStore";

export const RootStoreModel = types.model("RootStore", {
  authStore: types.optional(AuthStore, {
    isAuthenticated: false,
    user: null,
  }), // Auth functionality
});

export const rootStore = RootStoreModel.create({});
