<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

const router = useRouter()
</script>

<template>
  <main class="text-teal-700 px-4 py-10 text-center dark:text-gray-200">
    <div class="text-4xl">
      <div class="i-ph-warning inline-block" />
    </div>
    <div v-if="error?.statusCode === 404">
      Not found
    </div>
    <div v-else>
      {{ error?.statusCode ?? 'Unknown error' }}
    </div>
    <div>
      <button class="text-sm btn m-3 mt-8" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
