import type { Router } from "vue-router";

export function setupRouterGuard(router: Router) {
  createPageGuard(router);
}

/**
 * 处理页面状态
 */
function createPageGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>();

  router.beforeEach(async (to) => {
    // 页面已经加载，再次打开会更快，不需要进行加载和其他处理
    to.meta.loaded = !!loadedPageMap.get(to.path);

    return true;
  });

  router.afterEach((to) => {
    loadedPageMap.set(to.path, true);
  });
}
