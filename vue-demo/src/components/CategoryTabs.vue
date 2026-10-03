<template>
  <div class="category-tabs" role="group" aria-label="遊戲分類">
    <button 
      v-for="tab in tabs" 
      :key="tab.id"
      type="button"
      :class="{ active: modelValue === tab.id }"
      :aria-pressed="modelValue === tab.id"
      @click="$emit('update:modelValue', tab.id)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.category-tabs {
  display: flex;
  gap: 10px;
  padding: 20px;
  background-color: #1e1e1e;
  overflow-x: auto;
}

button {
  padding: 8px 20px;
  background-color: #333;
  border: 1px solid #444;
  border-radius: 20px;
  color: #ccc;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

button:hover {
  background-color: #444;
  color: #fff;
}

button.active {
  background-color: #ffd700;
  color: #000;
  border-color: #ffd700;
  font-weight: bold;
}
</style>
