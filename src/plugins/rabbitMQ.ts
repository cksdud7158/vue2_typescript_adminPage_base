import { VueConstructor } from "vue";

const amqp = require("amqplib");

export default {
  install(Vue: VueConstructor): void {
    Vue.prototype.$_amqp = amqp;
  },
};
