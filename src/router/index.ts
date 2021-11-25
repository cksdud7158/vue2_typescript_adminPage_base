import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "defaultLayout",
    component: () =>
      import(
        /* webpackChunkName: "layouts-default-index" */
        "@/layouts/defaultLayout/index.vue"
      ),
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () =>
          import(
            /* webpackChunkName: "views-dashboard" */
            "@/views/default/Dashboard.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
