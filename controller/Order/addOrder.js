const router = require("express").Router();

//const User = require("../../models/UserModel");
const Order = require("../../models/OrderModel");

const AddOrder = async (req, res, next) => {
  try {
    const { name, sku, qty } = req.body;
    const order = new Order({
      name,
      sku,
      qty,
    });
    await order.save();

    res.json({
      message: "order saved successfully",
      order,
    });
    console.log(req.body);
  } catch (err) {
    next(err);
  }
};

module.exports = AddOrder;
