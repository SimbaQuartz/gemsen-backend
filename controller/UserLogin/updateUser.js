const router = require("express").Router();

const User = require("../../models/UserModel");
const UpdateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name1 } = req.body;

    // const user = await User.findOne({
    //   _id: ObjectId(id),
    // });

    // console.log(user);

    // user.name = name1;
    // user.data.name = name1;

    // await user.save();

    const user = await User.findOneAndUpdate(
      { _id: ObjectId(id) },
      { name: name1, "data.name": name1 },
      { new: true }
    );

    res.json({
      message: "Updated succesfully",
      user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = UpdateUser;
