import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@kevinmarrec/nuxt-pwa',
    '@nuxt/image-edge',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  image: {
    domains: ['media.valorant-api.com'],
    provider: 'ipx',
  },
  pwa: {
    meta: {
      name: 'Valorandom',
    },
  },
})
