<template>
  <Teleport to="body">
    <div v-if="show" class="overlay">
      <div class="not-found">
        <div class="card">
          <div class="emoji">🍪</div>

          <h2>Usamos galletitas digitales</h2>
          <p>
            En esta página usamos cookies. Son pequeños ayudantes que nos permiten: recordar lo que
            te gusta, hacer que la página funcione mejor, mantener todo seguro y divertido.
            <router-link to="/policy">Más Información...</router-link>
          </p>
          
          <!-- Agree -->
          <ButtonYellow label="Estoy de acuerdo" @click="emit('agree')" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import ButtonYellow from '@/components/ButtonYellow.vue'

const emit = defineEmits(['agree'])

defineProps({
  show: {
    type: Boolean,
    required: true,
    default: true,
  },
})
</script>

<style lang="sass" scoped>
.overlay
  position: fixed
  inset: 0
  background: rgba(0, 0, 0, 0.45)
  z-index: 999


.not-found
  min-height: 100vh
  display: flex
  align-items: center
  justify-content: center
  padding: 1rem
  gap: 0.5rem


.card
  background: white
  border-radius: none
  padding: 2.5rem 2rem
  text-align: center
  max-width: 90vw
  max-height: 70vh
  border: 2.5px solid #000
  position: relative




.emoji
  font-size: 2rem

h2
  font-size: 1.5rem
  color: #ff6b6b


p
  font-size: 0.89rem
  color: #555


a
  font-size: 0.89rem
  color: #5C0880
  text-decoration: underline
  cursor: pointer
  transition: background 0.2s ease, color 0.2s ease

  &:hover
    color: #A32100
</style>
