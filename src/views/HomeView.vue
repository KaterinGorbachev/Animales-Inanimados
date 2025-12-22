<template>
  <main class="flex flex-col items-center lg:flex-row gap-24 lg:h-[70vh]">
    <div class="description lg:w-[65%] flex flex-col w-[90%]">
      <h1 class="lg:w-[100%]">Animales inanimados</h1>
      <p class="lg:w-[90%]">
        Descubra fascinantes esculturas de animales por toda la ciudad con nuestra experiencia de
        mapa interactivo. Hay 2 rutas disponibles de inmediato para explorar. Para desbloquear 4
        rutas adicionales, responde correctamente a las preguntas en las rutas abiertas.
      </p>
      <div class="flex flex-col lg:flex-row items-center justify-end gap-[1rem]">
        <div>
          <h3
            v-for="(char, i) in letters"
            :key="i"
            class="flex letter"
            :style="{ animationDelay: `${i * 0.05}s` }"
          >
            {{ char }}
          </h3>
        </div>

        <ButtonWhite label="Empezar" @searchRoutes="goToRoutes" />
      </div>
    </div>
    <div class="img__box">
      <div class="img__framed">
        <img src="../images/fenix.jpg" alt="Fenix Español" class="fenix__espanol" />

        <img src="../images/frame_home.png" alt="frame" class="frame" />
      </div>
      <img src="../images/lion_frame.png" alt="" class="overlay overlay__left slide-in-left" />
      <img src="../images/bird_frame.png" alt="" class="overlay overlay__right slide-in-right" />
    </div>
  </main>
  <p class="copy-rights">
    &copy; Todos los derechos reservados. Ekaterina Gorbacheva, España, Valencia, 2025.
  </p>
</template>

<script setup>
import ButtonWhite from '@/components/ButtonWhite.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

let router = useRouter()
function goToRoutes() {
  router.push('/route/1')
}

let text = '¡Encuéntralos todos!'
const letters = computed(() => text.split(''))
</script>

<style lang="sass" scoped>

// .letter
//   opacity: 0
//   display: inline-block
//   animation: fadeInUp 1.2s forwards ease-out

// @keyframes fadeInUp
//   0%
//     opacity: 0
//     transform: translateX(10px)
//   100%
//     opacity: 1
//     transform: translateX(0)

.copy-rights
  position: relative
  bottom: 2px
  right: 2px
  opacity: 30%
  text-align: end


@keyframes typing
  from
    width: 0
  to
    width: auto

.slide-in-left
  animation: slideInLeft 1.2s ease-out forwards

@keyframes slideInLeft
  0%
    transform: translateX(-100vw)
    opacity: 0
  60%
    opacity: 1
  100%
    transform: translate(-55%, 7%)

.slide-in-right
  animation: slideInRight 1.2s ease-out forwards

@keyframes slideInRight
  0%
    transform: translateX(100vw)
    opacity: 0
  60%
    opacity: 1
  100%
    transform: translate(-50%, -38%)

main
  position: relative
  padding: 1rem
  padding-bottom: 10rem
  @media only screen and (min-width: 800px)
    padding: 1rem 3rem



  .description
    gap: 1rem




  p
    font-size: 1rem
    font-family: "Space Mono", monospace


  h3
    font-family: "Barrio", system-ui
    font-weight: 400
    font-size: 1.15rem
    overflow: hidden
    white-space: pre-wrap
    display: inline-block     // starting width
    animation: typing 3s steps(20) forwards
    color: black
    letter-spacing: 10%
    -webkit-text-fill-color: black
    -webkit-text-stroke-width: 0

    @media only screen and (min-width: 800px)
      font-size: 2.25rem


  .img__box
    position: relative
    width: 250px
    height: 350px

    .img__framed
      width: 250px
      height: 350px

      display: flex
      align-items: center
      justify-content: center
      position: relative

      .fenix__espanol
        width: 170px
        height: 200px
        position: relative
        z-index: 1

      .frame
        position: absolute
        top: 0
        left: 0
        width: 250px
        height: 350px
        z-index: 2
        pointer-events: none

    .overlay
      position: absolute
      width: 80px
      height: auto
      z-index: 3

    .overlay__left
      bottom: 0
      left: 0
      transform: translate(-55%, 7%)
      height: 100px
      width: 65px

    .overlay__right
      top: 0
      right: 0
      transform: translate(-50%, -38%)
</style>
