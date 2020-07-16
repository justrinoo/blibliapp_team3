const express = require("express");
const app = express();
const Carts = require("../model/cart");

app.get("/v1/api/blibli/cart/:id", (req, res) => {
	const CartId = req.params.id;
	Carts.ListOrder(CartId, (err, result) => {
		if (err) throw console.log("Error when routing Cart", err);
		if (!result) {
			res.statusCode = 404;
			res.json({ error: "Maaf user yang kamu cari tidak ada!" });
		} else {
			console.log(result);
			res.status(200).json({ message: "data tersedia!" });
		}
	});
});

app.post("/v1/api/blibli/cart", (req, res) => {});

module.exports = app;
