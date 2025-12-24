<template>
  <div class="burger__box" ref="menuRef">
    <div
      class="menu-btn"
      role="button"
      aria-label="Abre / cierra menu"
      aria-controls="main-nav"
      @click="toggle"
    >
      <span class="menu-btn__burger" :class="{ open: isOpen }"></span>
    </div>

    <nav class="nav" id="main-nav" :class="{ open: isOpen }">
      <ul class="menu-nav" :class="{ open: isOpen }">
        <li class="menu-nav__item" :class="{ open: isOpen }">
          <RouterLink to="/" class="menu-nav__link" @click="close">Inicio</RouterLink>
        </li>
        <li class="menu-nav__item" :class="{ open: isOpen }">
          <RouterLink to="/route/all" class="menu-nav__link" @click="close">Rutas</RouterLink>
        </li>
        <li class="menu-nav__item" :class="{ open: isOpen }">
          <RouterLink to="/about" class="menu-nav__link" @click="close">Sobre proyecto</RouterLink>
        </li>
        <li class="menu-nav__item" :class="{ open: isOpen }">
          <RouterLink to="/policy" class="menu-nav__link" @click="close"
            >Política de privacidad</RouterLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const menuRef = ref(null)

const isOpen = ref(false)
const router = useRouter()

function toggle() {
  isOpen.value = !isOpen.value
}

function close() {
  isOpen.value = false
}

function onKeydown(e) {
  if (e.key === 'Escape' || e.key === 'Esc') close()
}

// close the menu when the route changes for single-page apps
const stopRouterWatch = router.afterEach(() => {
  close()
})

function onClickOutside(e) {
  // If menu is closed, ignore
  if (!isOpen.value) return

  // If click is inside the burger box or the menu, do nothing
  if (menuRef.value && menuRef.value.contains(e.target)) return

  // Otherwise, click was outside → close menu
  close()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('click', onClickOutside)
  if (typeof stopRouterWatch === 'function') {
    stopRouterWatch()
  }
})
</script>

<style lang="sass" scoped>

@use '@/styles/variables'

.burger__box
  isolation: isolate
  position: relative

  .menu-btn
    position: relative
    z-index: 11
    height: 25px
    width: 25px
    cursor: pointer
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    margin-right: 3rem

    @include variables.transition-ease
    &__burger

      position: absolute
      width: 25px
      height: 3px
      background: black
      @include variables.transition-ease

      &::before
        content: ''
        position: absolute
        top: -8px
        width: 25px
        height: 3px
        background: black
        @include variables.transition-ease

      &::after
        content: ''
        position: absolute
        top: 8px
        width: 25px
        height: 3px
        background: black
        @include variables.transition-ease

      &.open
        background: transparent

        &::before
          transform: rotate(45deg) translate(5px, 8px)
          background: black

        &::after
          width: 25px
          background: black
          transform: rotate(-45deg) translate(3px, -7px)


  .nav
    margin-top: 1rem
    position: fixed
    top: 6rem
    right: 1rem
    
    visibility: hidden
    @media only screen and (min-width: 800px)
      padding-right: 1.5rem


    &.open
      visibility: visible


      .menu-nav
        @include variables.displayFlexColumn($vertical: start, $gorizontal: end)
        overflow: wrap
        background-color: #ffda59
        padding: 0.8rem 0.6rem
        gap: .5rem
        list-style-type: none
        transform: translateY(-100%)
        transition: .1s ease
        width: 100%
        min-width: 240px
        max-width: 350px
        border: 2.5px solid #000
        @media only screen and (min-width: 800px)
          width: 40vw

        &.open
          transform: translateY(0)

          &__item
            transform: translateX(100vw)
            color: variables.set-text-color(orange)
            @include variables.transition-ease

            &.open
              transform: translateX(0)

        &__link
          text-align: end
          text-transform: uppercase
          font-weight: 600
          font-size: 1rem
          color: black
          padding: 0.4rem 0.6rem
          transition: background-color .15s ease-in

          &:hover
            background-color: #fff
            border: 2px solid #000
</style>
