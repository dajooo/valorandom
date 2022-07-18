import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-2 py-1 md:(px-8 py-2) rounded text-white cursor-pointer disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 shadow-sm'],
    ['btn-primary', 'bg-blue-600 text-white hover:bg-blue-700'],
    ['btn-error', 'bg-red-600 text-white hover:bg-red-700'],
    ['btn-success', 'bg-green-700 text-white hover:bg-green-800'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
