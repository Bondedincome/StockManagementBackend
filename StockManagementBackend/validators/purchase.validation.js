const { body } = require("express-validator");

const createPurchaseValidation = [
	body("purchaseId").isString().notEmpty(),
	body("userId").isString().notEmpty(),
	body("productId").isString().notEmpty(),
	body("quantity").isInt({ min: 1 }),
	body("price").isFloat({ min: 0 }),
];

const updatePurchaseValidation = [
	body("quantity").optional().isInt({ min: 1 }),
	body("price").optional().isFloat({ min: 0 }),
];

module.exports = {
	createPurchaseValidation,
	updatePurchaseValidation,
};
