import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { makePersistable } from 'mobx-persist-store';

class AuthStore {
  user = null;
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'AuthStore',
      properties: ['user'],
      storage: localStorage,
    });
  }

  async login(email, password) {
    this.isLoading = true;
    this.error = null;
    try {
      const response = await axios.post('/api/login', { email, password });
      this.user = response.data.user;
    } catch (err) {
      this.error = err.response?.data?.message || 'Login failed';
    } finally {
      this.isLoading = false;
    }
  }

  logout() {
    this.user = null;
  }

  get isAuthenticated() {
    return !!this.user;
  }
}

const authStore = new AuthStore();
export default authStore;