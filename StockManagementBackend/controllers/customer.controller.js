// const prisma = require("../prisma/client");

const {
	getAllCustomersService,
	getOneCustomerService,
	createCustomerService,
	updateCustomerService,
	deleteCustomerService,
	getPaginatedCustomersService,
} = require("../services/customer.service");

// Get all Customers
const getAllCustomer = async (req, res) => {
	try {
		const customers = await getAllCustomersService();
		res.json(customers);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch customers" });
	}
};

// Get a single customer by ID
const getOneCustomer = async (req, res) => {
	const { id } = req.params;
	try {
		const customer = await getOneCustomerService(id);
		if (!customer) {
			return res.status(404).json({ error: "Customer not found" });
		}
		res.json(customer);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch customer" });
	}
};

// Create a new customer
const createCustomer = async (req, res) => {
	const { name, email, phone } = req.body;
	try {
		const newCustomer = await createCustomerService({
			name,
			email,
			phone,
			userId: req.authUser.userId, // Use req.authUser set by authMiddleware
		});
		res.status(201).json(newCustomer);
	} catch (error) {
		res.status(500).json({ error: "Failed to create customer" });
	}
};

// Update an existing customer
const updateCustomer = async (req, res) => {
	const { id } = req.params;
	const { name, email, phone } = req.body;
	try {
		const updatedCustomer = await updateCustomerService(id, {
			name,
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
const deleteCustomer = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedCustomer = await deleteCustomerService(id);
		res.json(deletedCustomer);
	} catch (error) {
		res.status(500).json({ error: "Failed to delete customer" });
	}
};

// Get paginated customers
const getPaginatedCustomers = async (req, res) => {
	const page = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 10;
	try {
		const result = await getPaginatedCustomersService(page, limit);
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch paginated customers" });
	}
};

module.exports = {
	getAllCustomer,
	getOneCustomer,
	createCustomer,
	updateCustomer,
	deleteCustomer,
	getPaginatedCustomers,
};
