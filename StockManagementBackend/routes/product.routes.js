const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const {
	updateProductValidation,
	createProductValidation,
} = require("../validators/product.validation");

router.get("/", productController.getAllProduct);
router.get("/:id", productController.getOneProduct);
router.post("/", createProductValidation, productController.createProduct);
router.delete("/:id", productController.deleteProduct);
router.put("/:id", updateProductValidation, productController.updateProduct);

module.exports = router;
