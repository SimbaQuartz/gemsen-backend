const router = require("express").Router();

const CartModel = require("../../models/CartModel");

const AddCart = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { productId, quantity } = req.body;

    const cart = new CartModel({
      userId: _id,
      productId,
      quantity,
    });
    await cart.save();

    res.json({
      message: "Product added successfully",
      cart,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = AddCart;
