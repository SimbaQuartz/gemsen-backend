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
});

module.exports = model("User", User, "users");
