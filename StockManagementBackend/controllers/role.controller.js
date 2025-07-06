const {
	getAllRolesService,
	getOneRoleService,
	createRoleService,
	updateRoleService,
	deleteRoleService,
} = require("../services/role.service");

// Get all roles
const getAllRoles = async (req, res) => {
	try {
		const roles = await getAllRolesService();
		res.json(roles);
	} catch (error) {
		res
			.status(500)
			.json({ error: "Failed to fetch roles", detail: error.message });
	}
};

// Create a new role
const createRole = async (req, res) => {
	const { roleType, isAdmin, createdBy } = req.body;

	try {
		const newRole = await createRoleService({
			roleType,
			isAdmin: false,
			createdBy: req.authUser.userId || createdBy, // Use req.authUser set by authMiddleware
		});
		res.status(201).json(newRole);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to create role", detail: error.message });
	}
};

// Soft delete a role
const deleteRole = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedRole = await deleteRoleService(id);
		res.json(deletedRole);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to delete role", detail: error.message });
	}
};

// Get a single role by ID
const getOneRole = async (req, res) => {
	const { id } = req.params;

	try {
		const role = await getOneRoleService(id);

		if (!role) {
			return res.status(404).json({ error: "Role not found" });
		}

		res.json(role);
	} catch (error) {
		res
			.status(500)
			.json({ error: "Failed to fetch role", detail: error.message });
	}
};

// Update a role
const updateRole = async (req, res) => {
	const { id } = req.params;
	const { roleType, isAdmin, updatedBy } = req.body;

	try {
		const updatedRole = await updateRoleService(id, {
			roleType,
			isAdmin: false,
			updatedBy: req.authUser.userId,
		});
		res.json(updatedRole);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to update role", detail: error.message });
	}
};

module.exports = {
	getAllRoles,
	updateRole,
	createRole,
	deleteRole,
	getOneRole,
};

// Add an UpdateBy and UpdatedAt in all the models in Prisma schema
