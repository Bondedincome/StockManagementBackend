const { body, query, params } = require("express-validator");

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
	// params("id").isInt().withMessage("User ID must be an integer."),
	FullName,
	Email,
	Password,
];

module.exports = {
    createUserValidation,
    updateUserValidation,
};

// name
// email
// password
