import UnoCSS from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'
import transformerDirective from '@unocss/transformer-directives'

export function configUnoCssPlugin() {
  return UnoCSS({
    // 预设
    presets: [presetUno(), presetAttributify()],
    // 指令转换插件
    transformers: [transformerDirective()]
  })
}
