const router = require("express").Router();

const Cart = require("../../models/CartModel");
const Order = require("../../models/OrderModel");
const { ObjectId } = require("mongoose").Types;
const AddOrder = async (req, res, next) => {
  try {
    const { _id } = req.user;

    const { cartData } = req.body;
    const order = new Order({
      userId: _id,
      orderDetails: cartData,
    });

    console.log(order, "order");
    let id = 0;

    const prevOrder = await Order.findOne({})?.sort({ createdAt: -1 });

    if (!!prevOrder === true) {
      id = +prevOrder?.orderId?.split("-")[2] + 1;
    }
    const orderId = `G-1000-${id}`;

    order.orderId = orderId;

    await order.save();

    await Cart.deleteMany({
      userId: ObjectId(_id),
    });

    res.json({
      message: "order saved successfully",
      order,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = AddOrder;
