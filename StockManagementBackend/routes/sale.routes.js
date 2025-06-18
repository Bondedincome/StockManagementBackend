const express = require("express");
const router = express.Router();
const saleController = require("../controllers/sale.controller");
const {
	createSaleValidation,
	updateSaleValidation,
} = require("../validators/sale.validation");

router.get("/", saleController.getAllSales);
router.get("/:id", saleController.getOneSale);
router.post("/", createSaleValidation, saleController.createSale);
router.delete("/:id", saleController.deleteSale);
router.put("/:id", updateSaleValidation, saleController.updateSale);

module.exports = router;
