const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
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
  mainCategoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  subCategoryId: {
    type: Schema.Types.ObjectId,
    ref: "SubCategory",
  },
  nestedSubCategoryId: {
    type: Schema.Types.ObjectId,
    ref: "NestedSubCategory",
  },
  lastCategoryId: {
    type: Schema.Types.ObjectId,
    ref: "LastCategory",
  },
  image: {
    type: String,
  },
});

module.exports = model("Product", ProductSchema, "product");
