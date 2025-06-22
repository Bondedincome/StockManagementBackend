const express = require("express");
const router = express.Router();
const purchaseController = require("../controllers/purchase.controller");
const {
	createPurchaseValidation,
	updatePurchaseValidation,
} = require("../validators/purchase.validation");

const authMiddleware = require("../middleware/authMiddleware");
const { validationMiddleware } = require("../middleware/validationMiddleware");

router.get("/", authMiddleware, purchaseController.getAllPurchases);
router.get("/:id", authMiddleware, purchaseController.getOnePurchase);
router.post(
	"/",
	authMiddleware,
	createPurchaseValidation,
	validationMiddleware,
	purchaseController.createPurchase
);
router.delete("/:id", authMiddleware, purchaseController.deletePurchase);
router.put(
	"/:id",
	authMiddleware,
	updatePurchaseValidation,
	validationMiddleware,
	purchaseController.updatePurchase
);
router.get(
	"/paginated",
	authMiddleware,
	purchaseController.getPaginatedPurchases
);

module.exports = router;
