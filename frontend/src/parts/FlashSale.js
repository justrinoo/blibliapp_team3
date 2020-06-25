import React from "react";
import FlashSaleImage from "../assets/images/bg-flashsale.jpg";
export default function FlashSale({ data }) {
	return (
		<section className="jumbotron">
			<div className="container">{data.map((itemFlashsale, index) => {})}</div>
		</section>
	);
}
