<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderPanel from './components/HeaderPanel.vue'
</script>

<template>
  <HeaderPanel />

  <RouterView :key="$route.params.id" />
</template>

<style lang="sass">

*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-size: 1rem


body
  background: #B34700
  background: linear-gradient(90deg, rgba(246, 115, 0, 1) 0%, rgba(252, 176, 69, 1) 44%, rgba(255, 219, 89, 1) 100%)
</style>
