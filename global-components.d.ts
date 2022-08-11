/**
 * Workaround until it's fixed in Nuxt.
 */

import '@vue/runtime-core'
import type { GlobalComponents as GlobalComponentsVue } from 'vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents extends GlobalComponentsVue {}
}

export {}
