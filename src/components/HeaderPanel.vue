<template>
  <header class="sticky top-0 left-0 right-0 flex flex-row w-full h-fit justify-between p-12">
    <LogoLion />
    <div class="relative right-0 flex flex-row items-center justify-end gap-12 w-1/2">
      <SearchBar />
      <BurgerMenu />
    </div>
  </header>
</template>

<script setup>
import BurgerMenu from './BurgerMenu.vue'
import SearchBar from './SearchBar.vue'
import LogoLion from './LogoLion.vue'
</script>

<style lang="sass" scoped>

header
  padding: 1rem 0
  padding-left: 3rem
  z-index: 2000
</style>
