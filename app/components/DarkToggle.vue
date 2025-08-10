<script setup lang="ts">
const color = useColorMode()
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="!outline-none" aria-label="dark mode" @click="toggleDark">
    <ClientOnly>
      <Icon :name="color.value === 'dark' ? 'ph:moon' : 'ph:sun'" class="text-4xl" />
      <template #fallback>
        <Icon name="ph:sun" class="text-4xl" />
      </template>
    </ClientOnly>
  </button>
</template>
