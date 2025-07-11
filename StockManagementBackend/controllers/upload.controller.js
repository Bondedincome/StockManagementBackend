const path = require("path");
const uploadFileService = require("../services/upload.service");
const prisma = require("../prisma/client");

const uploadProfilePictureUpdate = async (req, res) => {
	const { id } = req.params;
	try {
		if (!req.file) {
			return res
				.status(400)
				.json({ success: false, message: "No file uploaded" });
		}
		const relativePath = uploadFileService(
			req.file,
			path.join(__dirname, "..", "public", "images")
		);
		// Always ensure the path is /images/filename
		let urlPath = "/images/" + path.basename(relativePath);
		const user = await prisma.user.update({
			where: { userId: id },
			data: { profilePictureUrl: urlPath },
		});
		res.json({ success: true, profilePictureUrl: user.profilePictureUrl });
	} catch (error) {
		console.error("Error in uploadProfilePictureUpdate:", error);
		res.status(400).json({ success: false, message: error.message });
	}
};

const uploadProductPictureUpdate = async (req, res) => {
	const { id } = req.params;
	try {
		if (!req.file) {
			return res
				.status(400)
				.json({ success: false, message: "No file uploaded" });
		}
		const relativePath = uploadFileService(
			req.file,
			path.join(__dirname, "..", "public", "images")
		);
		// Always ensure the path is /images/filename
		let urlPath = "/images/" + path.basename(relativePath);
		const product = await prisma.product.update({
			where: { productId: id },
			data: { imageUrl: urlPath },
		});
		res.json({ success: true, imageUrl: product.imageUrl });
	} catch (error) {
		console.error("Error in uploadProductPictureUpdate:", error);
		res.status(400).json({ success: false, message: error.message });
	}
};

module.exports = {
	uploadProfilePictureUpdate,
	uploadProductPictureUpdate,
};
