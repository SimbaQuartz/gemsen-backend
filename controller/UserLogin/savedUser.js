const router = require("express").Router();

const User = require("../../models/UserModel");

const SavedUser = async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;

    const userAlreadyExists = await User.findOne({ email: email });

    if (userAlreadyExists) {
      res.status(500).json({ message: "User already exists" });
    }
    const user = new User({
      name: name,
      email,
      password,
      phone: phone,
      data: {
        name: name,
        email,
      },
    });
    await user.save();

    const accessToken = "1111";
    res.status(200).json({
      message: "Saved",
      user,
      accessToken,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = SavedUser;
