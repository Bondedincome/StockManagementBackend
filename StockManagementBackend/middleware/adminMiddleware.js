const adminMiddleware = (req, res, next) => {
	// Make sure authMiddleware has already run!
	if (req.authUser && req.authUser.isAdmin === true) {
		next();
	} else {
		res.status(403).json({
			success: false,
			message: "Forbidden: Admins only",
		});
	}
};

module.exports = adminMiddleware;
