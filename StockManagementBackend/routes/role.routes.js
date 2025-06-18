const express = require("express");
const router = express.Router();
const roleController = require("../controllers/role.controller");
const {
	createRoleValidation,
	updateRoleValidation,
} = require("../validators/role.validation");

router.get("/", roleController.getAllRoles);
router.get("/:id", roleController.getOneRole);
router.post("/", createRoleValidation, roleController.createRole);
router.delete("/:id", roleController.deleteRole);
router.put("/:id", updateRoleValidation, roleController.updateRole);

module.exports = router;
