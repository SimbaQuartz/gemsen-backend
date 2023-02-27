const { Schema, model } = require("mongoose");

const OrderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
  },
  data: {
    name: { type: String },
    sku: { type: String },
    qty: { type: Number },
  },
});

module.exports = model("Order", OrderSchema, "orders");
