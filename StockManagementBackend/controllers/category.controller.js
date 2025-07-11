const {
	getAllCategoryService,
	getOneCategoryService,
	createCategoryService,
	updateCategoryService,
	deleteCategoryService,
	getPaginatedCategoryService,
} = require("../services/category.service");

// Get all categories
const getAllCategory = async (req, res) => {
	try {
		const categories = await getAllCategoryService();
		res.json(categories);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch categories" });
	}
};

// Get a single category by ID
const getOneCategory = async (req, res) => {
	const { id } = req.params;
	try {
		const category = await getOneCategoryService(id);
		if (!category) {
			return res.status(404).json({ error: "Category not found" });
		}
		res.json(category);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch category" });
	}
};

// Create a new category
const createCategory = async (req, res) => {
	const { name, description } = req.body;
	try {
		const newCategory = await createCategoryService({
			name,
			description,
			createdBy: req.authUser.userId,
		});
		res.status(201).json(newCategory);
	} catch (error) {
		console.error("Error creating category:", error);
		console.error("Request body:", req.body);

		res.status(500).json({ error: "Failed to create category" });
	}
};

// Update an existing category
const updateCategory = async (req, res) => {
	const { id } = req.params;
	const { name, description } = req.body;
	try {
		const updatedCategory = await updateCategoryService(id, {
			name,
			description,
			updatedBy: req.authUser.userId,
			updatedAt: new Date(),
		});
		res.json(updatedCategory);
	} catch (error) {
		res.status(500).json({ error: "Failed to update category" });
	}
};

// Soft-delete a category
const deleteCategory = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedCategory = await deleteCategoryService(id, {
			isDeleted: true,
			deletedAt: new Date(),
			deletedBy: req.authUser.userId, // Use req.authUser set by authMiddleware
		});
		res.json(deletedCategory);
	} catch (error) {
		console.error("Delete error:", error);
		res.status(500).json({ error: "Failed to delete category" });
	}
};

// Get paginated categories
const getPaginatedCategory = async (req, res) => {
	const page = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 10;
	try {
		const result = await getPaginatedCategoryService(page, limit);
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch paginated categories" });
	}
};

module.exports = {
	getAllCategory,
	getOneCategory,
	createCategory,
	updateCategory,
	deleteCategory,
	getPaginatedCategory,
};
