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
  <button
    :class="{
      'bg-gray-200 dark:bg-gray-800': !selected,
      'bg-gray-400 dark:bg-extragray': selected,
      'border-b-.3rem border-blue-500 -mb-1.2 card-glow': highlighted,
    }"
    class="relative w-full flex items-center rounded-lg shadow-md overflow-hidden"
  >
    <nuxt-img format="webp" class="w-24 h-24 object-contain m-2 z-1" :src="image" :alt="title" />
    <div class="flex flex-col justify-center z-1">
      <h3 class="text-2xl">
        {{ title }}
      </h3>
      <p v-if="subtitle" class="text-gray-700 dark:text-gray-200">
        {{ subtitle }}
      </p>
    </div>
  </button>
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
