const router = require("express").Router();
const { ObjectId } = require("mongoose").Types;
const Product = require("../../models/ProductModel");

const getSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await Product.findOne({
      _id: ObjectId(id),
    });

    res.json({
      message: "product Fetched successfully",
      products,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getSingleProduct;
