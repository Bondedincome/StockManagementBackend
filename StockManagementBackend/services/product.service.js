const prisma = require("../prisma/client");

const getAllProductsService = async () => {
	return await prisma.product.findMany({
		where: { isDeleted: false },
		include: { user: true },
	});
};

const getOneProductService = async (id) => {
	return await prisma.product.findUnique({
		where: { productId: parseInt(id) },
		include: { user: true },
	});
};

const createProductService = async (data) => {
	return await prisma.product.create({ data });
};

const updateProductService = async (id, data) => {
	return await prisma.product.update({
		where: { productId: parseInt(id) },
		data,
	});
};

const deleteProductService = async (id) => {
	return await prisma.product.update({
		where: { productId: parseInt(id) },
		data: {
			isDeleted: true,
			deletedAt: new Date(),
			deletedBy: 1,
		},
	});
};

// Paginated products
const getPaginatedProductsService = async (page = 1, limit = 10) => {
	const skip = (page - 1) * limit;
	const [data, total] = await Promise.all([
		prisma.product.findMany({
			where: { isDeleted: false },
			include: { user: true },
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
