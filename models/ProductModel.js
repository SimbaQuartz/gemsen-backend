const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },

    inventory: {
      type: Number,
    },
    remainingStocksNumber: {
      type: Number,
    },
    price: {
      type: Number,
    },

    mainCategoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    brandId: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
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
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", ProductSchema, "product");
