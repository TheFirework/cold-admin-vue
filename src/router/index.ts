import type { App } from 'vue';
import { createRouter,  createWebHistory } from 'vue-router';
import { constantRoutes } from './routes';
import { setupRouterGuard } from './guard';


export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export async function setupRouter(app: App) {
  app.use(router);
  setupRouterGuard(router);
  await router.isReady();
}

