const router = require("express").Router();
const { ObjectId } = require("mongoose").Types;
const Product = require("../../models/ProductModel");

const GetProduct = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const products = await Product.find({
      lastCategoryId: ObjectId(categoryId),
    });

    res.json({
      message: "product saved successfully",
      products,
    });
    console.log(req.body);
  } catch (err) {
    next(err);
  }
};

module.exports = GetProduct;
