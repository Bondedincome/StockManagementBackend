const express = require("express");
const router = express.Router();
const {
	getAllCategory,
	getOneCategory,
	createCategory,
	updateCategory,
	deleteCategory,
	getPaginatedCategory,
} = require("../controllers/category.controller");
const { validateCategory } = require("../validators/category.validation");
const authMiddleware = require("../middleware/authMiddleware"); // Optional if you're using auth

// All routes can be protected with authMiddleware if needed
router.get("/", authMiddleware, getAllCategory);
router.get("/paginated", authMiddleware, getPaginatedCategory);
router.get("/:id", authMiddleware, getOneCategory);
router.post("/", authMiddleware, validateCategory, createCategory);
router.put("/:id", authMiddleware, validateCategory, updateCategory);
router.delete("/:id", authMiddleware, deleteCategory);

module.exports = router;
