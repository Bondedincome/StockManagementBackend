const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const {
	updateProductValidation,
	createProductValidation,
} = require("../validators/product.validation");

const authMiddleware = require("../middleware/authMiddleware");
const { validationMiddleware } = require("../middleware/validationMiddleware");

router.get("/", authMiddleware, productController.getAllProduct);
router.get("/:id", authMiddleware, productController.getOneProduct);
router.post(
	"/",
	authMiddleware,
	createProductValidation,
	validationMiddleware,
	productController.createProduct
);
router.delete("/:id", authMiddleware, productController.deleteProduct);
router.put(
	"/:id",
	authMiddleware,
	updateProductValidation,
	validationMiddleware,
	productController.updateProduct
);
router.get(
	"/paginated",
	authMiddleware,
	productController.getPaginatedProducts
);

module.exports = router;
