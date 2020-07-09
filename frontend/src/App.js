import React, { Component } from "react";
import LandingPages from "./pages/LandingPages";
import ItemDetails from "./parts/ItemDetails";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
	render() {
		return (
			<>
				<Router>
					<Route exact component={LandingPages} path="/" />
				</Router>
				<Router>
					<Router component={ItemDetails} path="itemDetails" />
				</Router>
			</>
		);
	}
}
