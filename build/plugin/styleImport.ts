import { AndDesignVueResolve, createStyleImportPlugin } from 'vite-plugin-style-import'

export function configStyleImportPlugin() {
  const styleImportPlugin = createStyleImportPlugin({
    resolves: [AndDesignVueResolve()],
    libs: [
      {
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/index`
        }
      }
    ]
  })
  return styleImportPlugin
}
