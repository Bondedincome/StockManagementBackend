// sale.service.js
const prisma = require("../prisma/client");

const getAllSalesService = async () => {
	return await prisma.sale.findMany({
		where: { isDeleted: false },
		include: {
			productSales: {
				include: { product: true },
			},
			createdByUser: true,
			updatedByUser: true,
			customer: true,
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
			createdByUser: true,
			updatedByUser: true,
			customer: true,
		},
	});
};

const createSaleService = async (data) => {
	const { productSales, createdBy, customerId } = data;

	const productSaleData = productSales.map((p) => ({
		productId: p.productId,
		saleQuantity: p.saleQuantity,
		salePrice: p.salePrice,
		createdBy,
	}));

	return await prisma.$transaction(async (tx) => {
		const sale = await tx.sale.create({
			data: {
				createdBy,
				customerId,
				productSales: {
					create: productSaleData,
				},
			},
			include: {
				productSales: { include: { product: true } },
				createdByUser: true,
				customer: true,
			},
		});

		for (const productSale of productSales) {
			await tx.product.update({
				where: { productId: productSale.productId },
				data: {
					quantity: {
						decrement: productSale.saleQuantity,
					},
				},
			});
		}

		return sale;
	});
};

const updateSaleService = async (id, data) => {
	const { productSales, updatedBy, customerId } = data;

	return await prisma.$transaction(async (tx) => {
		const existingSale = await tx.sale.findUnique({
			where: { saleId: id },
			include: { productSales: true },
		});

		if (!existingSale) throw new Error("Sale not found");

		for (const productSale of existingSale.productSales) {
			await tx.product.update({
				where: { productId: productSale.productId },
				data: {
					quantity: {
						increment: productSale.saleQuantity,
					},
				},
			});
		}

		await tx.productSale.deleteMany({ where: { saleId: id } });

		const productSaleData = productSales.map((p) => ({
			productId: p.productId,
			saleQuantity: p.saleQuantity,
			salePrice: p.salePrice,
			createdBy: updatedBy,
		}));

		const updatedSale = await tx.sale.update({
			where: { saleId: id },
			data: {
				updatedBy,
				updatedAt: new Date(),
				customerId,
				productSales: {
					create: productSaleData,
				},
			},
			include: {
				productSales: { include: { product: true } },
				updatedByUser: true,
				customer: true,
			},
		});

		for (const productSale of productSales) {
			await tx.product.update({
				where: { productId: productSale.productId },
				data: {
					quantity: {
						decrement: productSale.saleQuantity,
					},
				},
			});
		}

		return updatedSale;
	});
};

const deleteSaleService = async (id, userId) => {
	return await prisma.$transaction(async (tx) => {
		const sale = await tx.sale.findUnique({
			where: { saleId: id },
			include: { productSales: true },
		});

		if (!sale) throw new Error("Sale not found");

		for (const productSale of sale.productSales) {
			await tx.product.update({
				where: { productId: productSale.productId },
				data: {
					quantity: {
						increment: productSale.saleQuantity,
					},
				},
			});
		}

		return await tx.sale.update({
			where: { saleId: id },
			data: {
				isDeleted: true,
				deletedAt: new Date(),
				deletedBy: userId,
			},
		});
	});
};

const getPaginatedSalesService = async (page = 1, limit = 10) => {
	const skip = (page - 1) * limit;
	const [data, total] = await Promise.all([
		prisma.sale.findMany({
			where: { isDeleted: false },
			include: {
				productSales: { include: { product: true } },
				createdByUser: true,
				updatedByUser: true,
				customer: true,
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
