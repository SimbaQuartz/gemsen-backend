const router = require("express").Router();

const User = require("../../models/UserModel");
const createError = require("http-errors");
const generateAccessToken = require("../../services/generateAccessToken");
const refreshTokenModel = require("../../services/refreshToken");
const TokenModel = require("../../models/TokenModel");

const loginUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userAlreadyExists = await User.findOne({ email: email });

    if (!userAlreadyExists) {
      throw createError.BadRequest("User not found");
    }

    if (password !== userAlreadyExists?.password) {
      throw createError.BadRequest("Password incorrect");
    }

    const payload = {
      name: userAlreadyExists.name,
      email: userAlreadyExists.email,
      password: userAlreadyExists.password,
      _id: userAlreadyExists?._id,
    };
    const accessToken = generateAccessToken(payload);

    //front end mein localstorage mein save krna  + when the api hit, then we have to pass the accessToken in headers

    const refreshToken = refreshTokenModel(payload);

    //to refresh the accesstoken , if expired

    const token = new TokenModel({
      token: refreshToken,
      userId: userAlreadyExists?._id,
    });

    res.cookie("auth", refreshToken, { httpOnly: true });

    await token.save();

    res.status(200).json({
      message: "Saved",
      data: userAlreadyExists,
      accessToken,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = loginUser;
