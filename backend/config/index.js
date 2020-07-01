const mysql = require("mysql");

const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "blibliwebapps",
});
module.exports = conn;
