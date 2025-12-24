<template>
  <main class="flex flex-col items-center route__main">
    <RouteDescription
      :ruta-num="routeData.id"
      :ruta-name="routeData.route_name"
      :ruta-time="routeData.time"
      :ruta-stops="routeData.stops.length"
      :ruta-start="routeData.start"
      :ruta-stop="routeData.finish"
    />

    <div class="route-row">
      <div class="map__box bg-white border-2 border-black">
        <div class="map__box__about flex items-center justify-between">
          <p>Haga clic en el marcador para obtener información sobre la parada.</p>
        </div>
        <div
          ref="mapContainer"
          class="map"
          style="min-height: 200px; max-height: 100%; height: 80%"
        ></div>
      </div>

      <div class="locations">
        <div class="gallery-wrapper">
          <BackForwardControls
            :is-at-start="isAtStart"
            :is-at-end="isAtEnd"
            @back="goBack"
            @forward="goForward"
          />

          <div ref="gallery" class="galery">
            <LocationCard
              v-for="stop in routeData.stops"
              :key="stop.id"
              :id="stop.id"
              :img="stop.image?.trim() ? stop.image : defaultImage"
              :stop-num="stop.id"
              :stop-name="stop.name"
              :stop-address="stop.address"
              :stop-description="stop.description"
              :links="stop.links"
              :class="{ 'is-active': backgroundInView === stop.id }"
            />
          </div>
        </div>
      </div>
    </div>

    <QuizContainer
      v-if="routeData.quiz"
      :question="routeData.quiz.question"
      :options="routeData.quiz.options"
      :routeId="routeData.id + 1"
      :correctAnswer="routeData.quiz.answer"
    />
  </main>
</template>

<script setup>
import { animales } from '@/internaldata/animales'
import { ref, onMounted, computed, nextTick, watch } from 'vue'
import * as L from 'leaflet'
import 'leaflet.markercluster'

import defaultImage from '@/images/default_image.png'

import RouteDescription from '@/components/RouteDescription.vue'
import LocationCard from '@/components/LocationCard.vue'
import QuizContainer from '@/components/QuizContainer.vue'
import BackForwardControls from '@/components/BackForwardControls.vue'

// --------------------
// Props & data
// --------------------

// proprs to use id from the route path
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

let data = ref(animales)
const newId = parseInt(props.id) - 1
let routeData = computed(() => data.value[newId] ?? null)

// --------------------
// Gallery state & Map refs
// --------------------
let backgroundInView = ref(null)

const gallery = ref(null)
const activeIndex = ref(0)
const isAtStart = computed(() => activeIndex.value === 0)
const isAtEnd = computed(() => activeIndex.value === routeData.value.stops.length - 1)

let markersGroup = null
const mapContainer = ref(null)
const mapInstance = ref(null)

// Default center
const defaultCenter = [routeData.value.stops[0].location.lat, routeData.value.stops[0].location.lon]

// const defaultCenter = computed(() => {
// const first = routeData.value.stops[0]
//  return [first.location.lat, first.location.lon]
//})

// --------------------
// Gallery scroll
// --------------------
// Scroll to gallery card - function for map marker
const scrollToCard = async (index) => {
  if (!gallery.value) return
  if (index < 0 || index >= routeData.value.stops.length) return

  backgroundInView.value = index + 1
  activeIndex.value = index

  await nextTick()
  const card = gallery.value.querySelector(`#${CSS.escape(index + 1)}`)

  if (!card) return

  gallery.value.scrollTo({
    left: card.offsetLeft - gallery.value.offsetLeft - 16,
    behavior: 'smooth',
  })
}

// --------------------
// Gallery controls
// --------------------
const goBack = () => {
  if (!isAtStart.value) {
    scrollToCard(activeIndex.value - 1)
  }
}

const goForward = () => {
  if (!isAtEnd.value) {
    scrollToCard(activeIndex.value + 1)
  }
}

//------------------------------------
// Fix browser sync scroll problem
//------------------------------------
watch(activeIndex, (val) => {
  localStorage.setItem('galleryIndex', val)
})

