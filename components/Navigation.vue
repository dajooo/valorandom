<script setup lang="ts">
interface Link {
  name: string
  href: string
}

const links = ref<Link[]>([
  // {
  //   name: 'Home',
  //   href: '/',
  // },
  {
    name: 'Weapons',
    href: '/weapons',
  },
  {
    name: 'Agents',
    href: '/agents',
  },
])
</script>

<template>
  <div class="flex justify-between items-center">
    <div class="p-2">
      <DarkToggle />
    </div>
    <ul class="flex gap-4 p-4">
      <li v-for="link in links" :key="link.href">
        <NuxtLink :to="link.href">
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
