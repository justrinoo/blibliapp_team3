// Header Component
// navbar atas,navbar kategori, search input, login, daftar, icon keranjang

import React from "react";
import Logo from "../assets/images/blibli-logo.svg";
import Button from "../elements/Button";
// import Search from "../assets/images/search.svg";
// import Kategori from "../assets/images/kategori.svg";
// import Bag from "../assets/images/bag.svg";
// import Button from "../elements/Button";

export default function Header() {
	return (
		<header className="spicing-sm">
			<nav
				className="navbar navbar-expand-lg navbar-light navbar-text"
				style={{ height: "30px" }}
			>
				<div className="container">
					<span>Download Aplikasi Blibli</span>
					<span className="ml-5">Bantuan 24/7</span>

					<ul className="navbar-nav ml-auto ">
						<li className="nav-item ">
							<span className="nav-link text-white">Jual diblibli</span>
						</li>
						<li className="nav-item">
							<span className="nav-link text-white">Blibli Rewards</span>
						</li>
						<li className="nav-item">
							<span className="nav-link text-white">Cek Daftar Pesanan</span>
						</li>
					</ul>
				</div>
			</nav>

			<nav className="navbar navbar-menu navbar-expand-lg navbar-light blue">
				<div className="container">
					<img src={Logo} alt="Blibli" width={114} />
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#blibliNav"
						aria-controls="blibliNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="blibliNav">
						<div
							className="modal fade"
							id="exampleModal"
							tabIndex="-1"
							role="dialog"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true"
						>
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="exampleModalLabel">
											Kategori
										</h5>
										<button
											type="button"
											className="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">...</div>
									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-primary"
											data-dismiss="modal"
										>
											Close
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="input-group md-form form-sm form-1 pl-0">
							<div className="input-group-prepend">
								<span
									className="input-group-text purple lighten-3"
									id="basic-text1"
								>
									<i
										className="fas fa-search text-white"
										aria-hidden="true"
									></i>
								</span>
							</div>
							<input
								className="form-control my-0 py-1"
								type="text"
								placeholder="Search"
								aria-label="Search"
							/>
						</div>

						<span>
							<img src="" alt="" />
						</span>

						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Button
									type="link"
									href="/login"
									className="btn btn-primary border-white text-white mr-3"
								>
									Masuk
								</Button>
							</li>
							<li className="nav-item">
								<Button
									type="link"
									href="/daftar"
									className="btn btn-primary bg-white text-primary"
								>
									Daftar
								</Button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
