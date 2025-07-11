const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const {
	uploadProfilePictureUpdate,
	uploadProductPictureUpdate,
} = require("../controllers/upload.controller");
const authMiddleware = require("../middleware/authMiddleware");

// Upload profile picture for a user (by id)
router.post(
	"/profile/:id",
	authMiddleware,
	upload.single("profilePicture"),
	uploadProfilePictureUpdate
);

// Upload product picture for a product (by id)
router.post(
	"/product/:id", 
	authMiddleware,
	upload.single("image"), 
	uploadProductPictureUpdate
);

module.exports = router;
