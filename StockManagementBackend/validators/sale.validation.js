const { body } = require("express-validator");

const createSaleValidation = [
	body("productSales")
		.isArray({ min: 1 })
		.withMessage("productSales must be a non-empty array"),
	body("productSales.*.productId")
		.isString()
		.notEmpty()
		.withMessage("Each productSale must have a valid productId"),
	body("productSales.*.saleQuantity")
		.isInt({ min: 1 })
		.withMessage("Each productSale must have a saleQuantity of at least 1"),
	body("productSales.*.salePrice")
		.isFloat({ min: 0 })
		.withMessage("Each productSale must have a non-negative salePrice"),
];

const updateSaleValidation = [
	body("productSales")
		.isArray({ min: 1 })
		.withMessage("productSales must be a non-empty array"),
	body("productSales.*.productId")
		.isString()
		.notEmpty()
		.withMessage("Each productSale must have a valid productId"),
	body("productSales.*.saleQuantity")
		.isInt({ min: 1 })
		.withMessage("Each productSale must have a saleQuantity of at least 1"),
	body("productSales.*.salePrice")
		.isFloat({ min: 0 })
		.withMessage("Each productSale must have a non-negative salePrice"),
];

module.exports = {
	createSaleValidation,
	updateSaleValidation,
};
