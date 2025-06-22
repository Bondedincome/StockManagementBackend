const prisma = require("../prisma/client");

const getAllRolesService = async () => {
	return await prisma.role.findMany({
		where: { isDeleted: false },
		include: { users: true },
	});
};

const getOneRoleService = async (id) => {
	return await prisma.role.findUnique({
		where: { roleId: id },
		include: { users: true },
	});
};

const createRoleService = async (data) => {
	return await prisma.role.create({ data });
};

const updateRoleService = async (id, data) => {
	return await prisma.role.update({
		where: { roleId: id },
		data,
	});
};

const deleteRoleService = async (id) => {
	return await prisma.role.update({
		where: { roleId: id },
		data: { isDeleted: true, deletedAt: new Date() },
	});
};

module.exports = {
	getAllRolesService,
	getOneRoleService,
	createRoleService,
	updateRoleService,
	deleteRoleService,
};
