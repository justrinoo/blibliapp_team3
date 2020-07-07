const conn = require("../config/index");

module.exports = {
	ListProduct: async (body, callback) => {
		try {
			const { searchKey } = body;
			console.log(body);
			conn.query(
				{
					sql: "SELECT * FROM product",
					values: [`%${searchKey}%`, `%${searchKey}%`],
				},
				(err, result) => {
					if (err) throw console.log("Error when query list product", err);
					callback(err, result);
				}
			);
		} catch (error) {
			if (error) throw console.log("Network Error", err);
		}
	},
};
