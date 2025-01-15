import { makeAutoObservable } from "mobx";

interface User {
  email: string;
}

class AuthStore {
  user: User | null = null; // Stores user data
  isAuthenticated: boolean = false; // Tracks login state

  constructor() {
    makeAutoObservable(this);
  }

  login(user: User) {
    this.user = user;
    this.isAuthenticated = true;
  }

  logout() {
    this.user = null;
    this.isAuthenticated = false;
  }
}

const authStore = new AuthStore();
export default authStore;
