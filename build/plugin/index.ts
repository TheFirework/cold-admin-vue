import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const plugins: (PluginOption | PluginOption[])[] = [
    vue(),
    AutoImport({
      dts: 'types/auto-import.d.ts',
      imports: ['vue', 'vue-router']
    }),
    // 按需引入
    Components({
      dts: 'types/components.d.ts',
      dirs: ['src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
      resolvers: [AntDesignVueResolver({ importStyle: 'less', resolveIcons: true })]
    })
  ]

  return plugins
}
