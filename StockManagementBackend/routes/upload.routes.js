const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const uploadFileService = require("../services/upload.service");

router.post("/", upload.single("file"), (req, res) => {
	try {
		const filePath = uploadFileService(req.file, "public/images");
		res.json({ success: true, path: filePath });
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
});

module.exports = router;
