import path from "path";
import { load } from "dotenv-safe";

const env = process.env.NODE_ENV;
if (env === "development") {
	load({
		path: path.join(__dirname, "../.env"),
		sample: path.join(__dirname, "../.env.example"),
	});
}

const port = process.env.PORT;

const logs = process.env.NODE_ENV === "production" ? "combined" : "dev";

export { port, logs, env };
