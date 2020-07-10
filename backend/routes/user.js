var express = require("express");
var router = express.Router();
var Users = require("../model/users");
let crypto = require("crypto");
let secret = "rinoea";
/* GET users listing. */

router.post("/v1/api/blibli/login", function (req, res) {
	const { body } = req;

	const hash = crypto
		.createHmac("sha256", secret)
		.update(body.password)
		.digest("hex");

	Users.getData({ ...body, password: hash }, function (err, result, fields) {
		if (err) throw err;
		req.session.email = result.email;
		req.session.password = result.password;
		return res.send({ err, result, fields });
		// req.session.save(() => res.redirect("/v1/api/blibli"));
	});
});

router.post("/v1/api/blibli/register", function (req, res) {
	const { body } = req;

	const hash = crypto
		.createHmac("sha256", secret)
		.update(body.password)
		.digest("hex");

	Users.create({ ...body, password: hash }, (err, result) => {
		if (err) throw err;
		res.redirect("/v1/api/blibli/login");
	});
});

module.exports = router;
