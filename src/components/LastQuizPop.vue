<template>
  <Teleport to="body">
    <div v-if="show" class="overlay">
      <div class="not-found">
        <div class="card">
          <!-- Close button -->
          <!-- <button class="close-btn" @click="emit('close')">✖</button> -->

          <div class="emoji">{{ currentStatus.emoji }}</div>

          <h1>{{ currentStatus.type }}</h1>


          <!-- WIN -->

          <ButtonYellow
            v-if="result === 'win'"
            label="¡Eres un gran explorador!"
            @click="emit('close')"
          />

          <!-- LOSE -->
          <ButtonYellow v-else label="Intentar otra vez" @click="emit('retry')" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'
import ButtonYellow from '@/components/ButtonYellow.vue'

const emit = defineEmits(['close', 'go', 'retry'])

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  statusQuiz: {
    type: Object,
    required: true,
  },
  result: {
    type: String,
    required: true, // 'win' | 'lose'
    validator: (v) => ['win', 'lose'].includes(v),
  },
})

const currentStatus = computed(() => {
  return props.statusQuiz[props.result]
})
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 999;
}

.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.card {
  background: white;
  border-radius: none;
  padding: 2.5rem 2rem;
  text-align: center;
  max-width: 420px;
  border: 2.5px solid #000;
  position: relative;
  animation: float 3s ease-in-out infinite;
}

.close-btn {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.emoji {
  font-size: 4rem;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.5rem;
  margin: 0;
  color: #ff6b6b;
}

h2 {
  font-size: 1.4rem;
  margin: 0.5rem 0 1rem;
  color: #333;
}

p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
