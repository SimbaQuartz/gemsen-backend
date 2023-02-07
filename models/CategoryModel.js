const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  name: {
    Type: String,
  },
});

module.exports = model("User", CategorySchema, "cart");
