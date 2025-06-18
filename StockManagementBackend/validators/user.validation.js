const { body, query, param } = require("express-validator");

const uuidRegex =
	/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const FullName = body("name").isString().withMessage("Name is required.");
const Email = body("email")
	.isEmail()
	.withMessage("Valid email is required.")
	.normalizeEmail();
const Password = body("password")
	.isLength({ min: 6, max: 20 })
	.withMessage("Password must be at least 6 characters long.");

const createUserValidation = [FullName, Email, Password];

const updateUserValidation = [
	param("id").isInt().withMessage("User ID must be an integer."),
	FullName,
	Email,
	Password,
];

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

module.exports = {
	createUserValidation,
	updateUserValidation,
	userIdValidation,
};

// name
// email
// password
