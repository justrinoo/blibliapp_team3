import React, { useState, useEffect } from "react";
import "./assets/scss/style.scss";

import LandingPages from "./pages/LandingPages";
<<<<<<< HEAD
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
=======
import Cart from "./parts/Cart";
import Login from "./parts/Sign/Login";
import ItemDetails from "./parts/ItemDetails";

import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { LandingApiPage } from "./api/LandingPageApi";

import axios from "axios";

// import Example from "./elements/Form/InputText/index";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoutes";
import Daftar from "./parts/Sign/Daftar";

export default function App(props) {
	return (
		<>
			<Router>
				<Route exact path="/" component={LandingPages} />
				<PublicRoute path="/login" component={Login} />
				<PublicRoute path="/register" component={Daftar} />
				<PrivateRoute path="/dashboard" component={LandingPages} />

				<Route component={ItemDetails} path="/itemDetails" />
			</Router>
		</>
	);
>>>>>>> 98b45861cdccb9cbbd8fd34972e8c880bcaf75e7
}
