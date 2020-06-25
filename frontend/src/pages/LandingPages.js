import React, { Component } from "react";
import Header from "../parts/Header";
import DataLandingPages from "../data/LandingBlibli.json";
import FlashSale from "../parts/FlashSale";

export default class LandingPages extends Component {
	render() {
		return (
			<>
				<Header data={DataLandingPages.Header} />
				<FlashSale data={DataLandingPages.FlashSale} />
			</>
		);
	}
}
