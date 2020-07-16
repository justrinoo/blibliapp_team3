import React, { useState, useEffect } from "react";
import "./assets/scss/style.scss";

import LandingPages from "./pages/LandingPages";
// import "./assets/scss/style.scss";
import { LandingApiPage } from "./api/LandingPageApi";

import Example from "./elements/Form/InputText/index";
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
				<PublicRoute path="/itemdetail/:id" component={ItemDetails} />
				<PublicRoute path="/register" component={Daftar} />
				<PublicRoute path="/cart/:id" component={Cart} />
				{/* <PrivateRoute path="/itemdetail/:id" component={ItemDetails} /> */}
			</Router>
		</>
	);
}
