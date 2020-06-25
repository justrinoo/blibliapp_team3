// Header Component
// navbar atas,navbar kategori, search input, login, daftar, icon keranjang

import React from "react";
import Logo from '../assets/images/blibli-logo.svg'
import Search from "../assets/images/search.svg"
import Kategori from "../assets/images/kategori.svg"
import Bag from "../assets/images/bag.svg"
import Button from "../elements/Button";

export default function Header() {

	return (
		<header>
				<nav
				class="navbar navbar-expand-lg navbar-light navbar-text"
				style={{ height: "30px" }}
			>
				<span>Download Aplikasi Blibli</span>
				<span className="ml-5">Bantuan 24/7</span>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav ml-auto ">
						<li class="nav-item ">
							<span className="nav-link text-white">Jual diblibli</span>
						</li>
						<li class="nav-item">
							<span className="nav-link text-white">Blibli Rewards</span>
						</li>
						<li class="nav-item">
							<span className="nav-link text-white">Cek Daftar Pesanan</span>
						</li>
					</ul>
				</div>
			</nav>

			<nav class="navbar navbar-expand-lg navbar-light bg-primary">
				<img src={Logo} alt="logo" width={114} />
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<p type="button" class="bg-primary ml-5 mt-4 text-white" data-toggle="modal" data-target="#exampleModal">
						<img src={Kategori} alt="" />
						<span className="ml-2">Kategori</span>
					</p>

					<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLabel">Kategori</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									...
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
								</div>
							</div>
						</div>
					</div>

					<div class="input-group md-form form-sm form-1 pl-0">
						<div class="input-group-prepend">
							<span class="input-group-text purple lighten-3" id="basic-text1"><i class="fas fa-search text-white"
								aria-hidden="true"></i></span>
						</div>
							<input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
					</div>

						<span>
							<img src="" alt="" />
						</span>

						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a href="#" className="btn btn-primary text-white mr-3">Masuk</a>
							</li>
							<li className="nav-item">
								<a href="#" className="btn btn-primary bg-white text-primary">Daftar</a>
							</li>
						</ul>

					</div>
			</nav>
		</header>
	)
}
