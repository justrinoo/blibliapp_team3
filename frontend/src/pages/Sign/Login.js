import React from "react";
import Header from "../../parts/Header";
import Footer from "../../parts/Footer";
import Button from "../../elements/Button";
import IcGoogle from "../../assets/images/icons/IconGoogle.svg";
import IcFacebook from "../../assets/images/icons/Iconfacebook.svg";
import InputText from "../../elements/Form/InputText";
export default function Login({ data, props }) {
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
							<form action="">
								<InputText />
							</form>
							<div className="button-wrapper">
								<Button
									className="btn btn-block b-20"
									type="link"
									href={`/itemdetails`}
									style={{
										backgroundColor: "#f8a33f",
										color: "#fff",
										borderRadius: "15px",
									}}
								>
									Masuk
								</Button>
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
