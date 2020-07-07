const db = require("../config/index");
const moment = require("moment");
const crypto = require("crypto");
module.exports = {
	getData: async (body, callback) => {
		const { email, password } = body;
		db.query(
			`SELECT * FROM users where email =  ? and password =  ?`,
			[email, password],
			(err, result) => {
				if (err) throw console.log("error when get data users", err);
				console.log(result);
				callback(err, result[0]);
			}
		);
	},

	create: async (body, callback) => {
		let now = moment().format("YYYY-MM-DD HH:mm:ss").toString();
		let created_at = now;
		let updated_at = now;
		let remember_token = crypto.randomBytes(32).toString("hex");
		const { email, password } = body;
		db.query(
			`INSERT INTO users SET ?`,
			{ email, password, remember_token, created_at, updated_at },
			(err, result) => {
				if (err) throw console.log("error when query model users", err);
				return callback(err, result);
			}
		);
	},
};
