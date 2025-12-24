<template>
  <div class="card" :id="stopNum" v-bind="$attrs">
    <div class="img__box">
      <img :src="img" :alt="stopName" />
    </div>
    <div class="data">
      <div>
        <h2>{{ stopNum }}. {{ stopName }}</h2>
        <p class="address">{{ stopAddress }}</p>
      </div>
      <p>{{ stopDescription }}</p>

      <div>
        <a v-for="link in links" :key="link" :href="link">{{ link }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String,
  },
  stopNum: {
    type: Number,
    required: true,
  },
  stopName: {
    type: String,
  },
  stopAddress: {
    type: String,
  },
  stopDescription: {
    type: String,
  },
  links: {
    type: Array,
  },
})

//make a script to open link in a new window - question pop up
</script>

<style lang="sass" scoped>

.is-active
  background-color: #FFE5B4 !important



h2
  font-weight: 700
  font-family: "Montserrat", sans-serif

.address
  font-family: "Space Mono", monospace
  font-weight: 400
  padding-left: 1rem

.card
  display: flex
  flex-direction: column
  background: #ffffff
  border: 2px solid #000
  overflow-y: auto
  min-width: 250px
  max-width: 90vw
  height: 450px
  scroll-snap-align: start
  flex: 0 0 auto
  @media only screen and (min-width: 800px)
    max-width: 35vw




  //transition: transform 0.3s ease, box-shadow 0.3s ease
  //cursor: pointer

  // &:hover
  //   transform: translateY(-6px)

  //   .img__box img
  //     transform: scale(1.1)

  .img__box
    position: relative
    overflow: hidden
    height: 40%

    img
      width: 100%
      height: 100%
      object-fit: cover
      object-position: center
      transition: transform 0.5s ease



  .data
    height: 60%
    padding: 0.25rem 1rem
    font-size: 1rem
    color: #000
    gap: 1rem
    display: flex
    flex-direction: column




    p
      font-size: 0.95rem
      font-family: "Cousine", monospace



    div
      margin-top: 0.75rem
      display: flex
      flex-wrap: wrap
      gap: 0.5rem

      a
        font-size: 0.85rem
        color: #5C0880
        text-decoration: underline
        padding: 0.35rem 0.6rem
        cursor: pointer
        transition: background 0.2s ease, color 0.2s ease
        overflow-wrap: anywhere

        &:hover
          color: #A32100
</style>
