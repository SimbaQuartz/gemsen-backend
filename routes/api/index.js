const app = require("express").Router();
const authRoot = require("./AuthRouter");

app.use("/auth", authRoot);

module.exports = app;
