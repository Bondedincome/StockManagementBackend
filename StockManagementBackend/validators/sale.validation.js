const { body } = require("express-validator");

const createSaleValidation = [
	body("createdBy").optional().isString().notEmpty(),
];

const updateSaleValidation = [body("createdBy").optional().isString()];

module.exports = {
	createSaleValidation,
	updateSaleValidation,
};
