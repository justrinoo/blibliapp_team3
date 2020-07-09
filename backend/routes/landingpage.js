var express = require("express");
var app = express();
let LandingPage = require("../model/landingpage");
/* GET home page. */

app.get("/v1/api/blibli", function (req, res, next) {
	let body;
	if (!req.query.searchKey) {
		body = { searchKey: "" };
	} else {
		body = req.query;
	}
	LandingPage.AllDataLandingPage(body, function (err, result) {
		if (err) throw console.log("error when fetching data", err);
		res.send(result);
	});
});

app.get("/v1/api/blibli/:id", (req, res) => {
	LandingPage.FindOneData(req.params.id, (err, result) => {
		if (err) throw console.log("error When Find One Data...", err);
		res.send(result);
	});
});

module.exports = app;
