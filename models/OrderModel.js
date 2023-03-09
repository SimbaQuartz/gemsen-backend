const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    orderDetails: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: String,
        },
      },
    ],
    orderId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Order", OrderSchema, "orders");
