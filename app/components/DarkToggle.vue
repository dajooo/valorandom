<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="hidden">
    <Icon name="ph:moon" />
    <Icon name="ph:sun" />
  </div>

  <button class="!outline-none" aria-label="dark mode" @click="toggleDark">
    <ClientOnly>
      <Icon :name="color.value === 'dark' ? 'ph:moon' : 'ph:sun'" class="text-4xl" />
      <template #fallback>
        <Icon name="ph:moon" class="text-4xl" />
      </template>
    </ClientOnly>
  </button>
</template>
