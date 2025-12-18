import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useUnlockStore } from '@/stores/unlockStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/route/all', component: () => import('@/views/AllRoutes.vue') },
    {
      path: '/route/:id',
      name: 'route',
      component: () => import('@/views/RoutePage.vue'),
      props: true,
      beforeEnter: (to, from, next) => {
        const id = Number(to.params.id)

        // validate id
        if (!Number.isInteger(id) || id < 1 || id > 6) {
          return next({ name: 'not-found' })
        }

        // free routes (1–2)
        if (id >= 1 && id <= 2) {
          return next()
        }

        // protected routes (3–6)
        const unlockStore = useUnlockStore()

        if (unlockStore.isUnlocked(id)) {
          next()
        } else {
          next(`/route/all`) // make a page for info locked
        }
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

export default router
