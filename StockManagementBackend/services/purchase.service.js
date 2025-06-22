const prisma = require("../prisma/client");

const getAllPurchasesService = async () => {
	return await prisma.purchase.findMany({
		where: { isDeleted: false },
		include: { user: true, ownedProducts: true },
	});
};

const getOnePurchaseService = async (id) => {
	return await prisma.purchase.findUnique({
		where: { id: parseInt(id), isDeleted: false },
		include: { user: true, ownedProducts: true },
	});
};

const createPurchaseService = async (data) => {
	return await prisma.purchase.create({ data });
};

const updatePurchaseService = async (id, data) => {
	return await prisma.purchase.update({
		where: { id: parseInt(id) },
		data,
	});
};

const deletePurchaseService = async (id) => {
	return await prisma.purchase.update({
		where: { id: parseInt(id) },
		data: {
			isDeleted: true,
			deletedAt: new Date(),
			deletedBy: 1,
		},
	});
};

// Paginated purchases
const getPaginatedPurchasesService = async (page = 1, limit = 10) => {
	const skip = (page - 1) * limit;
	const [data, total] = await Promise.all([
		prisma.purchase.findMany({
			where: { isDeleted: false },
			include: { user: true, ownedProducts: true },
			skip,
			take: limit,
		}),
		prisma.purchase.count({ where: { isDeleted: false } }),
	]);
	return {
		data,
		total,
		page,
		totalPages: Math.ceil(total / limit),
	};
};

module.exports = {
	getAllPurchasesService,
	getPaginatedPurchasesService,
	getOnePurchaseService,
	createPurchaseService,
	updatePurchaseService,
	deletePurchaseService,
};
