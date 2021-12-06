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
      {
        path: "gridsystem",
        name: "gridSystem",
        component: () =>
          import(
            /* webpackChunkName: "views-dashboard" */
            "@/views/default/GridSystem.vue"
          ),
      },
      {
        path: "tables/basic-table",
        name: "basicTable",
        component: () =>
          import(
            /* webpackChunkName: "views-dashboard" */
            "@/views/default/basicTable.vue"
          ),
      },
      {
        path: "mqtest",
        name: "MQTest",
        component: () =>
          import(
            /* webpackChunkName: "views-dashboard" */
            "@/views/default/MQTest.vue"
          ),
      },
      {
        path: "graphviz",
        name: "Graphviz",
        component: () =>
          import(
            /* webpackChunkName: "views-dashboard" */
            "@/views/default/graphviz.vue"
          ),
      },
      {
        path: "chart",
        name: "Chart",
        component: () =>
          import(
            /* webpackChunkName: "views-dashboard" */
            "@/views/default/chart.vue"
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
