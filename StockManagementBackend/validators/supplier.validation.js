const { body, param } = require("express-validator");

const createSupplierValidation = [
	body("firstName").isString().notEmpty(),
	body("lastName").isString().notEmpty(),
	body("email").isEmail().notEmpty(),
	body("phone").optional().isString(),
];
const updateSupplierValidation = [
    param("id").isUUID(),
	body("firstName").optional().isString(),
	body("lastName").optional().isString(),
	body("email").optional().isEmail(),
	body("phone").optional().isString(),
];
module.exports = {
	createSupplierValidation,
	updateSupplierValidation,
};