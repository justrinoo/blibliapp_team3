import React from "react";
import FlashSaleImage from "../assets/images/bg-flashsale.jpg";
export default function FlashSale({ data }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<section className="jumbotron">
			<div className="container">{data.map((itemFlashsale, index) => {})}</div>
		</section>
	);
}
