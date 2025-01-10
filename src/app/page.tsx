"use client";

import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "@/services/root-store/root-store-content";

const Page = observer(() => {
  const { dataStore } = useRootStore(); // Access the dataStore from RootStore

  useEffect(() => {
    dataStore.fetchData(); // Fetch data when the component mounts
  }, [dataStore]);

  if (dataStore.isLoading) return <div>Loading...</div>;
  if (dataStore.error) return <div>Error: {dataStore.error}</div>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {dataStore.data.map((item) => (
          <li key={item.id}>
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Page;
