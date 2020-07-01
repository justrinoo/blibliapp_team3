import React, { useState, useEffect } from "react";
import Axios from "axios";

export const LandingApiPage = (props) => {
	const API_URL = "http://localhost:3000/v1/api/blibli";
	const [dataLanding, setDataLanding] = useState([]);

	useEffect(() => {
		Axios.get(`${API_URL}`).then((res) => {
			console.log("request data...");
			console.log(res.data);
		});
	}, []);

	return (
		<>
			{dataLanding.length > 0
				? dataLanding.map((item) => <h1>{item.nameproduct}</h1>)
				: ""}
		</>
	);
};
