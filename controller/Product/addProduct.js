const router = require("express").Router();

//const User = require("../../models/UserModel");
const Product = require("../../models/ProductModel");

const AddProduct = async (req, res, next) => {
  try {
    const { name, sku, qty } = req.body;
    const product = new Product({
      name,
      sku,
      qty,
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
