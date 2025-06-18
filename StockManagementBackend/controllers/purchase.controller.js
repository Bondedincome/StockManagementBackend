const prisma = require("../prisma/client");
const {
	getAllPurchasesService,
	getOnePurchaseService,
	createPurchaseService,
	updatePurchaseService,
	deletePurchaseService,
} = require("../services/purchase.service");

// Get all purchases
const getAllPurchases = async (req, res) => {
	try {
		const purchases = await getAllPurchasesService();
		res.json(purchases);
		// console.log("Purchases fetched successfully");
	} catch (error) {
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
	const { purchaseId, userId, productId, quantity, price } = req.body;
	try {
		const newPurchase = await createPurchaseService({
			purchaseId,
			userId,
			productId,
			quantity,
			price,
			createdBy: 1,
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
	const { purchaseId, userId, productId, quantity, price } = req.body;
	try {
		const updatedPurchase = await updatePurchaseService(id, {
			purchaseId,
			userId,
			productId,
			quantity,
			price,
			updatedBy: 1,
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
		const deletedPurchase = await deletePurchaseService(id);
		res.json(deletedPurchase);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to delete purchase", detail: error.message });
	}
};

module.exports = {
	getAllPurchases,
	getOnePurchase,
	createPurchase,
	updatePurchase,
	deletePurchase,
};
