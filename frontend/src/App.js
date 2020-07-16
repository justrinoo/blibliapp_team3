import React, { Component } from "react";
import LandingPages from "./pages/LandingPages";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingApiPage } from "./api/LandingPageApi";
import Checkout from "./parts/Checkout";

export default class App extends Component {
	render() {
		return (
			<>
				<Router>
					<Route exact component={LandingPages} path="/" />
					<Route exact component={LandingApiPage} path="/api" />
					<Route exact component={Checkout} path="/checkout" />
				</Router>
			</>
		);
	}
}
