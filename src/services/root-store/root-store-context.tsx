import { createContext, useContext } from "react";
import { RootStoreModel } from "./root-store";

// Create the root store instance
const rootStore = RootStoreModel.create({});

const RootStoreContext = createContext(rootStore);

/**
 * The provider our root component will use to expose the root store
 */
export const RootStoreProvider = RootStoreContext.Provider;

// Helper hook to use the store
export const useRootStore = () => useContext(RootStoreContext);
