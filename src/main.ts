import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "./store";
import { setupRouter } from "./router";

async function setupApp() {
  const app = createApp(App);

  setupStore(app);

  await setupRouter(app);

  app.mount("#app");
}

setupApp();
