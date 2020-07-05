const express = require("express");
const app = express();
const ItemDetails = require("../model/itemdetails-model");

app.get("/v1/api/blibli/detailproduct/:id", (req, res) => {
	const userId = req.params.id;
	ItemDetails.findItemDetails(userId, (err, result) => {
		console.log(result);
		if (err) throw console.log("error When Find One Data...", err);
		// res.send(result);
		res.render("itemdetails", { title: "express" });
	});
});

app.post("/v1/api/blibli/detailproduct", (req, res) => {
	ItemDetails.ItemDetails(req.body, (err, result) => {
		if (err) console.log("When Routing Create item Details", err);
		res.send(result);
	});
});

module.exports = app;
