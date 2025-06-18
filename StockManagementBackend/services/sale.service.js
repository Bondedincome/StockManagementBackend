const prisma = require("../prisma/client");

const getAllSalesService = async () => {
	return await prisma.sale.findMany({
		where: { isDeleted: false },
		include: { user: true, ownedProducts: true },
	});
};

const getOneSaleService = async (id) => {
	return await prisma.sale.findUnique({
		where: { id: parseInt(id), isDeleted: false },
		include: { user: true, ownedProducts: true },
	});
};

const createSaleService = async (data) => {
	return await prisma.sale.create({ data });
};

const updateSaleService = async (id, data) => {
	return await prisma.sale.update({
		where: { id: parseInt(id) },
		data,
	});
};

const deleteSaleService = async (id) => {
	return await prisma.sale.update({
		where: { id: parseInt(id) },
		data: {
			isDeleted: true,
			deletedAt: new Date(),
			deletedBy: 1,
		},
	});
};

module.exports = {
	getAllSalesService,
	getOneSaleService,
	createSaleService,
	updateSaleService,
	deleteSaleService,
};
