const router = require("express").Router();

const User = require("../../models/UserModel");
const createError = require("http-errors");
const generateAccessToken = require("../../services/generateAccessToken");
const TokenModel = require("../../models/TokenModel");

const SavedUser = async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;

    const userAlreadyExists = await User.findOne({ email: email });

    if (userAlreadyExists) {
      throw createError.BadRequest("User already exists")
    }
    const user = new User({
      name: name,
      email,
      password,
      phone: phone,
      data: {
        name: name,
        email,
      },
    });
    await user.save();

    const payload = {
      name: user.name,
      email: user.email,
      password: user.password
    }
    const tokenValue = generateAccessToken(payload)

    const token = new TokenModel({
      token: tokenValue,
      userId: user?._id
    })
    await token.save()

    res.status(200).json({
      message: "Saved",
      user,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = SavedUser;
