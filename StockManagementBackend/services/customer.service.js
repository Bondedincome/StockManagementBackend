const prisma = require("../prisma/client");

const getAllCustomersService = async () => {
	return await prisma.customer.findMany({
		where: { isDeleted: false, isSupplier: false },
		include: { user: true },
	});
};

const getOneCustomerService = async (id) => {
	return await prisma.customer.findUnique({
		where: { customerId: id, isDeleted: false, isSupplier: false },
		include: { user: true },
	});
};

const createCustomerService = async (data) => {
	return await prisma.customer.create({ data });
};

const updateCustomerService = async (id, data) => {
	return await prisma.customer.update({
		where: { customerId: id, isDeleted: false, isSupplier: false },
		data,
	});
};

const deleteCustomerService = async (id) => {
	return await prisma.customer.update({
		where: { customerId: id, isSupplier: false },
		data: { isDeleted: true, deletedAt: new Date() },
	});
};

const getPaginatedCustomersService = async (page, limit) => {
	const skip = (page - 1) * limit;
	return await prisma.customer.findMany({
		where: { isDeleted: false, isSupplier: false },
		skip,
		take: limit,
		include: { user: true },
	});
};

module.exports = {
	getAllCustomersService,
	getOneCustomerService,
	createCustomerService,
	updateCustomerService,
	deleteCustomerService,
	getPaginatedCustomersService,
};
