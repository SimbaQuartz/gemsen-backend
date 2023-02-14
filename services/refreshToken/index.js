const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const refreshToken = (payload) => {
  const expiresIn = "1d";

  const refreshSecret = "RgUkXp2s5v8y/B?E(H+MbPeShVmYq3t6";
  const token = jwt.sign(payload, refreshSecret, { expiresIn });
  return token;
};
module.exports = refreshToken;
