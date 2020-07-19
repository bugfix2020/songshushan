import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const layout = () => import("@/layout/index");
const index = () => import("@/pages/index");
const mode = "history";
const routes = [
  {
    path: "/",
    component: layout,
    children: [
      {
        path: "/",
        name: "index",
        component: index,
      },
    ],
  },
];
const router = new VueRouter({
  mode,
  routes,
});

export default router;
