const { Schema, model } = require("mongoose");

const LastCategorySchema = new Schema({
  name: {
    type: String,
  },
  nestedCategoryId: {
    type: Schema.Types.ObjectId,
    ref: "NestedSubCategory",
  },
});

module.exports = model("LastCategory", LastCategorySchema, "lastCategory");
