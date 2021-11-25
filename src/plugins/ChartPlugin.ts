import { Chart, registerables } from "chart.js";
import { VueConstructor } from "vue";

export default {
  install(Vue: VueConstructor): void {
    Vue.prototype.$_Chart = Chart;
    Chart.register(...registerables);
  },
};
