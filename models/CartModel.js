const { Schema, model } = require("mongoose");

const CartSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: Number,
  },
  data: {
    name: { type: String },
    email: { type: String },
  },
});

module.exports = model("User", CartSchema, "cart");
