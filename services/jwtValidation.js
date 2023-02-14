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

  const token = req.headers["authorization"];
  jwt.verify(token, accessSecret, async (err, decoded) => {
    console.log(decoded, "decodes");
    // if (err) {
    //   console.log("///////////////////roor: ", err);
    //   try {
    //     if (err.message === "jwt expired") {
    //       if (req.cookies?.auth) {
    //         const { auth } = req.cookies;
    //         const payload = jwt.verify(auth, refreshSecret);
    //         console.log(payload, "pay");
    //         if (!payload)
    //           throw createError.Unauthorized(
    //             "Session expired. Please login again."
    //           );

    //         const resultQuery = await Token.findOne({
    //           user: payload.data._id,
    //           token: auth,
    //         });
    //         console.log(resultQuery);
    //         if (!resultQuery)
    //           return next(createError.Unauthorized("Please login again"));

    //         const jwtPayload = {
    //           data: payload.data,
    //         };

    //         const accessToken = generateAccessToken(
    //           jwtPayload,
    //           accessTokenLife
    //         );
    //         const refreshToken = refreshTokenModel(
    //           jwtPayload,
    //           refreshTokenLife
    //         );
    //         if (accessToken && refreshToken) {
    //           resultQuery.overwrite(
    //             new Token({
    //               user: payload.data._id,
    //               token: refreshToken,
    //             })
    //           );
    //           await resultQuery.save();
    //           res.cookie("auth", refreshToken, { httpOnly: true });
    //           const json_ = res.json; // capture the default resp.json implementation

    //           res.json = function (object) {
    //             object["accessToken"] = accessToken;

    //             json_.call(res, object);
    //           };
    //           req.user = { data: payload.data };
    //           return next();
    //         }
    //       }
    //     }
    //     const message =
    //       err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
    //     return next(createError.Unauthorized(message));
    //   } catch (error) {
    //     console.log("error: ", error);
    //     return next(createError.InternalServerError());
    //   }
    // }
    req.user = decoded;
    next();
  });
};

module.exports = validateAccessToken;
