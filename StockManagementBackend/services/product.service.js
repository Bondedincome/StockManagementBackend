const prisma = require("../prisma/client");

// Get all products
const getAllProductsService = async () => {
	return await prisma.product.findMany({
		where: { isDeleted: false },
		include: {
			user: true,
			category: true,
			productPurchases: {
				include: {
					purchase: true,
				},
			},
			productSales: {
				include: {
					sale: true,
				},
			},
		},
	});
};

// Get single product by ID
const getOneProductService = async (id) => {
	return await prisma.product.findUnique({
		where: { productId: id },
		include: {
			user: true,
			category: true,
			productPurchases: {
				include: {
					purchase: true,
				},
			},
			productSales: {
				include: {
					sale: true,
				},
			},
		},
	});
};

// Create new product
const createProductService = async (data) => {
	return await prisma.product.create({ data });
};

// Update existing product
const updateProductService = async (id, data) => {
	return await prisma.product.update({
		where: { productId: id },
		data,
	});
};

// Soft delete a product
const deleteProductService = async (id, userId) => {
	return await prisma.product.update({
		where: { productId: id },
		data: {
			isDeleted: true,
			deletedAt: new Date(),
			deletedBy: userId,
		},
	});
};

// Paginated product listing
const getPaginatedProductsService = async (page = 1, limit = 10) => {
	const skip = (page - 1) * limit;
	const [data, total] = await Promise.all([
		prisma.product.findMany({
			where: { isDeleted: false },
			include: {
				user: true,
				category: true,
				productPurchases: true,
				productSales: true,
			},
			skip,
			take: limit,
		}),
		prisma.product.count({ where: { isDeleted: false } }),
	]);

	return {
		data,
		total,
		page,
		totalPages: Math.ceil(total / limit),
	};
};

module.exports = {
	getAllProductsService,
	getPaginatedProductsService,
	getOneProductService,
	createProductService,
	updateProductService,
	deleteProductService,
};
