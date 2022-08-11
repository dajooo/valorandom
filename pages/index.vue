<script setup lang="ts">
definePageMeta({
  middleware: 'agents-redirect',
})
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <p>You shouldn't be here!</p>
    <NuxtLink class="text-blue-400" to="/agents">
      You better click me right now!
    </NuxtLink>
  </div>
</template>
