const router = require("express").Router();

const User = require("../../models/UserModel");
const DeleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findOneAndDelete({ _id: ObjectId(id) });

    res.json({
      message: "Delete succesfully",
      user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = DeleteUser;
