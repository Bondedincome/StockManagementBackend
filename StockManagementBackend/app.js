const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const bodyParser = require("body-parser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const userRoutes = require("./routes/user.routes");
const roleRoutes = require("./routes/role.routes");
const saleRoutes = require("./routes/sale.routes");
const productRoutes = require("./routes/product.routes");
const purchaseRoutes = require("./routes/purchase.routes");
const uploadRoutes = require("./routes/upload.routes");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Set up session middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
	session({
		secret: "1234567890987654321",
		resave: false,
		saveUninitialized: true,
	})
);

// Route handlers
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/sales", saleRoutes);
app.use("/api/product", productRoutes);
app.use("/api/purchase", purchaseRoutes);
app.use("/upload", uploadRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
