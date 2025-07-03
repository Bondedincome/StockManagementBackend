const { body } = require("express-validator");

const createCustomerValidation = [
	body("firstName").isString().notEmpty(),
	body("lastName").isString().notEmpty(),
	body("email").isEmail().notEmpty(),
	body("phone").optional().isString(),
];
const updateCustomerValidation = [
	body("firstName").optional().isString(),
	body("lastName").optional().isString(),
	body("email").optional().isEmail(),
	body("phone").optional().isString(),
];
module.exports = {
	createCustomerValidation,
	updateCustomerValidation,
};
