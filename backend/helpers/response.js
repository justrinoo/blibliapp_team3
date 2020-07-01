module.exports = {
	response: async (res, type, result, message = "", code, meta) => {
		res.status(code).send({
			success: type,
			data: result,
			message,
			code,
			meta,
		});
	},
};
