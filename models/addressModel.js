const { Schema, model } = require("mongoose");

const AddressSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    type: {
      type: String,
      enum: ["Shipping", "Billing"],
    },
    city: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Address", AddressSchema, "address");
