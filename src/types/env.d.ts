/// <reference types="vite/client" />

declare interface ViteEnv {
  VITE_PORT: number;
  VITE_USE_MOCK: boolean;
  VITE_PUBLIC_PATH: string;
  VITE_PROXY: [string, string][];
  VITE_APP_TITLE: string;
  VITE_GLOB_APP_SHORT_NAME: string;
}
