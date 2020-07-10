import React, { useState } from "react";
import Header from "../../parts/Header";
import Footer from "../../parts/Footer";
import "./index_login.scss";
import Button from "../../elements/Button";
import IcGoogle from "../../assets/images/icons/IconGoogle.svg";
import IcFacebook from "../../assets/images/icons/Iconfacebook.svg";
import propTypes from "prop-types";
import IcMail from "../../assets/images/icons/mail.svg";
import IcPassword from "../../assets/images/icons/password.svg";
import Axios from "axios";
import { setUserSession } from "../../utils/Common";
import { useHistory } from "react-router-dom";
export default function Login({ props }) {
	let history = useHistory();
	const [loading, setLoading] = useState(false);
	const email = useFormInput("");
	const password = useFormInput("");
	const [error, setError] = useState(null);

	// handle button click of login form
	const handleLogin = () => {
		setError(null);
		setLoading(true);
		Axios.post("http://localhost:3000/users/v1/api/blibli/login", {
			email: email.value,
			password: password.value,
		})
			.then((response) => {
				setLoading(false);
				console.log("success data", response.data.result);
				setUserSession(
					response.data.result.remember_token,
					response.data.result.email
				);
				history.push("/");
			})
			.catch((error) => {
				setLoading(false);
				// if (error.response.status === 401)
				// 	setError(error.response.data.message);
				// else setError("Something went wrong. Please try again later.");
			});
	};
	return (
		<>
			<Header />
			<div className="container ">
				<div
					class="card card_masukblibli mt-5"
					style={{ maxWidth: "40%", maxHeight: "100%", borderRadius: "0px" }}
				>
					<div class="card-body">
						<h5 class="text-center">Masuk ke akun kamu</h5>
						<div className="button-facebook-wrapper">
							<Button
								type="link"
								href="/login"
								className="btn btn-block mt-4"
								style={{
									backgroundColor: "#4c66a4",
									color: "#fff",
									border: "#4c66a4",
									fontSize: "14px",
									fontWeight: "500",
									borderRadius: "2px",
								}}
							>
								<img
									src={IcFacebook}
									width={30}
									style={{ padding: "5px" }}
									alt="IconGoogle"
								/>
								Masuk Dengan Facebook
							</Button>
						</div>
						<div className="button-google-wrapper">
							<Button
								type="link"
								href="/login"
								className="btn btn-block mt-4"
								style={{
									background: "#fff",
									color: "black",
									border: "1px solid #ddd",
									fontSize: "14px",
									fontWeight: "500",
									borderRadius: "2px",
								}}
							>
								<img
									src={IcGoogle}
									width={30}
									style={{ padding: "5px" }}
									alt="IconGoogle"
								/>
								Masuk Dengan Google
							</Button>
							<div className="text-center mt-3">
								<small>atau</small>
							</div>
							<div className={["input-text mb-3"].join(" ")}>
								<div className="input-group">
									<img src={IcMail} width={30} alt="" />
									<input
										name="email"
										{...email}
										type="text"
										className={["form-control"].join(" ")}
										placeholder="Your email..."
									/>
								</div>
							</div>
							<div className={["input-text mb-3"].join(" ")}>
								<div className="input-group">
									<img src={IcPassword} width={30} alt="" />

									<input
										name="password"
										{...password}
										type="password"
										className={["form-control"].join(" ")}
										placeholder="Masukan kata sandi"
									/>
								</div>
							</div>
							{error && (
								<>
									<small style={{ color: "red" }}>{error}</small>
									<br />
								</>
							)}
							<br />
							<div className="button-wrapper">
								<input
									className="btn btn-block b-20"
									type="button"
									value={loading ? "Loading..." : "Masuk"}
									onClick={handleLogin}
									disabled={loading}
									style={{
										backgroundColor: "#f8a33f",
										color: "#fff",
										borderRadius: "15px",
									}}
								/>
							</div>
							<div className="text-center mt-3">
								<span>
									Belum punya akun?{" "}
									<Button
										type="link"
										href="/register"
										className="text-decoration-none "
									>
										Daftar di sini
									</Button>
								</span>
							</div>
							<div className="text-center mt-2">
								<Button
									type="link"
									href="/forgetpassword"
									className="text-decoration-none  "
								>
									Lupa Kata sandi
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

const useFormInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	return {
		value,
		onChange: handleChange,
	};
};
Login.defaultProps = {
	type: "text",
	pattern: "",
	placeholder: "Masukan email",
	errorresponseponse: "Alamat email harus di isi",
};

Login.propTypes = {
	name: propTypes.string.isRequired,
	value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
	onChange: propTypes.func.isRequired,
	prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
	append: propTypes.oneOfType([propTypes.number, propTypes.string]),
	type: propTypes.string,
	placeholder: propTypes.string,
	outerClassName: propTypes.string,
	inputClassName: propTypes.string,
};
