import { Connection } from "amqplib";

const amqp = require("amqplib");
amqp
  .connect("amqp://localhost:15672")
  .then(function (conn: Connection) {
    process.once("SIGINT", function () {
      conn.close();
    });
    return conn.createChannel().then(function (ch) {
      const ok = ch.assertQueue("hello", { durable: false });

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
