<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import HeaderPanel from './components/HeaderPanel.vue'
import CookiesPopUp from './components/CookiesPopUp.vue'

let agreementCookies = ref(localStorage.getItem('animalesInanimadasCookies') || '')
let showPopup = ref(true)
if (agreementCookies.value != 'agree') {
  showPopup.value = true
} else {
  showPopup.value = false
}

const saveChoiceCookies = () => {
  localStorage.setItem('animalesInanimadasCookies', 'agree')
  showPopup.value = false
}

//------------------------------------------------------------------------------------------//
// Copyright. Todos los derechos reservados. Ekaterina Gorbacheva, España, Valencia, Valencia. 2025   //
//-----------------------------------------------------------------------------------------//
</script>

<template>
  <HeaderPanel />

  <CookiesPopUp @agree="saveChoiceCookies" :show="showPopup" />

  <RouterView :key="$route.params.id" />
  <!--  ©️ Copyright. Todos los derechos reservados. Ekaterina Gorbacheva, España, Valencia, Valencia. 2025-->
</template>

<style lang="sass">

*

  font-size: 1rem


body
  background: #B34700
  background: linear-gradient(90deg, rgba(246, 115, 0, 1) 0%, rgba(252, 176, 69, 1) 44%, rgba(255, 219, 89, 1) 100%)

h1
  //color: #0F4B00
  color: #0F3206
  font-family: "Limelight", sans-serif
  font-size: 38px

  @media only screen and (min-width: 800px)
    font-size: 102px
    line-height: 93px

//------------------------------------------------------------------------------------------//
// Copyright. Todos los derechos reservados. Ekaterina Gorbacheva, España, Valencia, Valencia.  2025   //
//-----------------------------------------------------------------------------------------//
</style>
