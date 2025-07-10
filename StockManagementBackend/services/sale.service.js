const prisma = require("../prisma/client");

const getAllSalesService = async () => {
	return await prisma.sale.findMany({
		where: { isDeleted: false },
		include: {
			productSales: {
				include: { product: true },
			},
		},
	});
};

const getOneSaleService = async (id) => {
	return await prisma.sale.findUnique({
		where: { saleId: id },
		include: {
			productSales: {
				include: { product: true },
			},
		},
	});
};

const createSaleService = async (data) => {
	return await prisma.sale.create({ data });
};

const updateSaleService = async (id, data) => {
	return await prisma.sale.update({
		where: { saleId: id },
		data,
	});
};

const deleteSaleService = async (id, userId) => {
	return await prisma.sale.update({
		where: { saleId: id },
		data: {
			isDeleted: true,
			deletedAt: new Date(),
			deletedBy: userId, // dynamic user ID
		},
	});
};

const getPaginatedSalesService = async (page = 1, limit = 10) => {
	const skip = (page - 1) * limit;
	const [data, total] = await Promise.all([
		prisma.sale.findMany({
			where: { isDeleted: false },
			include: {
				productSales: {
					include: { product: true },
				},
			},
			skip,
			take: limit,
		}),
		prisma.sale.count({ where: { isDeleted: false } }),
	]);

	return {
		data,
		total,
		page,
		totalPages: Math.ceil(total / limit),
	};
};

module.exports = {
	getAllSalesService,
	getPaginatedSalesService,
	getOneSaleService,
	createSaleService,
	updateSaleService,
	deleteSaleService,
};
