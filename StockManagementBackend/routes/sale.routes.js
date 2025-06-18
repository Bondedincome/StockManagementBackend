const express = require("express");
const router = express.Router();
const saleController = require("../controllers/sale.controller");

router.get("/", saleController.getAllSales);
router.get("/:id", saleController.getOneSale);
router.post("/", saleController.createSale);
router.delete("/:id", saleController.deleteSale);
router.put("/:id", saleController.updateSale);

module.exports = router;