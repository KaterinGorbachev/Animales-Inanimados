<template>
  <main>
    <h1>Todas las rutas con animales inanimadas</h1>
    <p>
      Cada ruta incluye paradas divertidas, descripciones interesantes y enlaces útiles. ¡Elige una
      ruta para explorar y disfrutar del recorrido!
    </p>
    <nav>

      <ul>
        <RouterLink
          v-for="routeData in routes"
          :key="routeData.id"
          :to="`/route/${routeData.id}`"

        >
          <div class="route__box" :class="{ disabled : !isUnlocked(routeData.id) }">
      
            <RouteDescription
              :ruta-num="routeData.id"
              :ruta-name="routeData.route_name"
              :ruta-time="routeData.time"
              :ruta-stops="routeData.stops.length"
              :ruta-start="routeData.start"
              :ruta-stop="routeData.finish"
            />
          </div>
        </RouterLink>
      </ul>
    </nav>
  </main>
</template>

<script setup>
import RouteDescription from '@/components/RouteDescription.vue'
import { ref } from 'vue'
import { animales } from '@/internaldata/animales'
import { useUnlockStore } from '@/stores/unlockStore'

let routes = ref([])
routes.value = animales

const unlockStore = useUnlockStore()
let unlocked = ref(false)

console.log(!isUnlocked(2));

function isUnlocked(routeId) {

  return unlockStore.unlockedRoutes.includes(routeId)
}







</script>

<style lang="sass" scoped>

.disabled
  opacity: 0.5
  pointer-events: none

main
  padding: 1rem 3rem
  h1
    font-size: 2.5rem
    font-weight: 700
    text-align: start
    margin-bottom: 1rem
    color: #0F3206
    font-family: "Limelight", sans-serif

  p
    font-size: 1.15rem
    line-height: 1.8
    text-align: start
    color: #000
    opacity: 79%
    padding-bottom: 2rem

.route__box
  width: 80%
  transition: .5s ease-in
  padding: 1rem
  &:hover
    transform: scale(1.02)
    background-color: #fff
    border: 2px solid #000
</style>
