const express = require("express");
const router = express.Router();
const purchaseController = require("../controllers/purchase.controller");

router.get("/", purchaseController.getAllPurchases);
router.get("/:id", purchaseController.getOnePurchase);
router.post("/", purchaseController.createPurchase);
router.delete("/:id", purchaseController.deletePurchase);
router.put("/:id", purchaseController.updatePurchase);

module.exports = router;
