import { types, flow } from "mobx-state-tree";
import axios from "axios";
export const UserStoreModel = types.model("UserStore", {
  username: types.optional(types.string, ""),
  email: types.optional(types.string, ""),
});
export const DataModel = types.model("DataModel", {
  id: types.identifierNumber, // Adjust based on your API response
  name: types.string,
  value: types.number, // Adjust based on your API response
});

export const DataStore = types
  .model("DataStore", {
    data: types.optional(types.array(DataModel), []), // Store fetched data
    isLoading: types.optional(types.boolean, false), // Track loading state
    error: types.maybeNull(types.string), // Store error messages
  })
  .actions((self) => ({
    fetchData: flow(function* () {
      self.isLoading = true;
      self.error = null;
      try {
        const response = yield axios.get("https://highpolarsoftwares.slack.com/archives/D087DG53H27/p1736415266108429");
        self.data = response.data; // Assuming the API returns an array
      } catch (error: any) {
        self.error = error.message || "Failed to fetch data.";
      } finally {
        self.isLoading = false;
      }
    }),
  }));
