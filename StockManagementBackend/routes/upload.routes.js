const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const {
	uploadProfilePicture,
	uploadProductPicture,
} = require("../controllers/upload.controller");
const authMiddleware = require("../middleware/authMiddleware");

// Upload profile picture for a user (by id)
router.post(
	"/profile-picture/:id",
	authMiddleware,
	upload.single("profilePicture"),
	uploadProfilePicture
);

// Upload product picture for a product (by id)
router.post(
	"/product-picture/:id",
	authMiddleware,
	upload.single("file"),
	uploadProductPicture
);

module.exports = router;
