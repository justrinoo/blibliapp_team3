import React, { useState, useEffect } from "react";
import Header from "../parts/Header";
import DataLandingPages from "../data/LandingBlibli.json";
import FlashSale from "../parts/FlashSale";
import PromoLainya from "../parts/PromoLainya";
import Discover from "../parts/Discover";
import Axios from "axios";
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
			<FlashSale data={DataLandingPages.FlashSale} />
			<PromoLainya data={DataLandingPages.PromoLainnya.Featured} />
			<Discover
				dataBanner={DataLandingPages.Discover.Banner}
				dataCard={DataLandingPages.Discover.Card}
			/>
		</>
	);
};
export default LandingPages;
