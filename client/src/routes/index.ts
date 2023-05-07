import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

/**
 * ルートのパス
 */
const routePaths = {
  join: "/",
  game: "/game",
};

const routes: RouteRecordRaw[] = [
  { path: routePaths.join, name: "join", component: () => import("./views/JoinView.vue") },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
