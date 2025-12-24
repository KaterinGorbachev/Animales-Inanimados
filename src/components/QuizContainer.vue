<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUnlockStore } from '@/stores/unlockStore'
import PopQuiz from './PopQuiz.vue'
import LastQuizPop from './LastQuizPop.vue'
import ButtonYellow from './ButtonYellow.vue'

const router = useRouter()
const unlockStore = useUnlockStore()

const props = defineProps({
  question: String,
  options: Array,
  routeId: Number,
  correctAnswer: String,
})

const selectedOption = ref(null)
const showPopup = ref(false)
const quizResult = ref('win') // 'win' | 'lose'

const quizWin = ref({
  win: {
    emoji: '🎉🦄',
    type: '¡Yupi!',
    message: 'Has conseguido abrir la nueva ruta',
  },
  lose: {
    emoji: '😔🦑',
    type: 'Oh noooo',
    message: 'Vuelva a probar otra vez...',
  },
})

function chooseOption(optionKey) {
  selectedOption.value = optionKey

  if (optionKey === props.correctAnswer) {
    unlockStore.unlockRoute(props.routeId)
    quizResult.value = 'win'
  } else {
    quizResult.value = 'lose'
  }

  showPopup.value = true
}

function retryQuiz() {
  showPopup.value = false
  selectedOption.value = null
}

function goToRoute() {
  showPopup.value = false
  localStorage.setItem('galleryIndex', 0)
  router.push(`/route/${props.routeId}`)
}

function close(){
  showPopup.value = false
}
</script>

<template>
  <div class="quiz-container w-[85%] flex flex-col items-start">
    <p v-if="routeId <= 6">Resuelve correctamente la pregunta para abrir la nueva ruta:</p>
    <p v-else>Resuelve el último misterio</p>

    <h2>{{ question }}</h2>

    <div class="options w-full">
      <ButtonYellow
        v-for="option in options"
        :label="`${option.key.toUpperCase()} ${option.text}`"
        :key="option.key"
        :class="{
          correct: selectedOption === option.key && option.key === correctAnswer,
          wrong: selectedOption === option.key && option.key !== correctAnswer,
        }"
        @button-click="chooseOption(option.key)"
        :disabled="selectedOption !== null"
      >
      </ButtonYellow>
    </div>
  </div>

  <PopQuiz
    v-if="routeId <= 6"
    :show="showPopup"
    :status-quiz="quizWin"
    :result="quizResult"
    @retry="retryQuiz"
    @go="goToRoute"
  />
  <LastQuizPop
  v-else
    :show="showPopup"
    :status-quiz="quizWin"
    :result="quizResult"
    @retry="retryQuiz"
    @close="close"
  />



</template>

<style lang="sass" scoped>
.quiz-container
  margin: 3rem 1rem
  padding: 2rem 1rem
  text-align: start
  background: #fff
  border: 2.5px solid #000
  font-family: "Space Mono", monospace

  h2
    font-weight: 600

.options
  display: flex
  flex-direction: row
  flex-wrap: wrap
  align-items: center
  justify-content: center
  gap: 1rem
  padding-top: 1rem

.correct :deep(.btn__float)
  background-color: rgba(0, 200, 83, 0.35)

.wrong :deep(.btn__float)
  background-color: rgba(229, 57, 53, 0.35)
</style>
