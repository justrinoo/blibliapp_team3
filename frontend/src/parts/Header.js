// Header Component
// navbar atas,navbar kategori, search input, login, daftar, icon keranjang

import React from "react";
import Button from "../elements/Button";

export default function Header({ data }) {
	return (
		<header className="spicing-sm">
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
		</header>
	);
}
