import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { DataStore } from "../../store/datastore"; // Import the DataStore
import { UserStoreModel } from "../../modules/auth/store"; // Import UserStoreModel

export const RootStoreModel = types.model("RootStore").props({
  userStore: types.optional(UserStoreModel, {}), // Add UserStoreModel
  dataStore: types.optional(DataStore, {}), // Add DataStore
});

// Define TypeScript interfaces for the RootStore
export interface RootStore extends Instance<typeof RootStoreModel> {}
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
