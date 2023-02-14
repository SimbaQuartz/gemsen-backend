const router = require("express").Router();

const User = require("../../models/UserModel");
const createError = require("http-errors");
const generateAccessToken = require("../../services/generateAccessToken");
const refreshTokenModel = require("../../services/refreshToken");
const TokenModel = require("../../models/TokenModel");

const SavedUser = async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;

    const userAlreadyExists = await User.findOne({ email: email });

    if (userAlreadyExists) {
      throw createError.BadRequest("User already exists");
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

    const payload = {
      name: user.name,
      email: user.email,
      password: user.password,
      _id: user?._id,
    };
    const accessToken = generateAccessToken(payload);

    //front end mein localstorage mein save krna  + when the api hit, then we have to pass the accessToken in headers

    const refreshToken = refreshTokenModel(payload);

    //to refresh the accesstoken , if expired

    const token = new TokenModel({
      token: refreshToken,
      userId: user?._id,
    });

    res.cookie("auth", refreshToken, { httpOnly: true });

    await token.save();
    await user.save();

    res.status(200).json({
      message: "Saved",
      user,
      accessToken,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = SavedUser;
