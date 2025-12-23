<template>
  <div class="main flex flex-col w-full gap-[1rem]">
    <div class="flex flex-col gap-[0.5rem] justify-between title w-full lg:flex-row">
      <h2>RUTA {{ rutaNum }} {{ rutaName }}</h2>
      <div class="flex justify-start items-center gap-[1rem]">
        <div class="flex flex-row lg:flex-row justify-between items-center">
          <p>{{ rutaTime }} min.</p>
          <svg
            width="28px"
            height="28px"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="clock_icon"
            class="flex items-center justify-center"
          >
            <title>reloj</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM7 7.49991V3H8V7.29289L10.8536 10.1464L10.1464 10.8536L7.14645 7.85355C7.04882 7.75592 7 7.62787 7 7.49991Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <p>Paradas: {{ rutaStops }}</p>
      </div>
    </div>
    <div class="flex justify-between w-full flex-col items-start lg:flex-row">
      <div class="flex">
        <svg width="28px" height="28px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <title>Ruta empieza</title>
          <g id="Layer_2" data-name="Layer 2">
            <g>
              <rect width="4" height="4" fill="none" />
            </g>
            <g id="stop_icon">
              <path
                d="M24,2C14.1,2,7,10.1,7,20S18.5,41.3,22.6,45.4a1.9,1.9,0,0,0,2.8,0C29.5,41.3,41,30.1,41,20S33.9,2,24,2Zm5.7,16.7-2.1,2,.5,3.1a1.1,1.1,0,0,1-1.5,1.1L24,23l-2.6,1.9a1.1,1.1,0,0,1-1.5-1.1l.5-3.1-2.1-2a1.1,1.1,0,0,1,.6-1.8l2.9-.4,1.3-2.9a1,1,0,0,1,1.8,0l1.3,2.9,2.9.4A1.1,1.1,0,0,1,29.7,18.7Z"
                fill="currentColor"
              />
            </g>
          </g>
        </svg>

        <p>Salida: {{ rutaStart }}</p>
      </div>
      <div class="flex">
        <svg width="28px" height="28px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <title>Ruta acaba</title>
          <g id="Layer_2" data-name="Layer 2">
            <g>
              <rect width="4" height="4" fill="none" />
            </g>
            <g id="start_icon">
              <path
                d="M24,6c7.4,0,13,6,13,14S28.4,36.7,24,41.2C19.6,36.7,11,27.5,11,20S16.6,6,24,6m0-4C14.1,2,7,10.1,7,20S18.5,41.3,22.6,45.4a1.9,1.9,0,0,0,2.8,0C29.5,41.3,41,30.1,41,20S33.9,2,24,2Z"
                fill="currentColor"
              />
              <path
                d="M29.1,16.9l-2.9-.4-1.3-2.9a1,1,0,0,0-1.8,0l-1.3,2.9-2.9.4a1.1,1.1,0,0,0-.6,1.8l2.1,2-.5,3.1a1.1,1.1,0,0,0,1.5,1.1L24,23l2.6,1.9a1.1,1.1,0,0,0,1.5-1.1l-.5-3.1,2.1-2A1.1,1.1,0,0,0,29.1,16.9Z"
                fill="currentColor"
              />
            </g>
          </g>
        </svg>
        <p>Final: {{ rutaStop }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  rutaNum: {
    type: Number,
    required: true,
  },
  rutaName: {
    type: String,
    required: true,
  },
  rutaTime: {
    type: Number,
  },
  rutaStops: {
    type: Number,
  },
  rutaStart: {
    type: String,
  },
  rutaStop: {
    type: String,
  },
})
</script>

<style lang="sass" scoped>

#stop_icon, #start_icon, #clock_icon
  color: #0F4B00

.main
  font-size: 1rem
  font-family: "Space Mono", monospace !important
  padding: 10px
  overflow-x: hidden
  .title
    font-weight: 700
</style>
