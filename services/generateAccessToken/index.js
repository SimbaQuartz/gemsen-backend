const jwt = require("jsonwebtoken");
const createError = require("http-errors");


const generateAccessToken = (payload) => {
    console.log(payload, "payload")
    const expiresIn = '1d'

    const accessSecret = "3s6v9y$B&E)H@McQfThWmZq4t7w!z%C*"
    const token = jwt.sign(payload, accessSecret, { expiresIn });
    return token;
}

const refreshAccessToken = (payload) => {
    const expiresIn = '1d'

    const accessSecret = "RgUkXp2s5v8y/B?E(H+MbPeShVmYq3t6"
    const token = jwt.sign(payload, accessSecret, { expiresIn });
    return token;
}
module.exports = generateAccessToken 