import React, { useState, useEffect } from "react";
import Header from "./Header";
import Bag from "../assets/images/bag1.svg";
import Logo from "../assets/images/blibli-logo1.png";
import Product from "../assets/images/mouse.jpg";
import CategoryItem from "../parts/Category";
import DataLandingPages from "../data/LandingBlibli.json";
import Footer from "../parts/Footer";
import iklan45 from "../assets/images/iklan45.png";
import iklan46 from "../assets/images/iklan46.png";
import iklan47 from "../assets/images/iklan47.png";
import iklan48 from "../assets/images/iklan48.png";
import iklan49 from "../assets/images/iklan49.png";
import iklan50 from "../assets/images/iklan50.png";
import Delever from "../assets/images/delever.svg";
import axios from "axios";
export const Cart = (props) => {
	const [count, setCount] = useState(0);
	const id = props.match.params.id;
	let API = `http://localhost:3000/v1/api/blibli/${id}`;
	const [itemdetail, setItemDetail] = useState([]);
	useEffect(() => {
		axios.get(`${API}`).then((res) => {
			console.log(res.data);
			setItemDetail(res.data);
		});
	}, []);
	return (
		<div>
			<Header />

			<h3 class="text-center mt-5" style={{ textAlign: "center" }}>
				<img src={Bag} alt="Logo" style={{ height: "40px" }} />
				Bag
			</h3>

			<div class="container">
				<div class="row mt-5 bg-light">
					<div class="col-sm">
						<input type="checkbox" name="" id="" class="mr-2" />
						<span class="font-weight-bold">Pilih Semua Product</span>
					</div>
					<div class="col-sm text-muted">Harga</div>
					<div class="col-sm text-muted">Jumlah</div>
				</div>
			</div>

			<div class="container mt-3">
				<input type="checkbox" name="" id="" class="mr-2" />
				<span class="font-weight-bold" style={{ fontSize: "12px" }}>
					<img src={Logo} alt="Logo" class="mr-2" />
					Blibli.com
				</span>
				<hr />
				<div class="row">
					<div class="col-sm">
						<p>
							<img
								src={itemdetail.gambar}
								alt="Harddisk"
								style={{ height: "80px", width: "70px" }}
								class="mr-2"
							/>
							<input type="checkbox" name="" id="" class="mr-2" />
							<small>{itemdetail.namaproduk}</small>
						</p>
					</div>
					<div class="col-sm">
						<span style={{ color: "#D95B0F" }}>{itemdetail.harga}</span>
					</div>
					<div class="col-sm">
						<button onClick={() => setCount(count - 1)} class="">
							-
						</button>
						<input type="text" value={count} class="text-center" />
						<button onClick={() => setCount(count + 1)}>+</button>
					</div>
				</div>
			</div>

			<div class="container">
				<div class="row bg-light mt-3">
					<div class="col-sm-4 mt-2">
						<span>
							<img src={iklan45} alt="" />
							<img src={iklan46} alt="" />
							<img src={iklan47} alt="" />
							<img src={iklan48} alt="" />
							<img src={iklan49} alt="" />
							<img src={iklan50} alt="" />
						</span>
					</div>{" "}
					|
					<div class="col-sm-4 mt-1">
						<span>
							<img src={Delever} alt="" />
							Selamat, kamu dapat potongan untuk biaya pengiriman!*
						</span>
					</div>{" "}
					|
					<div class="col-sm">
						<button type="button" class="btn btn-warning float-right mt-3">
							Chekout
						</button>
						<p>Total Belanja</p>
						<p style={{ color: "#D95B0F" }}>{itemdetail.harga}</p>
					</div>
				</div>
			</div>

			<div class="mt-5">
				<CategoryItem
					dataRekomendasi={DataLandingPages.ProdukRekomendasi}
					dataNewNormal={DataLandingPages.NewNormal}
					dataConsumerGoods={DataLandingPages.ConsummerGoods}
					dataLifeStyle={DataLandingPages.LifeStyle}
					dataGadgetAksesoris={DataLandingPages.GadgetAndAksesoris}
					dataOtomotif={DataLandingPages.Otomotif}
					dataVoucher={DataLandingPages.VoucherAndTravel}
					dataHomeLiving={DataLandingPages.HomeAndLiving}
				/>
			</div>

			<div class="mt-5">
				<Footer />
			</div>
		</div>
	);
};

export default Cart;
