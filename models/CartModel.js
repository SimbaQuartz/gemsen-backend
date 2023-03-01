const { Schema, model } = require("mongoose");

const CartSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  SubTotalPrice: {
    type: Number,
  },
  tax: {
    type: Number,
  },
  totalPrice: {
    type: Number,
  },
});

module.exports = model("User", CartSchema, "cart");
