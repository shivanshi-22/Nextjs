import { types, flow } from "mobx-state-tree";
import axios from "axios";

export const DataModel = types.model("DataModel", {
  id: types.identifierNumber,
  name: types.string,
  value: types.number,
});

export const DataStore = types
  .model("DataStore", {
    data: types.optional(types.array(DataModel), []),
    isLoading: types.optional(types.boolean, false),
    error: types.maybeNull(types.string),
  })
  .actions((self) => ({
    fetchData: flow(function* () {
      self.isLoading = true;
      self.error = null;
      try {
        const response = yield axios.get("https://api.example.com/data");
        self.data = response.data;
      } catch (error: any) {
        self.error = error.message || "Failed to fetch data.";
      } finally {
        self.isLoading = false;
      }
    }),
  }));
