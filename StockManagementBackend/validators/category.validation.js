const { body } = require("express-validator");

const validateCategory = [
	body("name")
        .optional()
		.trim()
		.notEmpty()
		.withMessage("Category name is required")
		.isLength({ min: 2, max: 100 })
		.withMessage("Category name must be between 2 and 100 characters"),
	body("description")
		.optional()
		.trim()
		.isLength({ max: 255 })
		.withMessage("Description must be less than 255 characters"),
];

module.exports = { validateCategory };
