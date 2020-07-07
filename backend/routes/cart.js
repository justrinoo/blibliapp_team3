const express = require("express");
const app = express();
const Cart = require("../model/carts");

app.get("/v1/api/blibli/cart", function (req, res, next) {
	let body;
	if (!req.query.searchKey) {
		body = { searchKey: "" };
	} else {
		body = req.query;
	}
	Cart.ListProduct(body, function (err, result) {
		if (err) throw console.log("error when fetching data lisproduct", err);
		res.send(result);
	});
});
module.exports = app;
