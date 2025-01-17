"use client";

import React, { useEffect, useState } from "react";
import { RootStoreProvider } from "@/services/root-store/root-store-context";
import { setupRootStore } from "@/services/root-store/setup-root-store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [rootStore, setRootStore] = useState<any>(null);

  useEffect(() => {
    const initializeStore = async () => {
      const store = await setupRootStore();
      setRootStore(store);
    };

    initializeStore();
  }, []);

  // Render a loading state until the store is ready
  if (!rootStore) return <div>Loading application...</div>;

  return (
    <html lang="en">
      <body>
        <div>
          This application is powered by RootStore.
          <RootStoreProvider value={rootStore}>{children}</RootStoreProvider>
        </div>
      </body>
    </html>
  );
}
