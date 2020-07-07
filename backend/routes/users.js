const express = require("express");
const router = express.Router();
const Users = require("../model/users");
const crypto = require("crypto");
const secret = "rinoagain";

router.post("/v1/api/blibli/login", function (req, res) {
	const { body } = req;

	const hash = crypto
		.createHmac("sha256", secret)
		.update(body.password)
		.digest("hex");

	Users.getData({ ...body, password: hash }, function (err, result, fields) {
		if (err) throw err;
		req.session.save(() => res.redirect("/v1/api/blibli"));
	});
});
router.post("/v1/api/blibli/register", function (req, res) {
	const { body } = req;

	const hash = crypto
		.createHmac("sha256", secret)
		.update(body.password)
		.digest("hex");

	Users.create({ ...body, password: hash }, (err, result) => {
		if (err) throw console.log("Error when post", err);
		res.redirect("/v1/api/blibli/login");
	});
});

module.exports = router;
