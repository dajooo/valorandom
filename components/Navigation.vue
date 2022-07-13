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
    <div />
    <div class="flex items-center gap-2 p-4">
      <ul class="flex gap-4">
        <li v-for="link in links" :key="link.href">
          <NuxtLink :to="link.href">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
      <DarkToggle />
      <NuxtLink to="https://github.com/dajooo/valorandom" target="_blank">
        <div class="i-carbon-logo-github text-4xl" />
      </NuxtLink>
    </div>
  </div>
</template>
