const router = require("express").Router();

const Category = require("../../models/CategoryModel");
const { ObjectId } = require("mongoose").Types;
const UpdateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await Category.findOneAndUpdate(
      { _id: ObjectId(id) },
      { name: name, "data.name": name },
      { new: true }
    );

    res.json({
      message: "Updated succesfully",
      category,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = UpdateCategory;
