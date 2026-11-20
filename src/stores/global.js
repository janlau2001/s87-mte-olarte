import { defineStore } from 'pinia'

// only holds who is logged in; pages talk to the API themselves
export const useGlobalStore = defineStore('global', {
  state: () => ({
    token: localStorage.getItem('token') || '',
  }),

  getters: {
    isLoggedIn: (state) => !!state.token,
  },

  actions: {
    setToken(token) {
      this.token = token
      localStorage.setItem('token', token)
    },

    logout() {
      this.token = ''
      localStorage.removeItem('token')
    },
  },
})
