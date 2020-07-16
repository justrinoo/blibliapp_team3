const authorization = (req, res, next) => {
	if (req.headers.authorization !== "admin") {
		res.statusCode = 401;
		return res.end("Request Ditolak!");
	}
	next();
};
module.exports = authorization;
