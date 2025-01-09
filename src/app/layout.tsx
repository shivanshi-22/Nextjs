import React from "react";
import { RootStoreProvider } from "@/services/root-store/root-store-content";
import { setupRootStore } from "@/services/root-store/setup-root-store";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const rootStore = await setupRootStore(); // Initialize the store

  return (
    <RootStoreProvider value={rootStore}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </RootStoreProvider>
  );
}
