const router = require("express").Router();

//const User = require("../../models/UserModel");
const Product = require("../../models/ProductModel");

const AddProduct = async (req, res, next) => {
  try {
    const {
      name,
      sku,
      qty,
      mainCategoryId,
      subCategoryId,
      nestedSubCategoryId,
      lastCategoryId,
      description,
      inventory,
    } = req.body;

    console.log(req.body);
    const product = new Product({
      name,
      sku,
      qty,
      mainCategoryId,
      subCategoryId,
      nestedSubCategoryId,
      lastCategoryId,
      description,
      inventory,
    });
    await product.save();

    res.json({
      message: "product saved successfully",
      product,
    });
    console.log(req.body);
  } catch (err) {
    next(err);
  }
};

module.exports = AddProduct;
