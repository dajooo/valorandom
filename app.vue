<script setup>
useHead({
  title: 'Valorant Random',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/nuxt.png',
    },
  ],
})
const { loadAgents } = useAgentsStore()
await loadAgents()
const { loadWeapons } = useWeaponsStore()
await loadWeapons()
</script>

<template>
  <NuxtLayout cl>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body, #__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
