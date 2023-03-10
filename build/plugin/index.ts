import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import UnoCSS from 'unocss/vite'
import { configMockPlugin } from './mock'
import { configHtmlPlugin } from './html'
import { configImageminPlugin } from './imagemin'
import { configCompressPlugin } from './compress'
import { configVisualizer } from './visualizer'
import { configStyleImportPlugin } from './styleImport'
import { configSvgIconsPlugin } from './svgIcons'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_USE_MOCK } = viteEnv

  const plugins: (PluginOption | PluginOption[])[] = [
    vue(),
    vueJsx(),
    vueSetupExtend(),
    PkgConfig(),
    OptimizationPersist(),
    UnoCSS(),
    AutoImport({
      dts: 'types/auto-import.d.ts',
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true
      }
    }),
    // 按需引入
    Components({
      dts: 'types/components.d.ts',
      dirs: ['src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
      resolvers: [AntDesignVueResolver({ importStyle: 'less', resolveIcons: true }), IconsResolver()]
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3'
    })
  ]

  plugins.push(configHtmlPlugin(viteEnv, isBuild))

  plugins.push(configSvgIconsPlugin(isBuild))

  VITE_USE_MOCK && plugins.push(configMockPlugin(isBuild))

  if (isBuild) {
    plugins.push(configStyleImportPlugin())
    plugins.push(configVisualizer())
    plugins.push(configImageminPlugin())
    plugins.push(configCompressPlugin('gzip', false))
  }

  return plugins
}
