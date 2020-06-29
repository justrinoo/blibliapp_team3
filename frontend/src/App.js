import React, { Component } from "react";
import LandingPages from "./pages/LandingPages";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
	render() {
		return (
			<>
				<Router>
					<Route exact component={LandingPages} path="/" />
				</Router>
			</>
		);
	}
}
