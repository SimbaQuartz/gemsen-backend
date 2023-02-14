const router = require("express").Router();

const User = require("../../models/UserModel");

const GetUser = async (req, res, next) => {
  try {
    console.log(req.user, "eee");
    // const user = await User.find({});
    res.json({
      message: "fetched succesfully",
      user: req.user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = GetUser;
