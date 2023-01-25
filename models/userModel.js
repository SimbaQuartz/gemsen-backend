const { Schema, model } = require("mongoose");

const User = new Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  data: {
    name: { type: String },
    email: { type: String },
  },
});

module.exports = model("User", User, "users");
