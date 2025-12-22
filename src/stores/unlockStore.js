import { defineStore } from 'pinia'

export const useUnlockStore = defineStore('unlock', {
  state: () => ({
    unlockedRoutes: [1, 2], // example: [1, 2]
  }),

  actions: {
    unlockRoute(id) {
      if (!this.unlockedRoutes.includes(id)) {
        this.unlockedRoutes.push(id)
      }
    },

    isUnlocked(id) {
      return this.unlockedRoutes.includes(id)
    },

    reset() {
      this.unlockedRoutes = []
    },
  },
  persist: true,
})
