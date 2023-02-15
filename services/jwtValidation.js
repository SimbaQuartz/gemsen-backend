const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const refreshTokenLife = "1d";

const refreshSecret = "RgUkXp2s5v8y/B?E(H+MbPeShVmYq3t6";
const accessTokenLife = "7d";

const accessSecret = "3s6v9y$B&E)H@McQfThWmZq4t7w!z%C*";

const Token = require("../models/TokenModel");
const generateAccessToken = require("./generateAccessToken");
const refreshTokenModel = require("./refreshToken");

const validateAccessToken = async (req, res, next) => {
  if (!req.headers["authorization"])
    return next(createError.Unauthorized("Please login again"));
  //accesstoken
  const token = req.headers["authorization"];

  console.log(token, "token");
  jwt.verify(token, accessSecret, async (err, decoded) => {
    if (err) {
      return next(createError.Unauthorized("Please login again"));
    }
    req.user = decoded;
    next();
  });
};

module.exports = validateAccessToken;
