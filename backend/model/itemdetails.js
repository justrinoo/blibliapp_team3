const conn = require("../config/index");

module.exports = {
	findItemDetails: async (id, callback) => {
		conn.query(
			{
				sql: "SELECT * FROM product WHERE id = ?",
				values: [id],
			},
			function (err, result) {
				callback(err, result);
			}
		);
	},
	ItemDetails: async (postItem, callback) => {
		try {
			conn.query(
				{
					sql: "INSERT INTO product SET ?",
					values: {
						namaproduk: postItem.namaproduk,
						gambar: postItem.gambar,
						diskon: postItem.diskon,
						potonganharga: postItem.potonganharga,
						rewards: postItem.rewards,
						harga: postItem.harga,
						metodepengiriman: postItem.metodepengiriman,
						lokasi: postItem.lokasi,
						rating: postItem.rating,
					},
				},
				function (err, result) {
					if (err) throw console.log("error when insert itemDetails");
					callback(err, result);
				}
			);
		} catch (error) {
			if (error) throw console.log("error network Create Data");
		}
	},
};
