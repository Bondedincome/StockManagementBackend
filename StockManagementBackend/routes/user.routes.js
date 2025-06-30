const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const {
	getAllUsers,
	getOneUser,
	createUser,
	deleteUser,
	loginUser,
	updateUser,
	register,
} = require("../controllers/user.controller");
const setImagePathMiddleware = require("../middleware/setImagePathMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const {
	createUserValidation,
	updateUserValidation,
	userIdValidation,
} = require("../validators/user.validation");
const { validationMiddleware } = require("../middleware/validationMiddleware");
router.post(
	"/",
	authMiddleware,
	adminMiddleware, // Ensure only admins can create users
	upload.single("profilePicture"),
	setImagePathMiddleware(
		"profilePicture",
		"public/images",
		"profilePictureUrl"
	),
	createUserValidation,
	validationMiddleware,
	createUser
);
router.post("/login", loginUser);
router.post("/register", createUserValidation, validationMiddleware, register);

router.get("/", authMiddleware, getAllUsers);
router.get(
	"/:id",
	authMiddleware,
	userIdValidation,
	validationMiddleware,
	getOneUser
);
router.delete(
	"/:id",
	authMiddleware,
	userIdValidation,
	validationMiddleware,
	deleteUser
);
router.put(
	"/:id",
	authMiddleware,
	userIdValidation,
	updateUserValidation,
	validationMiddleware,
	updateUser
);

module.exports = router;
