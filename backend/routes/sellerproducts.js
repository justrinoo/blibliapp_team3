const express = require("express");
const router = express.Router();
const Sellers = require("../model/sellerproducts");

router.get("/v1/api/blibli/product", function (req, res, next) {
	let body;
	if (!req.query.searchKey) {
		body = { searchKey: "" };
	} else {
		body = req.query;
	}
	Sellers.ListProduct(body, function (err, result) {
		if (err) throw console.log("error when fetching data lisproduct", err);
		res.status(200).json(result);
	});
});

router.post("/v1/api/blibli/product", (req, res) => {
	const { body } = req;
	Sellers.CreateProduct({ ...body }, (err, result) => {
		if (err) throw err;
		if (body) {
			console.log("Maaf data sudah ada");
			res.send("Sorry data already exist");
		}
		res.status(200).json(result);
	});
});

router.put("/v1/api/blibli/product/:id", (req, res) => {
	let productId = req.params.id;
	const { body } = req;
	Sellers.UpdateProduct(productId, body, (err, result) => {
		if (err)
			throw console.log("Error When routing Update Products in sellers", err);
		if (body) {
			console.log("Maaf data sudah ada");
			res.status(401);
			res.send("Sorry product already exist");
		}
		console.log("Product Updated..");
		res.status(200).json(result);
	});
});

router.delete("/v1/api/blibli/product/:id", (req, res) => {
	const SellerId = req.params.id;
	Sellers.DeleteProduct(SellerId, (err, result) => {
		if (err)
			throw console.log("Error When routing Delete Products in sellers", err);
		if (!result) {
			console.log("Maaf data tidak ada");
			res.status(401);
			res.send("Sorry product not found");
		}
		console.log("Product Deleted..");
		res.status(200).json(result);
	});
});
module.exports = router;
