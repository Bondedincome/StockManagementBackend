const prisma = require("../prisma/client");

const getAllSuppliersService = async () => {
	return await prisma.customer.findMany({
		where: { isDeleted: false, isSupplier: true },
		include: { user: true },
	});
};

const getOneSupplierService = async (id) => {
	return await prisma.customer.findUnique({
		where: { customerId: id, isDeleted: false, isSupplier: true },
		include: { user: true },
	});
};

const createSupplierService = async (data) => {
	return await prisma.customer.create({ data });
};

const updateSupplierService = async (id, data) => {
	return await prisma.customer.update({
		where: { customerId: id, isDeleted: false, isSupplier: true },
		data,
	});
};

const deleteSupplierService = async (id) => {
	return await prisma.customer.update({
		where: { customerId: id, isSupplier: true },
		data: { isDeleted: true, deletedAt: new Date() },
	});
};

const getPaginatedSupplierService = async (page, limit) => {
	const skip = (page - 1) * limit;
	return await prisma.customer.findMany({
		where: { isDeleted: false, isSupplier: true },
		skip,
		take: limit,
		include: { user: true },
	});
};

module.exports = {
	getAllSuppliersService,
	getOneSupplierService,
	createSupplierService,
	updateSupplierService,
	deleteSupplierService,
	getPaginatedSupplierService,
};
