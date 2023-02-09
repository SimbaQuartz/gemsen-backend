const { Schema, model } = require("mongoose");

const SubCategorySchema = new Schema({
  name: {
    type: String,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

module.exports = model("SubCategory", SubCategorySchema, "subCategory");
