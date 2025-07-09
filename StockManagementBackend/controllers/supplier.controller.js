// const prisma = require("../prisma/client");

const {
	getAllSuppliersService,
	getOneSupplierService,
	createSupplierService,
	updateSupplierService,
	deleteSupplierService,
	getPaginatedSupplierService,
} = require("../services/supplier.service");

// Get all Customers
const getAllSupplier = async (req, res) => {
	try {
		const customers = await getAllSuppliersService();
		res.json(customers);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch customers" });
	}
};

// Get a single customer by ID
const getOneSupplier = async (req, res) => {
	const { id } = req.params;
	try {
		const customer = await getOneSupplierService(id);
		if (!customer) {
			return res.status(404).json({ error: "Customer not found" });
		}
		res.json(customer);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch customer" });
	}
};

// Create a new customer
const createSupplier = async (req, res) => {
	const { firstName, lastName, email, phone } = req.body;
	try {
		const newCustomer = await createSupplierService({
			firstName,
			lastName,
			email,
			phone,
			isSupplier: true, // Set isSupplier to true for suppliers
			// createdBy: req.authUser.userId, // Use req.authUser set by auth
			userId: req.authUser.userId, // Use req.authUser set by authMiddleware
		});
		res.status(201).json(newCustomer);
	} catch (error) {
		res.status(500).json({ error: "Failed to create customer" });
	}
};

// Update an existing customer
const updateSupplier = async (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, email, phone } = req.body;
	try {
		const updatedCustomer = await updateSupplierService(id, {
			firstName,
			lastName,
			email,
			phone,
			updatedBy: req.authUser.userId, // Use req.authUser set by authMiddleware
		});
		res.json(updatedCustomer);
	} catch (error) {
		res.status(500).json({ error: "Failed to update customer" });
	}
};

// soft-delete a customer
const deleteSupplier = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedCustomer = await deleteSupplierService(id);
		res.json(deletedCustomer);
	} catch (error) {
		res.status(500).json({ error: "Failed to delete customer" });
	}
};

// Get paginated customers
const getPaginatedSuppliers = async (req, res) => {
	const page = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 10;
	try {
		const result = await getPaginatedSupplierService(page, limit);
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch paginated customers" });
	}
};

module.exports = {
	getAllSupplier,
	getOneSupplier,
	createSupplier,
	updateSupplier,
	deleteSupplier,
	getPaginatedSuppliers,
};
