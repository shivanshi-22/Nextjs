import { createContext, useContext } from "react";
import { RootStoreModel } from "./root-store";

const rootStore = RootStoreModel.create({});

const RootStoreContext = createContext(rootStore);

export const RootStoreProvider = RootStoreContext.Provider;

export const useRootStore = () => useContext(RootStoreContext);
