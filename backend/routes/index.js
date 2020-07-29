const express = require("express");
const router = express.Router();

router.get("/v1/api/blibli/login", (req, res) => {
	res.render("sign/login", { title: "express" });
});

router.get("/v1/api/blibli/register", (req, res) => {
	// res.send("welcome");
	res.render("sign/register", { title: "express" });
});

module.exports = router;
