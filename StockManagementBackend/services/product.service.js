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

module.exports = {
	getAllProductsService,
	getOneProductService,
	createProductService,
	updateProductService,
	deleteProductService,
};
