const app = require("express").Router();
const authRoot = require("./AuthRouter");
const categoryRoute = require("./CategoryRouter");
const orderRoute = require("./OrderRouter");
const productRoute = require("./ProductRouter");

app.use("/auth", authRoot);
app.use("/category", categoryRoute);
app.use("/order", orderRoute);
app.use("/product", productRoute);

module.exports = app;
