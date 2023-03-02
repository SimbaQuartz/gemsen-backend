const app = require("express").Router();
const authRoot = require("./AuthRouter");
const categoryRoute = require("./CategoryRouter");
const orderRoute = require("./OrderRouter");
const productRoute = require("./ProductRouter");
const cartRoute = require("./CartRouter");

app.use("/auth", authRoot);
app.use("/category", categoryRoute);
app.use("/order", orderRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);

module.exports = app;
