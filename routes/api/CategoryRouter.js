const router = require("express").Router();

const addCategory = require("../../controller/Category/AddCategory");
const deleteCategory = require("../../controller/Category/DeleteCategory");
const updateCategory = require("../../controller/Category/updateCategory");

router.post("/addcategory", addCategory);
router.delete("/deletecategory/:id", deleteCategory);
router.put("/updatecategory/:id", updateCategory);

module.exports = router;