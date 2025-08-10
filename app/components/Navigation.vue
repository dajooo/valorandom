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
  <div class="flex items-center justify-between">
    <div />
    <div class="p-4 flex gap-2 items-center">
      <ul class="flex gap-4">
        <li v-for="link in links" :key="link.href">
          <NuxtLink :to="link.href" active-class="text-shadow-md text-shadow-blue-200">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
      <DarkToggle />
      <NuxtLink to="https://github.com/dajooo/valorandom" aria-label="github" target="_blank">
        <div class="i-ph-github-logo text-4xl" />
      </NuxtLink>
    </div>
  </div>
</template>
