const router = require("express").Router();

const Cart = require("../../models/CartModel");
const { ObjectId } = require("mongoose").Types;
const DeleteCart = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Cart.findOneAndDelete({ _id: ObjectId(id) });

    res.json({
      message: "Delete succesfully",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = DeleteCart;
