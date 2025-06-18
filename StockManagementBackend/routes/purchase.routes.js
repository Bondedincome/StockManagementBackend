const express = require("express");
const router = express.Router();
const purchaseController = require("../controllers/purchase.controller");
const {
	createPurchaseValidation,
	updatePurchaseValidation,
} = require("../validators/purchase.validation");

router.get("/", purchaseController.getAllPurchases);
router.get("/:id", purchaseController.getOnePurchase);
router.post("/", createPurchaseValidation, purchaseController.createPurchase);
router.delete("/:id", purchaseController.deletePurchase);
router.put("/:id", updatePurchaseValidation, purchaseController.updatePurchase);

module.exports = router;
