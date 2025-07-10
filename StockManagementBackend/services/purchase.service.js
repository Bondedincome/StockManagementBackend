const prisma = require("../prisma/client");

const getAllPurchasesService = async () => {
	return await prisma.purchase.findMany({
		where: { isDeleted: false },
		include: {
			productPurchase: true,
			supplier: true,
			customer: true,
		},
	});
};

const getOnePurchaseService = async (id) => {
	return await prisma.purchase.findUnique({
		where: { purchaseId: id },
		include: {
			productPurchase: true,
			supplier: true,
			customer: true,
		},
	});
};

const createPurchaseService = async (data) => {
	return await prisma.purchase.create({ data });
};

const updatePurchaseService = async (id, data) => {
	return await prisma.purchase.update({
		where: { purchaseId: id },
		data,
	});
};

const deletePurchaseService = async (id, userId) => {
	return await prisma.purchase.update({
		where: { purchaseId: id },
		data: {
			isDeleted: true,
			deletedAt: new Date(),
			deletedBy: req.authUser.userId, // make sure this comes from authenticated user
		},
	});
};

const getPaginatedPurchasesService = async (page = 1, limit = 10) => {
	const skip = (page - 1) * limit;
	const [data, total] = await Promise.all([
		prisma.purchase.findMany({
			where: { isDeleted: false },
			include: {
				supplier: true,
				customer: true,
				productPurchase: {
					include: { product: true },
				},
			},
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
