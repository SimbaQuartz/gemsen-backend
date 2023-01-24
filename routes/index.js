const router = require("express").Router();
const createError = require("http-errors");
const UserModel = require("../models/userModel");

const apiRoutes = require("./api");

router.post("/api", async (req, res, next) => {
  const { name, email, password1 } = req.body;
  console.log(name, email, password1);
  const user = new UserModel({
    name,
    email,
    password: password1,
  });
  await user.save();
  res.send(user);
});

module.exports = router;
