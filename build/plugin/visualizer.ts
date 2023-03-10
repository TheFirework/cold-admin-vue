import { visualizer } from 'rollup-plugin-visualizer'

export function configVisualizer() {
  return visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true
  })
}
