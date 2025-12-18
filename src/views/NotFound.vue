<template>
  <div class="not-found">
    <div class="card">
      <div class="emoji">🧭🐻</div>

      <h1>Oops!</h1>
      <h2>Esta página se embarcó en una aventura</h2>

      <p>
        Hemos buscado por todas partes, pero no hemos encontrado la página que buscas. Volvamos a un
        lugar seguro. 😊
      </p>

      <ButtonYellow label="🏠 Llévame a inicio" @button-click="goHome" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ButtonYellow from '@/components/ButtonYellow.vue'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.not-found {
  min-height: 90vh;
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
  animation: float 3s ease-in-out infinite;
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
