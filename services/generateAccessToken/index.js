const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const generateAccessToken = (payload) => {
  const expiresIn = "7d";

  const accessSecret = "3s6v9y$B&E)H@McQfThWmZq4t7w!z%C*";
  const token = jwt.sign(payload, accessSecret, { expiresIn });
  return token;
};

module.exports = generateAccessToken;
