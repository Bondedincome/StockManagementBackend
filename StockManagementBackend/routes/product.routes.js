const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const productController = require("../controllers/product.controller");
const {
	updateProductValidation,
	createProductValidation,
} = require("../validators/product.validation");

const authMiddleware = require("../middleware/authMiddleware");
const { validationMiddleware } = require("../middleware/validationMiddleware");
const setImagePathMiddleware = require("../middleware/setImagePathMiddleware");

router.get("/", authMiddleware, productController.getAllProduct);
router.get("/:id", authMiddleware, productController.getOneProduct);
router.post(
	"/",
	authMiddleware,
	upload.single("file"),
	setImagePathMiddleware("file", "public/images", "imageUrl"),
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
