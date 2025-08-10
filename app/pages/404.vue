<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="text-teal-700 px-4 py-10 text-center dark:text-gray-200">
    <div class="text-4xl">
      <Icon name="ph:warning" class="inline-block" />
    </div>
    <div>Not found</div>
    <div>
      <button class="text-sm btn m-3 mt-8" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
