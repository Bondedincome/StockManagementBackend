const prisma = require("../prisma/client");

// Get all categories
const getAllCategoryService = async () => {
	return await prisma.category.findMany({
		where: { isDeleted: false },
		include: {
			products: true,
		},
	});
};

// Get one category by ID
const getOneCategoryService = async (id) => {
	return await prisma.category.findUnique({
		where: { categoryId: id },
		include: {
			products: true,
		},
	});
};

// Create a new category
const createCategoryService = async (data) => {
	return await prisma.category.create({ data });
};

// Update a category
const updateCategoryService = async (id, data) => {
	return await prisma.category.update({
		where: { categoryId: id },
		data,
	});
};

// Soft delete a category
const deleteCategoryService = async (id, data) => {
	return await prisma.category.update({
		where: { categoryId: id , isDeleted: false },
		data,
	});
};

// Paginated category list
const getPaginatedCategoryService = async (page = 1, limit = 4) => {
	const skip = (page - 1) * limit;
	const [data, total] = await Promise.all([
		prisma.category.findMany({
			where: { isDeleted: false },
			include: { products: true },
			skip,
			take: limit,
		}),
		prisma.category.count({ where: { isDeleted: false } }),
	]);

	return {
		data,
		total,
		page,
		totalPages: Math.ceil(total / limit),
	};
};

module.exports = {
	getAllCategoryService,
	getOneCategoryService,
	createCategoryService,
	updateCategoryService,
	deleteCategoryService,
	getPaginatedCategoryService,
};
