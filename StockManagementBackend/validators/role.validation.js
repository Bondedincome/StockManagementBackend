const { body } = require("express-validator");

const createRoleValidation = [
	body("roleType").isString().notEmpty(),
	body("createdBy").optional().notEmpty(),
];

const updateRoleValidation = [
	body("roleType").isString().isString(),
	body("updatedBy").optional().notEmpty(),
];

module.exports = {
	createRoleValidation,
	updateRoleValidation,
};
