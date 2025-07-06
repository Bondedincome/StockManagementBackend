const prisma = require("../prisma/client");

const getAllProductsService = async () => {
	return await prisma.product.findMany({
		where: { isDeleted: false },
		include: { user: true },
	});
};

const getOneProductService = async (id) => {
	return await prisma.product.findUnique({
		where: { productId: id },
		include: { user: true },
	});
};

const createProductService = async (data) => {
	return await prisma.product.create({ data });
};

const updateProductService = async (id, data) => {
	return await prisma.product.update({
		where: { productId: id },
		data,
	});
};

const deleteProductService = async (id, data) => {
	return await prisma.product.update({
		where: { productId: id },
		data,
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
