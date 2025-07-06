const prisma = require("../prisma/client");
const {
	getAllProductsService,
	getOneProductService,
	createProductService,
	updateProductService,
	deleteProductService,
	getPaginatedProductsService,
} = require("../services/product.service");

// Get all purchases
const getAllProduct = async (req, res) => {
	try {
		const products = await getAllProductsService();
		res.json(products);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch products" });
	}
};
// Get a single product by ID
const getOneProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const product = await getOneProductService(id);
		if (!product) {
			return res.status(404).json({ error: "Product not found" });
		}
		res.json(product);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch product" });
	}
};

// Create a new purchase
const createProduct = async (req, res) => {
	const {
		userId,
		name,
		description,
		imageUrl,
		category,
		quantity,
		expiryDate,
		productionDate,
		price,
		costPrice,
	} = req.body;
	try {
		const newProduct = await createProductService({
			userId: req.authUser.userId, // Use req.authUser set by authMiddleware
			name,
			description,
			imageUrl,
			category,
			quantity,
			expiryDate: expiryDate ? new Date(expiryDate) : undefined,
			productionDate: productionDate ? new Date(productionDate) : undefined,
			price,
			costPrice: costPrice ?? 0,
		});
		res.status(201).json(newProduct);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to create product", detail: error.message });
	}
};

// Update a product
const updateProduct = async (req, res) => {
	const { id } = req.params;
	const {
		userId,
		description,
		imageUrl,
		category,
		quantity,
		expiryDate,
		productionDate,
		price,
		costPrice,
	} = req.body;

	try {
		const updatedProduct = await updateProductService(id, {
			userId: req.authUser.userId,
			description,
			imageUrl,
			category,
			quantity,
			expiryDate: expiryDate ? new Date(expiryDate) : undefined,
			productionDate: productionDate ? new Date(productionDate) : undefined,
			price,
			costPrice: costPrice ?? 0,
		});
		res.json(updatedProduct);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to update product", detail: error.message });
	}
};

// Soft-delete a product
const deleteProduct = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedProduct = await deleteProductService(id);
		res.json({ message: "Product soft-deleted", deletedProduct });
	} catch (error) {
		console.error("Soft delete error:", error);
		res
			.status(400)
			.json({ error: "Failed to delete product", detail: error.message });
	}
};

// Get paginated products
const getPaginatedProducts = async (req, res) => {
	const page = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 10;
	try {
		const result = await getPaginatedProductsService(page, limit);
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch paginated products" });
	}
};

module.exports = {
	getAllProduct,
	getPaginatedProducts,
	createProduct,
	deleteProduct,
	getOneProduct,
	updateProduct,
};
