const bcrypt = require("bcrypt");
const prisma = require("../prisma/client");

const getAllUsersService = async () => {
	return await prisma.user.findMany({
		where: { isDeleted: false },
		include: { role: true, ownedProducts: true },
	});
};

const getOneUserService = async (id) => {
	return await prisma.user.findUnique({
		where: { userId: parseInt(id) },
		include: { role: true, ownedProducts: true },
	});
};

const createUserService = async ({ name, email, password, roleId }) => {
	const hashedPassword = await bcrypt.hash(password, 10);
	return await prisma.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
			roleId,
		},
	});
};

const updateUserService = async (id, { name, email, password, roleId }) => {
	let data = { name, email, roleId };
	if (password) {
		data.password = await bcrypt.hash(password, 10);
	}
	return await prisma.user.update({
		where: { userId: parseInt(id) },
		data,
	});
};

const deleteUserService = async (id) => {
	return await prisma.user.update({
		where: { userId: parseInt(id) },
		data: {
			isDeleted: true,
			deletedAt: new Date(),
			deletedBy: 1,
		},
	});
};

const findUserByEmailService = async (email) => {
	return await prisma.user.findUnique({
		where: { email },
		include: { role: true },
	});
};

module.exports = {
	getAllUsersService,
	getOneUserService,
	createUserService,
	updateUserService,
	deleteUserService,
	findUserByEmailService,
};
