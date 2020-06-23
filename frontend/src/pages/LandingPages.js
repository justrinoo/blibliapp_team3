import React, { Component } from "react";
import Header from "../parts/Header";
import LandingPages from "../data/LandingBlibli.json";
export default class LandingPages extends Component {
	render() {
		return (
			<>
				<Header data={LandingPages.Header} />
			</>
		);
	}
}
