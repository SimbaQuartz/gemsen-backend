const router = require("express").Router();

const addCategory = require("../../controller/Category/AddCategory");
const deleteCategory = require("../../controller/Category/DeleteCategory");
const updateCategory = require("../../controller/Category/updateCategory");
const addSubCategory = require("../../controller/Category/addSubCategory");
const getSubCategory = require("../../controller/Category/getSubCategory");
const addNestedSubCategory = require("../../controller/Category/addNestedSubCategory");
const validateAccessToken = require("../../services/jwtValidation");

router.post("/addcategory", addCategory);
router.post("/addsubcategory", addSubCategory);
router.post("/addNestedSubcategory", addNestedSubCategory);
router.get("/getSubCategory/:id", getSubCategory);
router.delete("/deletecategory/:id", deleteCategory);
router.put("/updatecategory/:id", updateCategory);

module.exports = router;
