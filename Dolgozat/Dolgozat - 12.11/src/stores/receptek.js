import { defineStore } from 'pinia'
import axios from 'axios'

export const useReceptekStore = defineStore('receptek', {
  state: () => ({ receptek: [] }),
  actions: {
    async fetchReceptek() {
      const response = await axios.get('http://localhost:3000/receptek')
      this.receptek = response.data
    }
  }
})