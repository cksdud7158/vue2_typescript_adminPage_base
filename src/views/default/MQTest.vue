<template>
  <v-container>
    <v-card>
      <v-card-title>RabbitMQ 사용해보기</v-card-title>
      <v-card-actions
        ><v-btn @click="sendMQ"> send</v-btn
        ><v-btn @click="receiveMQ"> receive</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import { Channel, Connection } from "amqplib";

const amqp = require("amqplib");

export default Vue.extend({
  name: "MQTest",
});
</script>
<style scoped></style>
