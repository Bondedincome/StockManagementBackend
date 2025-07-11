const { body } = require("express-validator");

// Fixed validation for purchase creation
const createPurchaseValidation = [
	body("supplierId").isString().notEmpty(),
	body("customerId").isString().notEmpty(),
	body("productId").isString().notEmpty(),
	body("productPurchases").isArray().notEmpty(),
	body("productPurchases.*.productId").isString().notEmpty(),
	body("productPurchases.*.purchaseQuantity").isInt({ min: 1 }),
	body("productPurchases.*.purchasePrice").isFloat({ min: 0 }),
];

// Fixed validation for purchase updates
const updatePurchaseValidation = [
	body("supplierId").optional().isString().notEmpty(),
	body("customerId").optional().isString().notEmpty(),
	body("productId").optional().isString().notEmpty(),
	body("productPurchases").optional().isArray().notEmpty(),
	body("productPurchases.*.productId").optional().isString().notEmpty(),
	body("productPurchases.*.purchaseQuantity").optional().isInt({ min: 1 }),
	body("productPurchases.*.purchasePrice").optional().isFloat({ min: 0 }),
];

module.exports = {
	createPurchaseValidation,
	updatePurchaseValidation,
};
