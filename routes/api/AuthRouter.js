const router = require("express").Router();

const savedUser = require("../../controller/UserLogin/SavedUser");
const getUser = require("../../controller/userLogin/getUser");
const updateUser = require("../../controller/userLogin/updateUser");
const deleteUser = require("../../controller/userLogin/deleteUser");

router.post("/saved", savedUser);
router.get("/get", getUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
module.exports = router;
