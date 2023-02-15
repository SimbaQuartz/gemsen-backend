const router = require("express").Router();

const addCategory = require("../../controller/Category/AddCategory");
const deleteCategory = require("../../controller/Category/DeleteCategory");
const updateCategory = require("../../controller/Category/updateCategory");
const addSubCategory = require("../../controller/Category/addSubCategory");
const validateAccessToken = require("../../services/jwtValidation");

router.post("/addcategory", addCategory);
router.post("/addsubcategory", addSubCategory);
router.delete("/deletecategory/:id", deleteCategory);
router.put("/updatecategory/:id", updateCategory);

module.exports = router;
