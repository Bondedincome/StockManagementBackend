const path = require("path");
const fs = require("fs");
const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

/**
 * Handles file upload and saves it to the specified directory.
 * Validates file type and returns a relative path.
 * @param {Object} file - The file object (e.g., from multer).
 * @param {string} uploadDir - The directory to save the file.
 * @returns {string} The relative path to the saved file.
 */
const uploadFileService = (file, uploadDir) => {
	if (!file) throw new Error("No file provided");
	if (!allowedMimeTypes.includes(file.mimetype)) {
		throw new Error("Invalid file type. Only images are allowed.");
	}
	if (!fs.existsSync(uploadDir)) {
		fs.mkdirSync(uploadDir, { recursive: true });
	}
	const fileName = Date.now() + "_" + file.originalname;
	const filePath = path.join(uploadDir, fileName);
	fs.writeFileSync(filePath, file.buffer);
	// Return relative path for serving via HTTP
	return path
		.relative(path.join(__dirname, "..", "public"), filePath)
		.replace(/\\/g, "/");
};

module.exports = uploadFileService;
