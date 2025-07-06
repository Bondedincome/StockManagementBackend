const prisma = require("../prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = "SECRETFORTOKEN";
const {
	getAllUsersService,
	getOneUserService,
	createUserService,
	updateUserService,
	deleteUserService,
	findUserByEmailService,
} = require("../services/user.service");

// Get all users
const getAllUsers = async (req, res) => {
	try {
		const users = await getAllUsersService();
		res.json(users);
		console.log("Users fetched successfully");
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch users" });
	}
};

// Get a user by ID
const getOneUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await getOneUserService(id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json(user);
	} catch (error) {
		// console.log(error)
		res.status(500).json({ error: "Failed to fetch user" });
	}
};

// Create a new user
const createUser = async (req, res) => {
	const {
		firstName,
		surName,
		lastName,
		profilePictureUrl,
		email,
		password,
		roleId,
	} = req.body;

	try {
		const newUser = await createUserService({
			firstName,
			surName,
			lastName,
			profilePictureUrl,
			email,
			password,
			roleId,
		});
		res.status(201).json(newUser);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to create user", detail: error.message });
	}
};

// Update a user
const updateUser = async (req, res) => {
	const { id } = req.params;
	const {
		firstName,
		surName,
		lastName,
		profilePictureUrl,
		email,
		password,
		roleId,
	} = req.body;

	try {
		const updatedUser = await updateUserService(id, {
			firstName,
			surName,
			lastName,
			profilePictureUrl,
			email,
			password,
			roleId: roleId || undefined, // Allow roleId to be optional
		});
		res.json(updatedUser);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to update user", detail: error.message });
	}
};

// Soft-delete a user
const deleteUser = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedUser = await deleteUserService(id);
		res.json({ message: "User soft-deleted", deletedUser });
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to delete user", detail: error.message });
	}
};

// Login user and generate token
const loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await findUserByEmailService(email);
		console.log("User found:", user);
		if (!user || !(await bcrypt.compare(password, user.password))) {
			return res.status(401).json({ error: "Invalid credentials" });
		}

		const token = generateToken(user);
		console.log("Token generated:", token);
		res.json({ token, user });
	} catch (error) {
		res.status(500).json({ error: "Login failed", detail: error.message });
	}
};

// Register a new user (public)
const register = async (req, res) => {
	const {
		firstName,
		surName,
		lastName,
		profilePictureUrl,
		email,
		password,
		roleId,
	} = req.body;
	try {
		const newUser = await createUserService({
			firstName,
			surName,
			lastName,
			profilePictureUrl,
			email,
			password,
			roleId,
		});
		res.status(201).json(newUser);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to register user", detail: error.message });
	}
};

// Generate token for user
const generateToken = (user) => {
	return jwt.sign(
		{
			userId: user.userId,
			roleId: user.roleId,
			isAdmin: user.role?.isAdmin,
		},
		SECRET,
		{ expiresIn: "1d" }
	);
};

module.exports = {
	getAllUsers,
	getOneUser,
	createUser,
	updateUser,
	deleteUser,
	loginUser,
	register,
};
