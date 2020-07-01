import React, { Component } from "react";
import Header from "../parts/Header";
import DataLandingPages from "../data/LandingBlibli.json";
import FlashSale from "../parts/FlashSale";
import PromoLainya from "../parts/PromoLainya";
import Discover from "../parts/Discover"
import Footer from "../parts/Footer";

export default class LandingPages extends Component {
	render() {
		return (
			<>
				<Header data={DataLandingPages.Header} />
				<FlashSale data={DataLandingPages.FlashSale} />
				<PromoLainya data={DataLandingPages.PromoLainnya.Featured} />
				<Discover
					dataBanner={DataLandingPages.Discover.Banner}
					dataCard={DataLandingPages.Discover.Card}
				/>
				<Footer />
			</>
		);
	}
}
