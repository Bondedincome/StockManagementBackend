const express = require("express");
const router = express.Router();
const roleController = require("../controllers/role.controller");

router.get("/", roleController.getAllRoles);
router.get("/:id", roleController.getOneRole);
router.post("/", roleController.createRole);
router.delete("/:id", roleController.deleteRole);
router.put("/:id", roleController.updateRole);

module.exports = router;