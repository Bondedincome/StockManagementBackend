const prisma = require("../prisma/client");
const {
	getAllSalesService,
	getOneSaleService,
	createSaleService,
	updateSaleService,
	deleteSaleService,
	getPaginatedSalesService,
} = require("../services/sale.service");

// Get all sales
const getAllSales = async (req, res) => {
	try {
		const sales = await getAllSalesService();
		res.json(sales);
	} catch (error) {
		console.error("Error fetching sales:", error);
		res.status(500).json({ error: "Failed to fetch sales" });
	}
};

// Get one sale by ID
const getOneSale = async (req, res) => {
	const id = parseInt(req.params.id);
	if (isNaN(id)) return res.status(400).json({ error: "Invalid ID format" });

	try {
		const sale = await getOneSaleService(id);

		if (!sale || sale.isDeleted) {
			return res.status(404).json({ error: "Sale not found" });
		}

		res.json(sale);
	} catch (error) {
		console.error("Error fetching sale:", error);
		res.status(500).json({ error: "Failed to fetch sale" });
	}
};

// Create a new sale
const createSale = async (req, res) => {
	const { createdBy } = req.body;

	try {
		const newSale = await createSaleService({
			createdBy,
		});
		res.status(201).json(newSale);
	} catch (error) {
		console.error("Error creating sale:", error);
		res
			.status(400)
			.json({ error: "Failed to create sale", detail: error.message });
	}
};

// Soft-delete a sale
const deleteSale = async (req, res) => {
	const id = parseInt(req.params.id);
	if (isNaN(id)) return res.status(400).json({ error: "Invalid ID format" });

	try {
		const deletedSale = await deleteSaleService(id);
		res.json({ message: "Sale soft-deleted", deletedSale });
	} catch (error) {
		console.error("Error deleting sale:", error);
		res
			.status(400)
			.json({ error: "Failed to delete sale", detail: error.message });
	}
};

// Update a sale
const updateSale = async (req, res) => {
	const id = parseInt(req.params.id);
	if (isNaN(id)) return res.status(400).json({ error: "Invalid ID format" });

	const { createdBy } = req.body;

	try {
		const updatedSale = await updateSaleService(id, {
			createdBy,
		});
		res.json(updatedSale);
	} catch (error) {
		console.error("Error updating sale:", error);
		res
			.status(400)
			.json({ error: "Failed to update sale", detail: error.message });
	}
};

// Get paginated sales
const getPaginatedSales = async (req, res) => {
	const page = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 10;
	try {
		const result = await getPaginatedSalesService(page, limit);
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch paginated sales" });
	}
};

module.exports = {
	getAllSales,
	getPaginatedSales,
	getOneSale,
	updateSale,
	createSale,
	deleteSale,
};
