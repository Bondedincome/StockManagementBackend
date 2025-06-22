const bcrypt = require("bcrypt");
const prisma = require("../prisma/client");

const getAllUsersService = async () => {
	return await prisma.user.findMany({
		where: { isDeleted: false },
		include: { role: true, ownedProducts: true },
	});
};

const getOneUserService = async (userId) => {
	return await prisma.user.findUnique({
		where: { userId },
		include: { role: true, ownedProducts: true },
	});
};

const createUserService = async ({
	firstName,
	surName,
	lastName,
	profilePictureUrl,
	email,
	password,
	roleId,
}) => {
	const hashedPassword = await bcrypt.hash(password, 10);
	return await prisma.user.create({
		data: {
			firstName,
			surName,
			lastName,
			profilePictureUrl,
			email,
			password: hashedPassword,
			roleId,
		},
	});
};

const updateUserService = async (
	id,
	{ firstName, surName, lastName, profilePictureUrl, email, password, roleId }
) => {
	let data = { firstName, surName, lastName, profilePictureUrl, email, roleId };
	if (password) {
		data.password = await bcrypt.hash(password, 10);
	}
	return await prisma.user.update({
		where: { userId: id },
		data,
	});
};

const deleteUserService = async (id) => {
	return await prisma.user.update({
		where: { userId: id },
		data: {
			isDeleted: true,
			deletedAt: new Date(),
			deletedBy: null,
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
