const { Schema, model } = require("mongoose");

const NestedSubCategorySchema = new Schema({
  name: {
    type: String,
  },
  subCategoryId: {
    type: Schema.Types.ObjectId,
    ref: "SubCategory",
  },
});

module.exports = model(
  "NestedSubCategory",
  NestedSubCategorySchema,
  "nestedSubCategory"
);
