import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { UserStore } from "../modules/auth/store";
import { DataStore } from "../modules/data/store"; // Import DataStore

export const RootStoreModel = types.model("RootStore").props({
  userStore: types.optional(UserStore, {}),
  dataStore: types.optional(DataStore, {}), // Add DataStore to RootStore
});

export interface RootStore extends Instance<typeof RootStoreModel> {}
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
