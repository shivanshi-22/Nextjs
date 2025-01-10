"use client";

import React, { createContext, useContext } from "react";
import { RootStore } from "./root-store"; // Adjust import path as needed

const RootStoreContext = createContext<RootStore | null>(null);

export const RootStoreProvider: React.FC<{ value: RootStore; children: React.ReactNode }> = ({
  value,
  children,
}) => {
  return <RootStoreContext.Provider value={value}>{children}</RootStoreContext.Provider>;
};

export const useRootStore = () => {
  const context = useContext(RootStoreContext);
  if (!context) {
    throw new Error("useRootStore must be used within a RootStoreProvider");
  }
  return context;
};