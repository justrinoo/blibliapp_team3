import React, { Component } from "react";
import LandingPages from "./pages/LandingPages";
import ItemDetails from "./parts/ItemDetails";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingApiPage } from "./api/LandingPageApi";
import Cart from "./parts/Cart";

import Login from "./pages/Sign/Login";
import "./assets/scss/style.scss";
import Example from "./elements/Form/InputText/index";
export default class App extends Component {
	render() {
		return (
			<>
				<Router>
					<Route exact component={LandingPages} path="/" />
					<Route exact component={LandingApiPage} path="/api" />
					<Route exact component={Cart} path="/cart" />
					<Route component={Login} path="/login" />
					<Route component={Example} path="/example" />
				</Router>
				<Router>
					<Router component={ItemDetails} path="itemDetails" />
				</Router>
			</>
		);
	}
}
