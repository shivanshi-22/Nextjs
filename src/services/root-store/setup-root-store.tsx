import { getSnapshot, onSnapshot } from "mobx-state-tree";
import { RootStoreModel, rootStore } from "./root-store";

import * as storage from "localforage";

/**
 * The key we'll be saving our state as within async storage.
 */
export const ROOT_STATE_STORAGE_KEY = "kynnik_root";



/**
 * Setup the root state.
 */
export async function setupRootStore() {
  let rootStore: any;
  let data: any;

  // prepare the environment that will be associated with the RootStore.
  
  try {
    // load data from storage
    data = (await storage.getItem(ROOT_STATE_STORAGE_KEY)) || {};
    rootStore = RootStoreModel.create(data);
    storage.setItem(ROOT_STATE_STORAGE_KEY, getSnapshot(rootStore));
  } catch (e: any) {
    // if there's any problems loading, then let's at least fallback to an empty state
    // instead of crashing.
    rootStore = RootStoreModel.create({});
    storage.setItem(ROOT_STATE_STORAGE_KEY, getSnapshot(rootStore));
    // but please inform us what happened
    console.error(e.message, null);
  }

  // track changes & save to storage
  onSnapshot(rootStore, (snapshot) => storage.setItem(ROOT_STATE_STORAGE_KEY, snapshot));

  return rootStore;
}
export const localStorage = storage;