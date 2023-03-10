import { defineConfig } from 'unocss'

export default defineConfig({
  // 快捷方式
  shortcuts: [
    ['wh-full', 'w-full h-full'],
    ['f-c-c', 'flex justify-center items-center'],
    ['flex-col', 'flex flex-col'],
    ['text-ellipsis', 'truncate'],
    [
      'icon-btn',
      'text-16 inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary !outline-none'
    ]
  ],
  rules: [
    [/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })],
    ['card-shadow', { 'box-shadow': '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017' }]
  ],
  theme: {
    colors: {
      primary: 'var(--ant-primary-color)',
      error: 'var(--ant-error-color)',
      warning: 'var(--ant-warning-color)',
      success: 'var(--ant-success-color)',
      info: 'var(--ant-info-color)'
    }
  }
})
