const db = require("../config/index");

module.exports = {
	AllDataLandingPage: async (body, callback) => {
		const { searchKey } = body;
		console.log(body);
		try {
			db.query(
				{
					sql: `SELECT * FROM landingpages WHERE nameproduct LIKE ? OR price LIKE ?`,
					values: [`%${searchKey}%`, `%${searchKey}%`],
				},

				function (err, result) {
					console.log(result);
					callback(err, result);
				}
			);
		} catch (error) {
			if (error) console.log("error network get all data landingpage", err);
		}
	},

	FindOneData: async (id, callback) => {
		db.query(
			{
				sql: "SELECT * FROM landingpages WHERE id = ?",
				values: [id],
			},
			function (err, result) {
				callback(err, result[0]);
			}
		);
	},
};
0;
