const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");

const authRouter = require("./routers/auth");
const coffeeRouter = require("./routers/coffee");
const orderRouter = require("./routers/ordercoffee");
const { PORT } = require("./config/constants");

const app = express();
app.use(corsMiddleWare());

app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use("/", authRouter);
app.use("/coffees", coffeeRouter);
app.use("/orders", orderRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
