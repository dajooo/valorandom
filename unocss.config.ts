import { colors } from '@unocss/preset-mini/colors'
import { colorResolver } from '@unocss/preset-mini/utils'

import {
  defineConfig,
  presetIcons,
  presetWind4,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      gray: colors!.zinc,
      extragray: '#333338',
    },
  },
  rules: [
    [/^text-shadow-(.+)$/, colorResolver('--un-text-shadow-color', 'text-shadow'), { autocomplete: 'text-shadow-$colors' }],
  ],
  shortcuts: [
    ['btn', 'px-2 py-2 md:px-8 md:py-2 rounded text-white cursor-pointer disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 shadow-sm'],
    ['btn-primary', 'bg-blue-600 text-white hover:bg-blue-700'],
    ['btn-error', 'bg-red-600 text-white hover:bg-red-700'],
    ['btn-success', 'bg-green-700 text-white hover:bg-green-800'],
  ],
  presets: [
    presetWind4(),
    presetIcons({
      scale: 1.2,
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
