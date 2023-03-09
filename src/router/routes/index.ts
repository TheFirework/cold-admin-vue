import { LAYOUT, EXCEPTION_COMPONENT, REDIRECT_NAME } from "@/router/constant";

export const RootRoute = {
  path: "/",
  name: "Root",
  redirect: "/dashboard",
  meta: {
    title: "Root",
  },
};

export const LoginRoute = {
  path: "/login",
  name: "Login",
  component: () => import("@/views/sys/login/Login.vue"),
  meta: {
    title: "登录页",
  },
};

export const PAGE_NOT_FOUND_ROUTE = {
  path: "/:path(.*)*",
  name: "PageNotFound",
  component: LAYOUT,
  meta: {
    title: "ErrorPage",
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: "/:path(.*)*",
      name: "ParentLayout",
      component: EXCEPTION_COMPONENT,
      meta: {
        title: "ErrorPage",
        hideBreadcrumb: true,
        hideMenu: true,
      },
    },
  ],
};

export const REDIRECT_ROUTE = {
  path: "/redirect",
  component: LAYOUT,
  name: "RedirectTo",
  meta: {
    title: REDIRECT_NAME,
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: "/redirect/:path(.*)",
      name: REDIRECT_NAME,
      component: () => import("@/views/sys/redirect/index.vue"),
      meta: {
        title: REDIRECT_NAME,
        hideBreadcrumb: true,
      },
    },
  ],
};

const dashboard = {
  path: "/dashboard",
  name: "Dashboard",
  component: LAYOUT,
  redirect: "/dashboard/analysis",
  meta: {
    icon: "ion:grid-outline",
    title: "Dashboard",
  },
  children: [
    {
      path: "analysis",
      name: "Analysis",
      component: () => import("@/views/dashboard/Analysis/index.vue"),
      meta: {
        title: "分析",
      },
    },
  ],
};

export const constantRoutes = [
  LoginRoute,
  RootRoute,
  dashboard,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];
