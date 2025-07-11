const { body, param } = require("express-validator");

const uuidRegex =
	/^usr_[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const userIdValidation = [
	param("id")
		.exists()
		.withMessage("User ID is required")
		.bail()
		.isString()
		.withMessage("User ID must be a string")
		.bail()
		.matches(uuidRegex)
		.withMessage("User ID must be a valid UUID"),
];

const createUserValidation = [
	body("firstName")
		.isString()
		.notEmpty()
		.withMessage("First name is required."),
	body("lastName").isString().notEmpty().withMessage("Last name is required."),
	body("surName").optional().isString(),
	body("profilePictureUrl").optional().isString(),
	body("email")
		.isEmail()
		.withMessage("Valid email is required.")
		.normalizeEmail(),
	body("password")
		.isLength({ min: 6, max: 20 })
		.withMessage("Password must be 6-20 characters."),
	body("roleId").optional().isString().notEmpty().withMessage("Role ID is required."),
];

const updateUserValidation = [
	body("firstName").optional().isString(),
	body("lastName").optional().isString(),
	body("surName").optional().isString(),
	body("profilePictureUrl").optional().isString(),
	body("email").optional().isEmail().normalizeEmail(),
	body("password").optional().isLength({ min: 6, max: 20 }),
	body("roleId").optional().isString(),
];

module.exports = {
	userIdValidation,
	createUserValidation,
	updateUserValidation,
};
