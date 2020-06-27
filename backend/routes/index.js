var express = require("express");
var router = express.Router();
let product = require("../data/index");
/* GET home page. */

router.get("/", function (req, res) {
	res.render("index", { title: "express" });
});

router.get("/blibli/:id", (req, res) => {
	let getId = req.params.id;
	let products = product.find((item) => item.id === getId);
	res.json(products);
});

module.exports = router;
