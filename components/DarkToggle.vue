<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="!outline-none" aria-label="dark mode" @click="toggleDark">
    <div class="dark:i-carbon-moon i-carbon-sun text-4xl" />
  </button>
</template>
