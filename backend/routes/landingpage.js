let express = require("express");
let router = express.Router();
let LandingPage = require("../model/landingpage");

/* GET home page. */

router.get("/v1/api/blibli", function (req, res, next) {
	let body;
	if (!req.query.searchKey) {
		body = { searchKey: "" };
	} else {
		body = req.query;
	}
	LandingPage.AllDataLandingPage(body, function (err, result) {
		if (err) throw console.log("error when fetching data", err);
		res.status(200).json(result);
	});
});

router.get("/v1/api/blibli/:id", (req, res) => {
	LandingPage.FindOneData(req.params.id, (err, result) => {
		if (err) throw console.log("error When Find One Data...", err);
		res.status(200).json(result);
	});
});
router.post("/v1/api/blibli", (req, res) => {
	LandingPage.CreateProduct(req.body, (err, result) => {
		if (err) throw console.log("error When Find One Data...", err);
		res.status(200).json(result);
	});
});

module.exports = router;
