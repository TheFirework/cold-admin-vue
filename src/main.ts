import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/normalize.css'
// 自定义样式文件
import 'uno.css'

import { setupStore } from './store'
import { setupRouter } from './router'

async function setupApp() {
  const app = createApp(App)

  setupStore(app)

  await setupRouter(app)

  app.mount('#app')
}

setupApp()
