// middleware/setImagePath.js
const uploadFileService = require("../services/upload.service");

function setImagePath(field, uploadDir, bodyField) {
	return (req, res, next) => {
		if (req.file) {
			try {
				const relativePath = uploadFileService(req.file, uploadDir);
				req.body[bodyField] = `/images/${relativePath}`;
			} catch (err) {
				return res.status(400).json({ error: err.message });
			}
		}
		next();
	};
}

module.exports = setImagePath;
