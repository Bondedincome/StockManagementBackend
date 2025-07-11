// sale.controller.js
const {
	createSaleService,
	getAllSalesService,
	getOneSaleService,
	updateSaleService,
	deleteSaleService,
	getPaginatedSalesService,
} = require("../services/sale.service");

const createSale = async (req, res) => {
	const { productSales, customerId } = req.body;
	try {
		const sale = await createSaleService({
			productSales,
			customerId,
			createdBy: req.authUser.userId,
		});
		res.status(201).json(sale);
	} catch (error) {
		console.error("Error creating sale:", error);
		res.status(400).json({ error: "Failed to create sale", detail: error.message });
	}
};

const updateSale = async (req, res) => {
	const { productSales, customerId } = req.body;
	const saleId = req.params.id;
	try {
		const sale = await updateSaleService(saleId, {
			productSales,
			customerId,
			updatedBy: req.authUser.userId,
		});
		res.status(200).json(sale);
	} catch (error) {
		console.error("Error updating sale:", error);
		res.status(400).json({ error: "Failed to update sale", detail: error.message });
	}
};

const deleteSale = async (req, res) => {
	const saleId = req.params.id;
	try {
		const deleted = await deleteSaleService(saleId, req.authUser.userId);
		res.status(200).json(deleted);
	} catch (error) {
		console.error("Error deleting sale:", error);
		res.status(400).json({ error: "Failed to delete sale", detail: error.message });
	}
};

const getAllSales = async (req, res) => {
	try {
		const sales = await getAllSalesService();
		res.status(200).json(sales);
	} catch (error) {
		res.status(400).json({ error: "Failed to retrieve sales", detail: error.message });
	}
};

const getOneSale = async (req, res) => {
	try {
		const sale = await getOneSaleService(req.params.id);
		res.status(200).json(sale);
	} catch (error) {
		res.status(400).json({ error: "Failed to retrieve sale", detail: error.message });
	}
};

const getPaginatedSales = async (req, res) => {
	const { page = 1, limit = 10 } = req.query;
	try {
		const result = await getPaginatedSalesService(Number(page), Number(limit));
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json({ error: "Failed to retrieve paginated sales", detail: error.message });
	}
};

module.exports = {
	createSale,
	updateSale,
	deleteSale,
	getAllSales,
	getOneSale,
	getPaginatedSales,
};
