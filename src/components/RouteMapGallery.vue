<template>
  <div class="route-map-gallery flex flex-col items-center">
    <!-- Header / Description -->
    <RouteDescription
      :ruta-num="routeData.id"
      :ruta-name="routeData.route_name"
      :ruta-time="routeData.time"
      :ruta-stops="routeData.stops.length"
      :ruta-start="routeData.start"
      :ruta-stop="routeData.finish"
    />

    <div class="flex gap-4 mt-4">
      <!-- Map box -->
      <div class="map__box bg-white border-2 border-black">
        <div class="map__box__about flex items-center justify-between">
          <p>
            Haga clic en el marcador para navegar a la tarjeta con la información sobre la parada.
          </p>
        </div>
        <div
          ref="mapContainer"
          class="map"
          style="min-height: 400px; max-height: 450px; height: 100%"
        ></div>
      </div>

      <!-- Locations / Gallery -->
      <div class="locations">
        <div ref="gallery" class="galery">
          <LocationCard
            v-for="stop in routeData.stops"
            :key="stop.id"
            :id="stop.id"
            :img="stop.image?.trim() ? stop.image : '/src/images/default_image.png'"
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

    <QuizContainer
      v-if="routeData.id < 5 && routeData.quiz"
      :question="routeData.quiz.question"
      :options="routeData.quiz.options"
      :routeId="routeData.id + 2"
      :correctAnswer="routeData.quiz.answer"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as L from 'leaflet'
import 'leaflet.markercluster'
import RouteDescription from '@/components/RouteDescription.vue'
import LocationCard from '@/components/LocationCard.vue'
import QuizContainer from './QuizContainer.vue'

let backgroundInView = ref(null)

const props = defineProps({
  route: {
    type: Number,
    required: true,
  },
  routes: {
    type: Array,
    required: true,
  },
})

const routeData = ref(props.routes[props.route])

// Refs
const mapContainer = ref(null)
const gallery = ref(null)
const mapInstance = ref(null)

// Markers
let markersGroup = null

// Default center
const defaultCenter = [routeData.value.stops[0].location.lat, routeData.value.stops[0].location.lon]

// Scroll to gallery card - function for map marker
const scrollToCard = (index) => {
  backgroundInView.value = index + 1
  if (!gallery.value) return
  const card = gallery.value.querySelector(`#${CSS.escape(index + 1)}`)
  if (!card) return
  card.scrollIntoView({ behavior: 'smooth', inline: 'center' })
}

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

//custom marker

const lionIcon = L.icon({
  iconUrl: '/src/images/lion-marker.png',
  shadowUrl: '/src/images/marker-shadow.png',

  iconSize: [70, 75], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 61], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 58], // the same for the shadow
  popupAnchor: [-3, -58], // point from which the popup should open relative to the iconAnchor
})

// Initialize map and markers
onMounted(() => {
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
})
</script>

<style lang="sass">

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


/* Hover effect */
.leaflet-control-custom:hover
  background: #f9f9f9



/* Active (click) */
.leaflet-control-custom:active
  transform: scale(0.95)
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2)


/* Icon inside */
.leaflet-control-custom svg
  width: 18px
  height: 18px
  fill: #000


/* Optional: focus state (keyboard navigation) */
.leaflet-control-custom:focus
  outline: none
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.4)

.route-map-gallery
  padding-bottom: 4rem
  width: 100%
  max-width: 100vw
  overflow-x: hidden

.map__box
  position: relative
  z-index: 0
  flex: 0 0 40%

  p
    padding: 0.5rem

  &__about
    padding-right: 2rem

  .map
    width: 100%
    height: 100%

.locations
  flex: 1 1 60%

  .galery
    max-width: 100%
    width: 100%
    contain: layout paint
    padding: 3rem 4rem 1rem 1rem
    display: flex
    gap: 1rem
    overflow-x: auto
    scroll-snap-type: x mandatory
    scroll-behavior: smooth
    position: relative
    -webkit-overflow-scrolling: touch
    border: 2px solid #000
    background-color: #fff
    align-items: stretch

    &::-webkit-scrollbar
      height: 8px

    &::-webkit-scrollbar-track
      background: transparent

    &::-webkit-scrollbar-thumb
      background: rgba(0,0,0,0.25)
      border-radius: 999px

    &::-webkit-scrollbar-thumb:hover
      background: rgba(0,0,0,0.4)

  .galery > *
    flex: 0 0 auto
</style>
