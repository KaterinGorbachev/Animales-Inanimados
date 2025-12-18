<template>
  <div class="btn__box">
    <button class="btn" @click="emit('button-click')" :class="[$attrs.class]" :disabled="disabled">
      <div class="btn__label">{{ label }}</div>
      <div class="btn__float"></div>
    </button>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  disabled: { type: Boolean, default: false },
})

const emit = defineEmits(['buttonClick'])
</script>

<style lang="sass" scoped>

.btn__box
  isolation: isolate
  overflow: hidden
  padding: 1rem

  .btn
    position: relative
    outline: none
    appearance: none
    border: none
    background: transparent
    cursor: pointer

    &__label
      position: relative
      z-index: 2
      width: 100%
      height: 100%
      padding: .5rem 0.79rem
      color: #000
      font-size: 16px
      border: 2.5px solid #000

      display: inline-flex
      align-items: center
      justify-content: center
      font-family: "Cousine", monospace
      font-weight: 700


    &__float
      position: absolute
      width: 110%
      height: 100%
      background: #FFC90E

      z-index: 1
      transition: transform 0.57s linear
      transition-property: sliding-vertically

      // Start bottom-right
      bottom: 0
      right: 0
      transform: translate(10%, 15%) scale(0.9)

    &:hover .btn__float
      // Move to top-left

      top: 0
      left: 0
      transform: translate(-5%, 0%) scale(0.9)
</style>
