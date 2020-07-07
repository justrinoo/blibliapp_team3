import React, { Component } from "react";
import LandingPages from "./pages/LandingPages";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingApiPage } from "./api/LandingPageApi";
import Login from "./pages/Sign/Login";
import "./assets/scss/style.scss";
import Example from "./elements/Form/InputText/index";
export default class App extends Component {
	render() {
		return (
			<>
				<Router>
					<Route exact component={LandingPages} path="/" />
					<Route component={Login} path="/login" />
					<Route component={Example} path="/example" />
				</Router>
			</>
		);
	}
}
