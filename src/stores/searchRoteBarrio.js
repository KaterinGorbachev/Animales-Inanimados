import { defineStore } from 'pinia'

export const useSearchRouteBarrio = defineStore('barrioRuta', {
  state: () => ({
    barrio: null,
    foundRoutes: [],
    loading: false,
  }),
  actions: {
    setLoading(value) {
      this.loading = value
    },
    setResults(barrio, routes) {
      this.barrio = barrio
      this.foundRoutes = routes
    },
    reset() {
      this.barrio = null
      this.foundRoutes = []
      this.loading = false
    },
  },
  persist: false,
})
