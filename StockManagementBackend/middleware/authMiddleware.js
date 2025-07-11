const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const SECRET = "SECRETFORTOKEN";

const authMiddleware = asyncHandler((req, res, next) => {
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer ")
	) {
		token = req.headers.authorization.split(" ")[1];
		try {
			const decodeToken = jwt.verify(token, SECRET);
			req.authUser = decodeToken;
			next();
		} catch (err) {
			res.status(401).json({
				success: false,
				message: "Invalid or expired token",
			});
		}
	} else {
		res.status(401).json({
			success: false,
			message: "Not Authorized, token missing",
		});
	}
});

module.exports = authMiddleware;
