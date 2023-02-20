const app = require("express").Router();
const authRoot = require("./AuthRouter");
const categoryRoute = require("./CategoryRouter");

app.use("/auth", authRoot);
app.use("/category", categoryRoute);

module.exports = app;
