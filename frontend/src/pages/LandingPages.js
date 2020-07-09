import React, { useState, useEffect } from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import FlashSale from "../parts/FlashSale";
import CategoryItem from "../parts/Category";
import Discover from "../parts/Discover";
import PromoLainya from "../parts/PromoLainya";
import Footer from "../parts/Footer";
import Axios from "axios";
import DataLandingPages from "../data/LandingBlibli.json";
export const LandingPages = () => {
	const API_URL = "http://localhost:3000/v1/api/blibli";
	const [dataLanding, setDataLanding] = useState([]);

	useEffect(() => {
		Axios.get(`${API_URL}`).then((res) => {
			setDataLanding(res.data);
		});
	}, []);
	return (
		<>
			<Header data={DataLandingPages.Header} />
			<Hero />
			<FlashSale data={DataLandingPages.FlashSale} />
			<PromoLainya data={DataLandingPages.PromoLainnya.Featured} />
			<Discover
				dataBanner={DataLandingPages.Discover.Banner}
				dataCard={DataLandingPages.Discover.Card}
			/>
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
			<Footer />
		</>
	);
};
export default LandingPages;
