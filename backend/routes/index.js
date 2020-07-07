const express = require("express");
const app = express();

app.get("/v1/api/blibli", (req, res) => {
	res.render("index", { title: "blibli" });
});

app.get("/v1/api/blibli/login", (req, res) => {
	res.render("sign/login", { title: "express" });
});

app.get("/v1/api/blibli/register", (req, res) => {
	// res.send("welcome");
	res.render("sign/register", { title: "express" });
});

module.exports = app;
