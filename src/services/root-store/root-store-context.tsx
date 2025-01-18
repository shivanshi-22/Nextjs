import React, { createContext, useContext, ReactNode } from "react";
import { rootStore } from "./root-store";

const RootStoreContext = createContext<typeof rootStore | null>(null);

export const RootStoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useRootStore = () => {
  const context = useContext(RootStoreContext);
  if (!context) {
    throw new Error("useRootStore must be used within a RootStoreProvider");
  }
  return context;
};
