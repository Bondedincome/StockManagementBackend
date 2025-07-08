const express = require("express");
const router = express.Router();

const {
	getAllSupplier,
	getOneSupplier,
	createSupplier,
	updateSupplier,
	deleteSupplier,
	getPaginatedSuppliers,
} = require("../controllers/supplier.controller");

const authMiddleware = require("../middleware/authMiddleware");
const {validationMiddleware} = require("../middleware/validationMiddleware");
const {
    createSupplierValidation,
    updateSupplierValidation,
} = require("../validators/supplier.validation");

router.get("/", authMiddleware, getAllSupplier);
router.get("/:id", authMiddleware, getOneSupplier);
router.post(
	"/",
	authMiddleware,
	createSupplierValidation,
	validationMiddleware,
	createSupplier
);
router.delete("/:id", authMiddleware, deleteSupplier);
router.put(
	"/:id",
	authMiddleware,
	updateSupplierValidation,
	validationMiddleware,
	updateSupplier
);
router.get("/paginated", authMiddleware, getPaginatedSuppliers);

module.exports = router;
