const { body } = require("express-validator");

const createUploadValidation = [
	body("fileName")
		.exists()
		.withMessage("File name is required")
		.isString()
		.withMessage("File name must be a string"),
];

module.exports = {
	createUploadValidation,
};
