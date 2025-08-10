<script setup lang="ts">
interface InfoCardProps {
  image: string
  title: string
  subtitle?: string
  selected: boolean
  highlighted: boolean
}

const {
  image,
  title,
  subtitle,
  selected,
  highlighted,
} = defineProps<InfoCardProps>()
</script>

<template>
  <div
    :class="{
      'bg-gray-200 dark:bg-gray-800': !selected,
      'bg-gray-400 dark:bg-extragray': selected,
      'border-b-.3rem border-blue-500 -mb-1.2 card-glow': highlighted,
    }"
    class="rounded-lg flex w-full cursor-pointer shadow-md items-center relative overflow-hidden"
  >
    <NuxtImg format="webp" class="m-2 h-24 w-24 z-1 object-contain" :src="image" :alt="title" loading="eager" fetchpriority="high" />
    <div class="z-1">
      <h3 class="text-2xl">
        {{ title }}
      </h3>
      <p v-if="subtitle" class="text-gray-600 dark:text-gray-300">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.card-glow::after {
  display: block;
  content: '';
  position: absolute;
  bottom: 0;
  left: 35%;
  width: 30%;
  box-shadow: 0 0 100px 40px rgba(59, 130, 246, .5);
  -webkit-box-shadow: 0 0 100px 40px rgba(59, 130, 246, .5);
  -moz-box-shadow: 0 0 100px 40px rgba(59, 130, 246, .5);
}
</style>
