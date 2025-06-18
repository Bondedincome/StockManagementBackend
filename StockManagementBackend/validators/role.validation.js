const { body } = require("express-validator");

const createRoleValidation = [
	body("roleType").isString().notEmpty(),
	body("createdBy").isString().notEmpty(),
];

const updateRoleValidation = [body("roleType").optional().isString()];

module.exports = {
	createRoleValidation,
	updateRoleValidation,
};
