const db = require("../config/index");

module.exports = {
	findItemDetails: async (id, callback) => {
		db.query(
			{
				sql: "SELECT * FROM itemdetails WHERE id = ?",
				values: [id],
			},
			function (err, result) {
				callback(err, result[0]);
			}
		);
	},
	ItemDetails: async (postItem, callback) => {
		try {
			db.query(
				{
					sql: "INSERT INTO itemdetails SET ?",
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
