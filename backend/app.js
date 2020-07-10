var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/user");
var itemRouter = require("./routes/itemdetails");
var landingRouter = require("./routes/landingpage");
var sellerProductRouter = require("./routes/sellerproducts");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(
	session({
		secret: "keyboard cat",
		resave: true,
		saveUninitialized: true,
		cookie: {
			maxAge: 600000,
		},
	})
);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

const User = require("./model/users");

const auth = function (req, res, next) {
	console.log("req auth", req.session.email);
	const { email, password } = req.session;
	console.log("res auth", req);
	User.getData({ email, password }, (err, res) => {
		console.log("auth res", res);

		if (password === res.password) {
			return next();
		}
		return res.redirect("/");
	});
};

app.use("/", indexRouter);
app.use("/sellers", sellerProductRouter);
app.use("/", landingRouter);
app.use("/", itemRouter);
app.use("/users", usersRouter);
// app.use("/posts", auth, postsRouter);
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	next();
});

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
