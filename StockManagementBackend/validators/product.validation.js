const { body } = require("express-validator");

const createProductValidation = [
	body("userId").isString().notEmpty(),
	body("description").isString().notEmpty(),
	body("imageUrl").optional().isString(),
	body("category").isString().notEmpty(),
	body("quantity").isInt({ min: 0 }),
	body("expiryDate").optional().isISO8601(),
	body("productionDate").optional().isISO8601(),
	body("price").isFloat({ min: 0 }),
	body("costPrice").optional().isFloat({ min: 0 }),
];

const updateProductValidation = [
	body("description").optional().isString(),
	body("imageUrl").optional().isString(),
	body("category").optional().isString(),
	body("quantity").optional().isInt({ min: 0 }),
	body("expiryDate").optional().isISO8601(),
	body("productionDate").optional().isISO8601(),
	body("price").optional().isFloat({ min: 0 }),
	body("costPrice").optional().isFloat({ min: 0 }),
];

module.exports = {
	createProductValidation,
	updateProductValidation,
};
