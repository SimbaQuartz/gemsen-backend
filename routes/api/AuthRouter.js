const router = require("express").Router();

const savedUser = require("../../controller/UserLogin/SavedUser");
const getUser = require("../../controller/userLogin/getUser");
const updateUser = require("../../controller/userLogin/updateUser");
const deleteUser = require("../../controller/userLogin/deleteUser");

router.post("/saved", savedUser);
router.post("/get", getUser);
router.post("/updateUser/:id", updateUser);
router.post("/deleteUser/:id", deleteUser);
module.exports = router;
