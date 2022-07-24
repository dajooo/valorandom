<script setup>
useHead({
  title: 'Valorandom',
})
</script>

<template>
  <NuxtLayout>
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
  @apply bg-gray-900 text-white;
}
</style>
