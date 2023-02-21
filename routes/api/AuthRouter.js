const router = require("express").Router();

const savedUser = require("../../controller/UserLogin/SavedUser");
const getUser = require("../../controller/userLogin/getUser");
const updateUser = require("../../controller/userLogin/updateUser");
const deleteUser = require("../../controller/userLogin/deleteUser");
const loginUser = require("../../controller/userLogin/loginUser");
const validateAccessToken = require("../../services/jwtValidation");
router.post("/saved", savedUser);
router.get("/me", validateAccessToken, getUser);
router.post("/login", loginUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
module.exports = router;
