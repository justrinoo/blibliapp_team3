const conn = require("../config/index");
const moment = require("moment");
module.exports = {
	ListProduct: async (body, callback) => {
		try {
			const { searchKey } = body;
			console.log(body);
			conn.query(
				{
					sql: "SELECT * FROM sellerproducts",
					values: [`%${searchKey}%`, `%${searchKey}%`],
				},
				(err, result) => {
					if (err)
						throw console.log("Error when query list sellerproducts", err);
					callback(err, result);
				}
			);
		} catch (error) {
			if (error) throw console.log("Network Error", err);
		}
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
			`INSERT INTO sellerproducts SET ?`,
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
	UpdateProduct: async (id, body, callback) => {
		conn.query(
			{
				sql: "UPDATE sellerproducts SET ? WHERE id = ?",
				values: [{ ...body }, id],
			},
			(err, result) => {
				if (err)
					throw console.log("error when update sellerproducts in sellers", err);
				callback(err, result);
			}
		);
	},
	DeleteProduct: async (id, callback) => {
		conn.query(
			{
				sql: "DElETE FROM sellerproducts WHERE id = ?",
				values: [id],
			},
			(err, result) => {
				if (err)
					throw console.log(
						"error when query deleting products in sellers",
						err
					);
				callback(err, result);
			}
		);
	},
};
