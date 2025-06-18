const express = require("express");
const router = express.Router();
const {
	getAllUsers,
	getOneUser,
	createUser,
	deleteUser,
	loginUser,
	updateUser,
	register,
} = require("../controllers/user.controller");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const {
	createUserValidation,
	updateUserValidation,
} = require("../validators/user.validation");
const { validationMiddleware } = require("../middleware/validationMiddleware");
router.post(
	"/",
	authMiddleware,
	adminMiddleware, // Ensure only admins can create users
	createUserValidation,
	validationMiddleware,
	createUser
);
router.post("/login", loginUser);
router.post("/register", createUserValidation, validationMiddleware, register);

router.get("/", authMiddleware, getAllUsers);
router.get("/:id", authMiddleware, getOneUser);
router.delete("/:id", authMiddleware, deleteUser);
router.put(
	"/:id",
	authMiddleware,
	updateUserValidation,
	validationMiddleware,
	updateUser
);

module.exports = router;
