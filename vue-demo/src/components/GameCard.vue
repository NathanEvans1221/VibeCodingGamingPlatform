<template>
  <div class="game-card">
    <div class="icon-wrapper">
      <img
        :src="iconSrc"
        :alt="game.name"
        loading="lazy"
        decoding="async"
        @error="useFallbackIcon"
      >
    </div>
    <div class="info">
      <h3>{{ game.name }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  game: {
    type: Object,
    required: true
  }
})

const fallbackIcon = '/placeholder.svg'
const iconSrc = ref(props.game.icon)

function useFallbackIcon() {
  if (iconSrc.value === fallbackIcon) return

  iconSrc.value = fallbackIcon
}
</script>

<style scoped>
.game-card {
  background-color: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.2s;
  text-align: center;
  padding-bottom: 10px;
}

.game-card:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
}

.icon-wrapper {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: #000;
}

.icon-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info h3 {
  margin: 10px 0 0;
  font-size: 1rem;
  color: #eee;
  padding: 0 10px;
}
</style>
