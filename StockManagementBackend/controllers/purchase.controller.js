const prisma = require("../prisma/client");
const {
	getAllPurchasesService,
	getOnePurchaseService,
	createPurchaseService,
	updatePurchaseService,
	deletePurchaseService,
	getPaginatedPurchasesService,
} = require("../services/purchase.service");

// Get all purchases
const getAllPurchases = async (req, res) => {
	try {
		const purchases = await getAllPurchasesService();
		res.json(purchases);
		// console.log("Purchases fetched successfully");
	} catch (error) {
		console.error("Error in getAllPurchases:", error);
		res.status(500).json({ error: "Failed to fetch purchases" });
	}
};

// Get a single purchase by ID
const getOnePurchase = async (req, res) => {
	const { id } = req.params;
	try {
		const purchase = await getOnePurchaseService(id);
		if (!purchase) {
			return res.status(404).json({ error: "Purchase not found" });
		}
		res.json(purchase);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch purchase" });
	}
};

// Create a new purchase
const createPurchase = async (req, res) => {
	const { supplierId, customerId, productId, productPurchases } = req.body;
	try {
		const newPurchase = await createPurchaseService({
			supplierId,
			customerId,
			productId,
			productPurchases,
			createdBy: req.authUser?.userId || null,
		});
		res.status(201).json(newPurchase);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to create purchase", detail: error.message });
	}
};

// Update an existing purchase
const updatePurchase = async (req, res) => {
	const { id } = req.params;
	const { supplierId, customerId, productId, productPurchases } = req.body;
	try {
		const updatedPurchase = await updatePurchaseService(id, {
			supplierId,
			customerId,
			productId,
			productPurchases,
			updatedBy: req.authUser?.userId || null,
		});
		res.json(updatedPurchase);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to update purchase", detail: error.message });
	}
};
// Soft-Delete a purchase
const deletePurchase = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedPurchase = await deletePurchaseService(
			id,
			req.authUser?.userId || null
		);
		res.json(deletedPurchase);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to delete purchase", detail: error.message });
	}
};

// Get paginated purchases
const getPaginatedPurchases = async (req, res) => {
	const page = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 10;
	try {
		const result = await getPaginatedPurchasesService(page, limit);
		res.json(result);
	} catch (error) {
		console.error("Error in getPaginatedPurchases:", error);
		res.status(500).json({ error: "Failed to fetch paginated purchases" });
	}
};

module.exports = {
	getAllPurchases,
	getPaginatedPurchases,
	getOnePurchase,
	createPurchase,
	updatePurchase,
	deletePurchase,
};
