const router = require("express").Router();

const CartModel = require("../../models/CartModel");
const { ObjectId } = require("mongoose").Types;
const getCart = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const cartDetails = await CartModel.find({ userId: ObjectId(_id) });

    res.json({
      message: "Cart Fetched succesfully",
      cartDetails,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getCart;
