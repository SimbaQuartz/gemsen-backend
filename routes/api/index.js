const app = require("express").Router();
const authRoot = require("./AuthRouter");
const categoryRoot = require("./CategoryRouter");

app.use("/auth", authRoot);
app.use("/category", categoryRoot);

module.exports = app;
