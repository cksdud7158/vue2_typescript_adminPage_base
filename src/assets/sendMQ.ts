import { Channel, Connection } from "amqplib";

const amqp = require("amqplib");

amqp
  .connect("amqp://localhost:15672")
  .then(function (conn: Connection) {
    return conn
      .createChannel()
      .then(function (ch: Channel) {
        const q = "hello";
        const msg = "Hello World!";

        const ok = ch.assertQueue(q, { durable: false });

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
