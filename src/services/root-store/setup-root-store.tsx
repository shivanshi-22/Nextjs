import { getSnapshot, onSnapshot } from "mobx-state-tree";
import { RootStoreModel, RootStore } from "./root-store";
import * as storage from "localforage";

/**
 * The key we'll be saving our state as within async storage.
 */
export const ROOT_STATE_STORAGE_KEY = "kynnik_root";

/**
 * Setup the root state.
 */
export async function setupRootStore() {
  let rootStore: RootStore;
  let data: any;

  try {
    // Check if localforage is properly configured
    storage.config({
      name: "KynnikApp",
      storeName: "rootState",
    });

    // Load data from storage
    data = (await storage.getItem(ROOT_STATE_STORAGE_KEY)) || {};

    // Create the root store with the loaded data
    rootStore = RootStoreModel.create(data);

    // Save the initial snapshot to storage
    await storage.setItem(ROOT_STATE_STORAGE_KEY, getSnapshot(rootStore));
  } catch (e: any) {
    // Fallback to an empty state in case of errors
    rootStore = RootStoreModel.create({});
    await storage.setItem(ROOT_STATE_STORAGE_KEY, getSnapshot(rootStore));
    console.error("Failed to initialize root store:", e.message);
  }

  // Track changes & save to storage
  onSnapshot(rootStore, (snapshot) => {
    storage.setItem(ROOT_STATE_STORAGE_KEY, snapshot).catch((error) => {
      console.error("Failed to save snapshot to storage:", error);
    });
  });

  return rootStore;
}
