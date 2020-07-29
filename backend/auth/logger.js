const myLogged = (req, res, next) => {
	console.log(`  ${req.url} ${req.method} -- Your Logged ${new Date()}`);
	next();
};

module.exports = myLogged;
