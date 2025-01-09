import { Instance, types } from "mobx-state-tree";

export const User = types.model("user", {
  about: types.maybeNull(types.string),
  avatar: types.maybeNull(types.string),
  average_rating: types.maybeNull(types.string),
  completed_project_count: types.number,
  cover_image: types.string,
  email: types.string,
  followers_count: types.number,
  following_count: types.number,
  full_name: types.maybeNull(types.string),
  id: types.maybeNull(types.string),
  is_email_verified: types.boolean,
  is_soft_delete: types.boolean,
  is_terms_agreed: types.boolean,
  location: types.maybeNull(types.string),
  phone: types.maybeNull(types.string),
  selected_language: types.string,
  taiga_application_token: types.maybeNull(types.string),
  title: types.maybeNull(types.string),
  year_of_experience: types.number,
  total_reviews: types.number,
  user_view_count: types.number,
});
export interface UserType extends Instance<typeof User> {}
export const LoggedInUser = types.model("loggedInUser", {
  user: types.maybeNull(User),
  access: types.maybeNull(types.string),
  refresh: types.maybeNull(types.string),
});