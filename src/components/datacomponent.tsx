import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { DataStore } from "../store/datastore"; // Import the DataStore

// Create an instance of the store
const dataStore = DataStore.create();

const DataComponent = observer(() => {
  useEffect(() => {
    dataStore.fetchData();
  }, []);

  if (dataStore.isLoading) {
    return <div>Loading...</div>;
  }

  if (dataStore.error) {
    return <div>Error: {dataStore.error}</div>;
  }

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {dataStore.data.map((item) => (
          <li key={item.id}>
            <strong>{item.name}:</strong> {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default DataComponent;
