const express = require("express");
const router = express.Router();
const ItemDetails = require("../model/itemdetails");

router.get("/v1/api/blibli/detailproduct/:id", (req, res) => {
	const userId = req.params.id;
	ItemDetails.findItemDetails(userId, (err, result) => {
		console.log(result);
		if (err) throw console.log("error When Find One Data...", err);
		res.status(200).json(result);
		// res.render("itemdetails", { title: "express" });
	});
});

router.post("/v1/api/blibli/detailproduct", (req, res) => {
	ItemDetails.ItemDetails(req.body, (err, result) => {
		if (err) console.log("When Routing Create item Details", err);
		res.status(200).json(result);
	});
});

module.exports = router;
