const express = require("express");
const router = express.Router();
const roleController = require("../controllers/role.controller");

// Validators
const {
	createRoleValidation,
	updateRoleValidation,
} = require("../validators/role.validation");

// Middlewares
const authMiddleware = require("../middleware/authMiddleware");
const { validationMiddleware } = require("../middleware/validationMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// Routes
router.get("/register", roleController.getRegistrationRoles);
router.get("/", authMiddleware, adminMiddleware, roleController.getAllRoles);
router.get("/:id", authMiddleware, adminMiddleware, roleController.getOneRole);
router.post(
	"/",
	authMiddleware,
	adminMiddleware,
	createRoleValidation,
	validationMiddleware,
	roleController.createRole
);
router.delete(
	"/:id",
	authMiddleware,
	adminMiddleware,
	roleController.deleteRole
);
router.put(
	"/:id",
	authMiddleware,
	adminMiddleware,
	updateRoleValidation,
	validationMiddleware,
	roleController.updateRole
);

module.exports = router;
