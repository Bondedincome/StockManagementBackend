const express = require("express");
const router = express.Router();
const saleController = require("../controllers/sale.controller");
const {
	createSaleValidation,
	updateSaleValidation,
} = require("../validators/sale.validation");
const authMiddleware = require("../middleware/authMiddleware");
const { validationMiddleware } = require("../middleware/validationMiddleware");

router.get("/", authMiddleware, saleController.getAllSales);
router.get("/:id", authMiddleware, saleController.getOneSale);
router.post(
	"/",
	authMiddleware,
	createSaleValidation,
	validationMiddleware,
	saleController.createSale
);
router.delete("/:id", authMiddleware, saleController.deleteSale);
router.put(
	"/:id",
	authMiddleware,
	updateSaleValidation,
	validationMiddleware,
	saleController.updateSale
);
router.get("/paginated", authMiddleware, saleController.getPaginatedSales);

module.exports = router;
