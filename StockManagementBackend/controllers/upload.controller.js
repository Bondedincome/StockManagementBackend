const path = require("path");
const uploadFileService = require("../services/upload.service");
const prisma = require("../prisma/client");

const uploadProfilePicture = async (req, res) => {
	const id = req.params.id;
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
		const user = await prisma.user.update({
			where: { userId: id },
			data: { profilePictureUrl: `/images/${relativePath}` },
		});
		res.json({ success: true, profilePictureUrl: user.profilePictureUrl });
	} catch (error) {
		// console.log(error);
		res.status(400).json({ success: false, message: error.message });
	}
};

const uploadProductPicture = async (req, res) => {
	const { id } = req.params.id;
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
		const product = await prisma.product.update({
			where: { productId: id },
			data: { imageUrl: `/images/${relativePath}` },
		});
		res.json({ success: true, imageUrl: product.imageUrl });
	} catch (error) {
		console.log(error);
		res.status(400).json({ success: false, message: error.message });
	}
};

module.exports = {
	uploadProfilePicture,
	uploadProductPicture,
};
