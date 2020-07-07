import React, { Component } from "react";
import LandingPages from "./pages/LandingPages";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingApiPage } from "./api/LandingPageApi";
import Cart from "./parts/Cart";

export default class App extends Component {
	render() {
		return (
			<>
				<Router>
					<Route exact component={LandingPages} path="/" />
					<Route exact component={LandingApiPage} path="/api" />
					<Route exact component={Cart} path="/cart" />
				</Router>
			</>
		);
	}
}
