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

const colors = {
  defaultColor: 'bg-truegray-200 dark:bg-truegray-800',
  selected: 'bg-truegray-400 dark:bg-truegray-700',
  highlighted: 'bg-red-200 dark:bg-red-800',
  selectedAndHighlighted: 'bg-red-300 dark:bg-red-700',
}

let colorClasses = $ref(colors.defaultColor)

watchEffect(() => {
  if (highlighted) {
    if (selected)
      colorClasses = colors.selectedAndHighlighted
    else
      colorClasses = colors.highlighted
  }
  else if (selected) { colorClasses = colors.selected }
  else { colorClasses = colors.defaultColor }
})
</script>

<template>
  <button
    :class="colorClasses"
    class="w-full flex items-center rounded-sm shadow-md"
  >
    <nuxt-img format="webp" class="w-24 h-24 object-contain m-2" :src="image" :alt="title" />
    <div class="flex flex-col justify-center">
      <h3 class="text-2xl">
        {{ title }}
      </h3>
      <p v-if="subtitle" class="text-gray-700 dark:text-gray-200">
        {{ subtitle }}
      </p>
    </div>
  </button>
</template>
