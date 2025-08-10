<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="!outline-none" aria-label="dark mode" @click="toggleDark">
    <div class="dark:i-ph-moon i-ph-sun text-4xl" />
  </button>
</template>
