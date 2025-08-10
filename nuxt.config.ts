import { pwa } from './app/config/pwa'

export default defineNuxtConfig({
  compatibilityDate: '2025-08-10',
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Random Agent and Weapon picker for Valorant' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },
  routeRules: {
    '/': { redirect: '/agents' },
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@vite-pwa/nuxt',
  ],
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  image: {
    provider: 'ipx',
    ipx: {
      dir: '.nuxt/ipx',
      maxAge: 31536000,
    },
  },

  nitro: {
    experimental: {
      tasks: true,
    },
    scheduledTasks: {
      '0 0 * * *': ['update-data'],
    },
  },

  pwa,
})
