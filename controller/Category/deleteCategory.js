const router = require("express").Router();

const Category = require("../../models/CategoryModel");
const { ObjectId } = require("mongoose").Types;
const DeleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await Category.findOneAndDelete({ _id: ObjectId(id) });

    res.json({
      message: "Delete succesfully",
      category,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = DeleteCategory;
