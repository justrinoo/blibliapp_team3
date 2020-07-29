const conn = require("../config/index");

module.exports = {
	ListOrder: async (id, callback) => {
		conn.query(
			{
				sql: "SELECT * FROM usersproducts WHERE id = ?",
				values: [id],
			},
			(err, result) => {
				if (err) throw console.log("error when query cart list product", err);
				callback(err, result);
			}
		);
	},
};
