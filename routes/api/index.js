const app = require("express").Router();

const savedUser = require("../../controller/userLogin/savedUser");

app.use("/saveduser", savedUser);

module.exports = app;
