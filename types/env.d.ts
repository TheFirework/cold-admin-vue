/// <reference types="vite/client" />

declare interface ViteEnv {
  VITE_PORT: number
  VITE_USE_MOCK: boolean
  VITE_APP_BASE_URL: string
  VITE_PROXY: [string, string][]
  VITE_APP_TITLE: string
}
