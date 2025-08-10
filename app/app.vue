<script setup>
useHead({
  title: 'Valorandom',
})

const agentsStore = useAgentsStore()
await agentsStore.loadAgents()
const weaponsStore = useWeaponsStore()
await weaponsStore.loadWeapons()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body, #__nuxt {
  min-height: 100%;
  margin: 0;
  padding: 0;
}

html.dark {
  @apply bg-gray-900 text-white;
}
</style>
