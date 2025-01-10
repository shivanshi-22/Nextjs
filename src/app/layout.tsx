"use client"; // Mark this as a Client Component

import React, { useEffect, useState } from "react";
import { RootStoreProvider } from "@/services/root-store/root-store-content";
import { setupRootStore } from "@/services/root-store/setup-root-store";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [rootStore, setRootStore] = useState<any>(null);

  useEffect(() => {
    // Initialize the MobX Root Store on the client side
    const initializeStore = async () => {
      const store = await setupRootStore();
      setRootStore(store); // Set the initialized store
    };

    initializeStore();
  }, []);

  // Render a loading state until the store is ready
  if (!rootStore) return <div>Loading application...</div>;

  return (
    <RootStoreProvider value={rootStore}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </RootStoreProvider>
  );
}
