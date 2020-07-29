import React, { useState, useEffect } from "react";
<<<<<<< HEAD
// import "./assets/scss/style.scss";
import LandingPages from "./pages/LandingPages";
import Cart from "./parts/Cart";
import Login from "./parts/Sign/Login";
import ItemDetails from "./parts/ItemDetails";

// import "./assets/scss/style.scss";
=======
import "./assets/scss/style.scss";

import LandingPages from "./pages/LandingPages";
// import "./assets/scss/style.scss";
import { LandingApiPage } from "./api/LandingPageApi";

import Example from "./elements/Form/InputText/index";
import Checkout from "./parts/Checkout";

import Login from "./parts/Sign/Login";
import ItemDetails from "./parts/ItemDetails";
import Cart from "./parts/Cart";
import "./assets/scss/style.scss";
>>>>>>> bde18c7f4af92bad25f3e4f11a95f07946c44566
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Example from "./elements/Form/InputText/index";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoutes";
import Daftar from "./parts/Sign/Daftar";

export default function App() {
	return (
		<>
			<Router>
				<Route exact path="/" component={LandingPages} />
				<Route path="/login" component={Login} />
				<Route path="/itemdetail/:id" component={ItemDetails} />
				<Route path="/register" component={Daftar} />
				<Route path="/cart/:id" component={Cart} />
			</Router>
		</>
	);
<<<<<<< HEAD

}
=======
}
>>>>>>> bde18c7f4af92bad25f3e4f11a95f07946c44566
