export default defineNuxtConfig({
  routeRules: {
    '/': { redirect: '/agents' },
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@kevinmarrec/nuxt-pwa',
    '@nuxt/image-edge',
    '@vue-macros/nuxt',
  ],
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
