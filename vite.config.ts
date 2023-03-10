import { loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import * as path from 'path'
import { wrapperEnv } from './build/utils'
import { createProxy } from './build/proxy'
import { createVitePlugins } from './build/plugin'

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)
  const { VITE_PORT, VITE_APP_BASE_URL, VITE_PROXY } = viteEnv

  const isBuild = command === 'build'
  return {
    base: VITE_APP_BASE_URL || '/',
    resolve: {
      // 设置别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'types')
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    css: {
      preprocessorOptions: {
        less: {
          // 全局添加less
          additionalData: `@import '@/styles/less/variables.less';`,
          javascriptEnabled: true
        }
      }
    },
    plugins: createVitePlugins(viteEnv, isBuild),
    server: {
      host: '0.0.0.0', // 默认为'127.0.0.1'，如果将此设置为 `0.0.0.0` 或者 `true` 将监听所有地址，包括局域网和公网地址
      port: VITE_PORT, // 端口
      proxy: createProxy(VITE_PROXY) // 代理
    },
    build: {
      // 规定触发警告的 chunk 大小，消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000
    }
  }
}
