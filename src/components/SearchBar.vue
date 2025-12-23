<template>
  <div class="search_bar__box flex flex-col" ref="searchRef">
    <div class="magnyfying_glass__box" role="button" aria-label="Buscar ruta" @click="toggleSearch">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        role="img"
        aria-label="Search"
        fill="none"
        stroke="currentColor"
        stroke-width="2.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <title>Buscar</title>
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </div>
    <div class="search__box flex flex-col" :class="{ open: searchOpen }" @click.stop>
      <div class="flex flex-row items-center justify-between">
        <div class="input__box flex flex-row items-center justify-between w-[90%]">
          <input
            type="search"
            name=""
            id="search_input"
            placeholder="Elige el barrio"
            :class="inputFieldStyles"
            v-model="inputValueFromSearchBar"
          />
          <ButtonWhite
            label="Buscar"
            :disabled="!selectedBarrio"
            @search-routes="getRoutes(selectedBarrio)"
          />
        </div>

        <div
          class="close__x w-[28px] h-[28px] flex flex-col items-center justify-center"
          @click="closeSearch"
        >
          <span class="close__search"></span>
        </div>
      </div>

      <!-- <ul  class="barrios__hints">
        <li v-for="barrio in allBarrios" :key="barrio.nombre" @click="getBarrioFromList(barrio.nombre)" >
          {{ barrio.nombre }}
        </li>
      </ul> -->

      <ul class="barrios__hints">
        <li
          v-for="barrio in barriosFiltered"
          :key="barrio.nombre"
          @click="getBarrioFromList(barrio.nombre)"
        >
          {{ barrio.nombre }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import ButtonWhite from './ButtonWhite.vue'
import { useRouter } from 'vue-router'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import * as turf from '@turf/turf'
import { animales } from '/src/internaldata/animales.js'
import Swal from 'sweetalert2'
import 'animate.css'
import { useSearchRouteBarrio } from '@/stores/searchRoteBarrio'

//save the search result in a Local Storage with pinia
const foundRoutes = useSearchRouteBarrio()

// to redirect on a page with search results
let router = useRouter()

// to change styles of input field: active, error, ok
let inputFieldStyles = ref('input__normal')

//to get users request data to filter
let inputValueFromSearchBar = ref('')
// only takes barrio from the list
let selectedBarrio = ref(null)

//for functions to open-close search bar
const searchRef = ref(null)
const searchOpen = ref(false)

//variable to save all barrios
let allBarrios = ref([])

//------------function to get list of Areas in Valencia from public API - saved in /public/data
//------------save all data in a variable allBarrios
// https://valencia.opendatasoft.com/api/explore/v2.1/catalog/datasets/barris-barrios/records?limit=20 ----------------------------------------------------------------------------------------
let getBarrios = () => {
  fetch('/data/barris-barrios.json')
    .then((res) => res.json())
    .then((geojson) => {
      // get list of barrios where are any route
      geojson.forEach((barrio) => {
        if (!allBarrios.value.some((b) => b.nombre === barrio.nombre)) {
          // Check if any route contains a stop inside barrio
          const isInAnyRoute = animales.some((route) => {
            return route.stops.find((stop) => {
              const stopPoint = turf.point([stop.location.lon, stop.location.lat])
              return turf.booleanPointInPolygon(stopPoint, barrio.geo_shape)
            })
          })

          if (isInAnyRoute) {
            allBarrios.value.push(barrio) // push only once
          }
        }
      })
    })
}

let barriosFiltered = computed(() => {
  return allBarrios.value.filter((area) =>
    area.nombre.includes(inputValueFromSearchBar.value.trim().toUpperCase()),
  )
})

//---------- get filter from user for list of barrios on input----------------------
//----------selectedBarrio.value - search by user input is not permited - the barrio must be selected from the list-----
let getBarrioFromList = (nombre) => {
  selectedBarrio.value = nombre
  inputValueFromSearchBar.value = nombre
}
//---------------------------------------------------------------
//----------functions to open-close search bar------------
function toggleSearch() {
  searchOpen.value = !searchOpen.value
}
function closeSearch() {
  searchOpen.value = false
}
function onClickOutsideSearch(e) {
  // If menu is closed, ignore
  if (!searchOpen.value) return

  // Ignore clicks inside SweetAlert container
  if (e.target.closest('.swal2-container')) return

  // If click is inside the burger box or the menu, do nothing
  if (searchRef.value && searchRef.value.contains(e.target)) return

  // Otherwise, click was outside → close menu
  closeSearch()
}
//---------------------------------------------------------

//----------------get routes calculated inside a specific barrio
//--------------- async for better loading, loading controlled in pinia
const getRoutes = async (barrio) => {
  // --- Validation ---
  if (
    !selectedBarrio.value ||
    inputValueFromSearchBar.value.trim() === '' ||
    selectedBarrio.value !== inputValueFromSearchBar.value.trim().toUpperCase()
  ) {
    Swal.fire({
      icon: 'warning',
      confirmButtonColor: '#F67300',
      title: 'Elige un barrio desde la lista',
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    })
    return
  }

  try {
    // --- start loading ---
    foundRoutes.setLoading(true)

    let exactBarrioData = allBarrios.value.find(
      (b) => b.nombre.trim().toUpperCase() === barrio.trim().toUpperCase(),
    )

    if (!exactBarrioData?.geo_shape) {
      throw new Error('Barrio polygon not found')
    }

    // --- find routes inside barrio ---
    // API returns polygon in exactBarrioData.geo_shape
    // using turf to check if any stop is inside the barrio
    //let inside = turf.booleanPointInPolygon(turf.point([-0.3790193628368707, 39.47362189872084]), exactBarrioData.geo_shape);
    // checking if any point from animales.js is in the barrio
    // if it is ==>> append the route to the list foundRoutes
    let routesInBarrio = animales.filter((route) => {
      if (!Array.isArray(route.stops)) return false

      return route.stops.some((stop) => {
        if (!stop?.location) return false

        const stopPoint = turf.point([stop.location.lon, stop.location.lat])

        return turf.booleanPointInPolygon(stopPoint, exactBarrioData.geo_shape)
      })
    })

    // --- save results in Pinia ---
    foundRoutes.setResults(barrio, routesInBarrio)

    // --- cleanup ---
    selectedBarrio.value = null
    inputValueFromSearchBar.value = ''

    if (routesInBarrio.length > 0) {
      closeSearch()
      await router.push('/route/all')
    }
  } catch (error) {
    console.error('[getRoutes]', error)
  } finally {
    // --- stop loading ---
    foundRoutes.setLoading(false)
  }
}

onMounted(() => {
  getBarrios()

  window.addEventListener('click', onClickOutsideSearch)
})
</script>

<style lang="sass" scoped>

.input__normal
  border: 2.5px solid #000
  padding: 0.5rem
  outline: none
  background-color: #ffda59
  backdrop-filter: blur(10px)
  transition: background-color .18s ease
  max-width: 60%
  &:focus-within
    background-color: #fff


.search_bar__box
  isolation: isolate
  position: relative

  .magnyfying_glass__box
    position: relative
    z-index: 11
    width: 28px
    height: 28px
    cursor: pointer

  .search__box
    position: fixed
    z-index: 12
    visibility: hidden

    width: 90vw

    top: 3rem
    right: 1rem
    left: 1rem
    @media only screen and (min-width: 800px)
      width: 30%
      right: 6rem

    &.open
      visibility: visible

    .close__x

      .close__search
        position: absolute
        background-color: #000
        width: 28px
        height: 2.5px
        transform: rotate(35deg)
        right: 0
        cursor: pointer
        &::after
          content: ''
          position: absolute
          background-color: #000
          width: 28px
          height: 2.5px
          transform: rotate(110deg)

  .barrios__hints
    position: absolute
    top: 100%
    right: 0
    z-index: 11
    width: 100%
    max-width: 350px
    min-width: 250px
    max-height: 240px
    overflow-y: auto
    padding: 0.7rem
    border: 2.5px solid #000
    background-color: #ffda59
    backdrop-filter: blur(100px)

    li
      padding: 0.6rem 0.6rem
      cursor: pointer
      transition: background-color .18s ease

      &:hover
        background-color: #fff
        border: 2px solid #000
</style>
