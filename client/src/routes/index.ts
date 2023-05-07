import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

/**
 * ルートのパス
 */
export const routePaths = {
  join: "/",
  game: "/game",
};

const routes: RouteRecordRaw[] = [
  { path: routePaths.join, name: "join", component: () => import("./views/JoinView.vue") },
  { path: routePaths.game, name: "game", component: () => import("./views/GameView.vue") },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
