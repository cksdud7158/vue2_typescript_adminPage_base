import Vue from "vue";
import { Chart } from "chart.js";

declare module "vue/types/vue" {
  interface Vue {
    $_Chart: typeof Chart;
  }
}