// --------------------
// Recenter control
// --------------------
//ad controls to recenter map
const RecenterControl = L.Control.extend({
  options: {
    position: 'topleft', // topright, topleft, bottomright, bottomleft
  },

  onAdd(map) {
    const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom')

    //recenter controller
    container.innerHTML = `
      <svg width="21px" height="21px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" @click="recenterMap">
          <title>Recenter</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="invisible_box" data-name="invisible box">
              <rect width="48" height="48" fill="none"/>
          </g>
          <g id="Layer_7" data-name="Layer 7">
              <path d="M44,22H41V13a2,2,0,0,0-2-2H26V4a2,2,0,0,0-4,0v7H9a2,2,0,0,0-2,2v9H4a2,2,0,0,0,0,4H7v9a2,2,0,0,0,2,2H22v7a2,2,0,0,0,4,0V37H39a2,2,0,0,0,2-2V26h3a2,2,0,0,0,0-4ZM33,29a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V19a2,2,0,0,1,2-2H31a2,2,0,0,1,2,2ZM19,27H29V21H19Z"/>
            </g>
          </g>
      </svg>

    `

    // Prevent map interactions when clicking the control
    L.DomEvent.disableClickPropagation(container)

    container.onclick = () => {
      map.closePopup()
      map._stop() // stop ongoing pan/zoom animations
      map.setView(defaultCenter, map.getZoom(), { animate: true })
    }

    return container
  },
})

// --------------------
// Leaflet icon
// --------------------
//custom marker
const lionIcon = L.icon({
  iconUrl: '/lion-marker.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [70, 75], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 61], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 58], // the same for the shadow
  popupAnchor: [-3, -58], // point from which the popup should open relative to the iconAnchor
})

// --------------------
// Map init
// --------------------
// Initialize map and markers
onMounted(async () => {
  mapInstance.value = L.map(mapContainer.value, {
    zoomControl: true,
    zoom: 5,
    zoomAnimation: false,
    fadeAnimation: true,
    markerZoomAnimation: true,
  }).setView(defaultCenter, 15)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(mapInstance.value)

  // Create marker cluster group
  markersGroup = L.markerClusterGroup()

  routeData.value.stops.forEach((stop, index) => {
    const marker = L.marker([stop.location.lat, stop.location.lon], {
      alt: stop.name,
      autoPan: false,
      icon: lionIcon,
    }).bindPopup(`<strong>${index + 1}. ${stop.name}</strong><br><p>${stop.address}</p>`, {
      autoPan: false,
    })

    marker.on('mouseover', () => {
      marker.openPopup()
    })

    marker.on('mouseout', () => {
      if (!marker.isPopupOpen()) return
      marker.closePopup()
    })

    marker.on('click', () => {
      scrollToCard(index)
    })

    markersGroup.addLayer(marker)
  })

  mapInstance.value.addLayer(markersGroup)
  mapInstance.value.addControl(new RecenterControl())

  const savedIndex = Number(localStorage.getItem('galleryIndex'))

  if (!Number.isNaN(savedIndex)) {
    await scrollToCard(savedIndex)
  }
})
</script>

<style lang="sass">



// leafet styles inside the map
.leaflet-control-custom
  background: #ffffff
  width: 35px
  height: 35px
  display: flex
  align-items: center
  justify-content: center
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15)
  border: none
  cursor: pointer
  transition: all 0.2s ease

.leaflet-control-custom:hover
  background: #f9f9f9

.leaflet-control-custom:active
  transform: scale(0.95)
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2)

.leaflet-control-custom svg
  width: 18px
  height: 18px
  fill: #000

.leaflet-control-custom:focus
  outline: none
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.4)


.route__main
  position: relative
  padding-bottom: 4rem

.route-row
  display: grid
  gap: 1rem
  width: 100%
  max-width: 100%
  grid-template-columns: 1fr
  grid-template-rows: 300px auto

  @media only screen and (min-width: 800px)
    grid-template-columns: 40% 1fr
    grid-template-rows: auto



.locations
  min-width: 0
  width: 100%
  max-width: 100%
  overflow: hidden


  .gallery-wrapper
    min-width: 0
    width: 100%
    max-width: 100%
    overflow: hidden
    border: 2px solid #000
    background-color: #fff


    .galery
      display: flex
      gap: 1rem
      overflow-x: auto
      width: 100%
      box-sizing: border-box
      min-width: 0
      padding: 1rem 4rem 1rem 1rem
      scroll-snap-type: none
      scroll-margin-left: 1rem
      scroll-behavior: smooth
      -webkit-overflow-scrolling: touch


      &::-webkit-scrollbar
        height: 8px

      &::-webkit-scrollbar-track
        background: transparent

      &::-webkit-scrollbar-thumb
        background: rgba(0,0,0,0.25)
        border-radius: 999px

      &::-webkit-scrollbar-thumb:hover
        background: rgba(0,0,0,0.4)
</style>
