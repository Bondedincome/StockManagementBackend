const express = require("express");
const router = express.Router();

const {
	getAllCustomer,
	getOneCustomer,
	createCustomer,
	updateCustomer,
	deleteCustomer,
	getPaginatedCustomers,
} = require("../controllers/customer.controller");

const authMiddleware = require("../middleware/authMiddleware");
const {validationMiddleware} = require("../middleware/validationMiddleware");
const {
    createCustomerValidation,
    updateCustomerValidation,
} = require("../validators/customer.validation");

router.get("/", authMiddleware, getAllCustomer);
router.get("/:id", authMiddleware, getOneCustomer);
router.post(
	"/",
	authMiddleware,
	createCustomerValidation,
	validationMiddleware,
	createCustomer
);
router.delete("/:id", authMiddleware, deleteCustomer);
router.put(
	"/:id",
	authMiddleware,
	updateCustomerValidation,
	validationMiddleware,
	updateCustomer
);
router.get("/paginated", authMiddleware, getPaginatedCustomers);

module.exports = router;
