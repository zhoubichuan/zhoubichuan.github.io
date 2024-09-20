import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/base",
  },
  {
    path: "/base",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home-page.vue"),
  },
  {
    path: "/base/about",
    name: "information",
    component: () =>
      import(/* webpackChunkName: "information" */ "../views/info-page.vue"),
  },
  {
    path: "/base/project",
    name: "project",
    component: () =>
      import(/* webpackChunkName: "project" */ "../views/project-page.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
