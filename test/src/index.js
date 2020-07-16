import express from "express";
import bodyParser from "body-parser";
import uuid from "uuid/v4";

const server = express();

let users = [
	{
		id: "1",
		firstName: "Robin",
		lastName: "Hood",
	},
	{
		id: "2",
		firstName: "Jhon",
		lastName: "Doe",
	},
];
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", (req, res) => {
	res.send("Welcome To Express Js");
});

server.get("/users", (req, res) => {
	res.json(users);
});

server.get("/users/:id", (req, res) => {
	let userId = req.params.id;
	let user = users.find((item) => item.id === userId);
	if (!user) {
		res.statusCode = 404;
		res.json({ error: "Maaf user yang kamu cari tidak ada!" });
	}
	res.json(user);
});

server.post("/users", (req, res) => {
	// userId -> uuid
	// body-parser
	const userId = uuid();
	const newUser = { id: userId, ...req.body };
	users.push(newUser);
	res.json(newUser);
});

server.patch("/users/:id", (req, res) => {
	let result;
	if (!result) {
		res.statusCode = 404;
		res.json({
			error: "Maaf user yang kamu edit ID nya tidak ada, silahkan cek kembali!",
		});
	}
	users = users.map((item) => {
		if (item.id === req.params.id) {
			result = { ...item, ...req.body };
			return result;
		}
		return item;
	});

	res.json(result);
});

server.delete("/users/:id", (req, res) => {
	users = users.filter((item) => item.id != req.params.id);
	res.send("Selamat User Terhapus!");
});

server.listen(3000, () => {
	console.log("server is running port 3000");
});
