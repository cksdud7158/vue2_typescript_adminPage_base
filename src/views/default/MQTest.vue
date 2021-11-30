<template>
  <v-container> MQ </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import { Channel, Connection } from "amqplib";

export default Vue.extend({
  name: "MQTest",
  methods: {
    sendMQ() {
      this.$_amqp
        .connect("amqp://localhost")
        .then(function (conn: Connection) {
          return conn
            .createChannel()
            .then(function (ch: Channel) {
              var q = "hello";
              var msg = "Hello World!";

              var ok = ch.assertQueue(q, { durable: false });

              return ok.then(function (_qok) {
                ch.sendToQueue(q, Buffer.from(msg));
                console.log(" [x] Sent '%s'", msg);
                return ch.close();
              });
            })
            .finally(function () {
              conn.close();
            });
        })
        .catch(console.warn);
    },
    receiveMQ() {
      this.$_amqp
        .connect("amqp://localhost")
        .then(function (conn: Connection) {
          process.once("SIGINT", function () {
            conn.close();
          });
          return conn.createChannel().then(function (ch) {
            var ok = ch.assertQueue("hello", { durable: false });

            ok.then(function (_qok) {
              return ch.consume(
                "hello",
                function (msg) {
                  if (!msg) return;
                  console.log(" [x] Received '%s'", msg.content.toString());
                },
                { noAck: true }
              );
            });

            return ok.then(function (_consumeOk) {
              console.log(" [*] Waiting for messages. To exit press CTRL+C");
            });
          });
        })
        .catch(console.warn);
    },
  },
});
</script>
<style scoped></style>
