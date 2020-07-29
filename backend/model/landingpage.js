const conn = require("../config/index");
let moment = require("moment");
module.exports = {
	AllDataLandingPage: async (body, callback) => {
		const { searchKey } = body;
		console.log(body);
		try {
			conn.query(
				{
					sql: `SELECT * FROM flashsale_LP WHERE namaproduk LIKE ? OR harga LIKE ?`,
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
		conn.query(
			{
				sql: "SELECT * FROM flashsale_LP WHERE id = ?",
				values: [id],
			},
			function (err, result) {
				callback(err, result[0]);
			}
		);
	},
	CreateProduct: async (body, callback) => {
		let now = moment().format("YYYY-MM-DD HH:mm:ss").toString();
		let create_at = now;
		const {
			namaproduk,
			gambar,
			diskon,
			potonganharga,
			rewards,
			harga,
			metodepengiriman,
			lokasi,
			rating,
		} = body;
		conn.query(
			`INSERT INTO flashsale_lp SET ?`,
			{
				namaproduk,
				gambar,
				diskon,
				potonganharga,
				harga,
				rewards,
				metodepengiriman,
				lokasi,
				rating,
				create_at,
			},
			(err, result) => {
				if (err)
					throw console.log("error when create post product sellers", err);
				callback(err, result);
			}
		);
	},
};
