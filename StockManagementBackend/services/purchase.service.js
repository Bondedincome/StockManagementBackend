const prisma = require("../prisma/client");

const getAllPurchasesService = async () => {
	return await prisma.purchase.findMany({
		where: { isDeleted: false },
		include: {
			productPurchases: {
				include: { product: true },
			},
			supplier: true,
			customer: true,
		},
	});
};

const getOnePurchaseService = async (id) => {
	return await prisma.purchase.findUnique({
		where: { purchaseId: id },
		include: {
			productPurchases: {
				include: { product: true },
			},
			supplier: true,
			customer: true,
		},
	});
};

const createPurchaseService = async (data) => {
	const { supplierId, customerId, productId, productPurchases, createdBy } =
		data;

	// Ensure all productPurchases have valid fields
	const productPurchaseData = productPurchases.map((p) => ({
		productId: p.productId,
		purchaseQuantity: p.purchaseQuantity,
		purchasePrice: p.purchasePrice,
		createdBy: createdBy,
	}));

	// Use transaction to ensure data consistency
	return await prisma.$transaction(async (tx) => {
		// Create the purchase
		const purchase = await tx.purchase.create({
			data: {
				supplierId,
				customerId,
				productId,
				createdBy,
				productPurchases: {
					create: productPurchaseData,
				},
			},
			include: {
				productPurchases: {
					include: { product: true },
				},
				supplier: true,
				customer: true,
			},
		});

		// Update product quantities
		for (const productPurchase of productPurchases) {
			await tx.product.update({
				where: { productId: productPurchase.productId },
				data: {
					quantity: {
						increment: productPurchase.purchaseQuantity
					}
				}
			});
		}

		return purchase;
	});
};

const updatePurchaseService = async (id, data) => {
	const { supplierId, customerId, productId, productPurchases, updatedBy } = data;

	// Use transaction to ensure data consistency
	return await prisma.$transaction(async (tx) => {
		// Get existing purchase to calculate quantity differences
		const existingPurchase = await tx.purchase.findUnique({
			where: { purchaseId: id },
			include: {
				productPurchases: {
					include: { product: true }
				}
			}
		});

		if (!existingPurchase) {
			throw new Error("Purchase not found");
		}

		// Revert previous quantity changes
		for (const productPurchase of existingPurchase.productPurchases) {
			await tx.product.update({
				where: { productId: productPurchase.productId },
				data: {
					quantity: {
						decrement: productPurchase.purchaseQuantity
					}
				}
			});
		}

		// Delete existing product purchases
		await tx.productPurchase.deleteMany({
			where: { purchaseId: id }
		});

		// Create new product purchases
		const productPurchaseData = productPurchases.map((p) => ({
			productId: p.productId,
			purchaseQuantity: p.purchaseQuantity,
			purchasePrice: p.purchasePrice,
			createdBy: updatedBy,
		}));

		// Update the purchase
		const updatedPurchase = await tx.purchase.update({
			where: { purchaseId: id },
			data: {
				supplierId,
				customerId,
				productId,
				updatedBy,
				updatedAt: new Date(),
				productPurchases: {
					create: productPurchaseData,
				},
			},
			include: {
				productPurchases: {
					include: { product: true },
				},
				supplier: true,
				customer: true,
			},
		});

		// Update product quantities with new values
		for (const productPurchase of productPurchases) {
			await tx.product.update({
				where: { productId: productPurchase.productId },
				data: {
					quantity: {
						increment: productPurchase.purchaseQuantity
					}
				}
			});
		}

		return updatedPurchase;
	});
};

const deletePurchaseService = async (id, userId) => {
	// Use transaction to ensure data consistency
	return await prisma.$transaction(async (tx) => {
		// Get the purchase to revert quantity changes
		const purchase = await tx.purchase.findUnique({
			where: { purchaseId: id },
			include: {
				productPurchases: {
					include: { product: true }
				}
			}
		});

		if (!purchase) {
			throw new Error("Purchase not found");
		}

		// Revert quantity changes
		for (const productPurchase of purchase.productPurchases) {
			await tx.product.update({
				where: { productId: productPurchase.productId },
				data: {
					quantity: {
						decrement: productPurchase.purchaseQuantity
					}
				}
			});
		}

		// Soft delete the purchase
		return await tx.purchase.update({
			where: { purchaseId: id },
			data: {
				isDeleted: true,
				deletedAt: new Date(),
				deletedBy: userId,
			},
		});
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
				productPurchases: {
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
