const router = require("express").Router();

const addCategory = require("../../controller/Category/AddCategory");

router.post("/addcategory", addCategory);

module.exports = router;
