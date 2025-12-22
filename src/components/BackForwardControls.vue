<template>
  <div class="back-forward-gallery-controls flex gap-[2rem]">
    <div class="btn__box">
      <button
        class="btn btn__back"
        @click="emit('back')"
        :class="{ hidden: isAtStart }"
        :disabled="disabled"
      >
        <div class="btn__label">
          <svg width="20px" height="20px" viewBox="0 0 1.2 1.2" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h1.2v1.2H0z" fill="none" />
            <g id="Shopicon">
              <path
                points="40,22 14.828,22 28.828,8 26,5.172 7.172,24 26,42.828 28.828,40 14.828,26 40,26 	"
                d="M1 0.55L0.371 0.55L0.721 0.2L0.65 0.129L0.179 0.6L0.65 1.071L0.721 1L0.371 0.65L1 0.65Z"
              />
            </g>
          </svg>
        </div>
        <div class="btn__float"></div>
      </button>
    </div>
    <div class="btn__box">
      <button
        class="btn btn__forward"
        @click="emit('forward')"
        :class="{ hidden: isAtEnd }"
        :disabled="disabled"
      >
        <div class="btn__label">
          <svg width="20px" height="20px" viewBox="0 0 1.2 1.2" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h1.2v1.2H0z" fill="none" />
            <g id="Shopicon">
              <path
                points="8,26 33.172,26 19.172,40 22,42.828 40.828,24 22,5.172 19.172,8 33.172,22 ,22 	"
                d="M0.2 0.65L0.829 0.65L0.479 1L0.55 1.071L1.021 0.6L0.55 0.129L0.479 0.2L0.829 0.55L0.2 0.55Z"
              />
            </g>
          </svg>
        </div>
        <div class="btn__float"></div>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  disabled: { type: Boolean, default: false },
  isAtStart: { type: Boolean, default: false },
  isAtEnd: { type: Boolean, default: false },
})

const emit = defineEmits(['forward', 'back'])
</script>

<style lang="sass" scoped>

.hidden
  visibility: hidden

.back-forward-gallery-controls
  padding: 1rem
  padding-bottom: 0

.btn__box
  isolation: isolate
  overflow: hidden

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
      width: 100%
      height: 90%
      background: #FFC90E

      z-index: 1
      transition: transform 0.57s linear
      transition-property: sliding-vertically

      // Start bottom-right
      bottom: 0
      right: 0
      transform: translate(10%, 5%) scale(0.9)

    &:hover .btn__float
      // Move to top-left

      top: 0
      left: 0
      transform: translate(-5%, 0%) scale(0.9)
</style>
