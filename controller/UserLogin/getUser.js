const router = require("express").Router();

const User = require("../../models/UserModel");

const GetUser = async (req, res, next) => {
  try {
    const user = await User.find({});
    res.json({
      message: "fetched succesfully",
      user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = GetUser;
