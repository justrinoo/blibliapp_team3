import React, { Component } from "react";
import LandingPages from "./pages/LandingPages";
// import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingApiPage } from "./api/LandingPageApi";
import Login from "./pages/Sign/Login";
import Example from "./elements/Form/InputText/index";
import ItemDetails from "./parts/ItemDetails";
export default class App extends Component {
	render() {
		return (
			<>
				<Router>
					<Route exact component={LandingPages} path="/" />
					<Route component={Login} path="/login" />
					<Route component={ItemDetails} path={`/itemdetails`} />
				</Router>
			</>
		);
	}
}
