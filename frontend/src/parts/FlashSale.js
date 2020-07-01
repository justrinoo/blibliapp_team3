import React from "react";
import FlashSaleIcon from "../assets/images/icons/flashsale-ic.svg";
import Timer from "react-compound-timer";
import { Link } from "react-router-dom";

export default function FlashSale({ data }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<section className="jumbotron img-fluid">
			<div className="container ">
				<img
					src={FlashSaleIcon}
					width={32}
					alt="FlashIcon"
					style={{
						backgroundColor: "white",
						borderRadius: "20px",
						padding: "2px",
					}}
				/>
				<span
					className="flash_title h5  text-white ml-3"
					style={{ fontSize: "16px", fontWeight: 500 }}
				>
					Flash Sale
				</span>
				<Timer
					initialTime={60000 * 30 * 24 + 6000}
					lastUnit="h"
					direction="backward"
				>
					<span className="item-timer">
						<Timer.Minutes />
					</span>
					:
					<span className="item-timer">
						<Timer.Hours />
					</span>
					:
					<span className="item-timer">
						<Timer.Seconds />
					</span>
				</Timer>
				<span className="text-flashsale">
					<Link to="/  " className="text-flashsale">
						Lihat Semua
					</Link>
				</span>
			</div>
			<div className="container">
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
					{data.map((ItemFlashSale, index) => {
						return (
							<div key={index} className="col-md">
								<div className="card-deck mt-4 " style={{ width: "100%" }}>
									<div className="card" style={{ borderRadius: "20px" }}>
										<img
											src={ItemFlashSale.imageUrls}
											className="img-fluid"
											alt="FlashSaleImage"
										/>
										<div className="card-body ">
											<div className="card-item-title">
												<span className="card-title ">
													{ItemFlashSale.name}
												</span>
											</div>
											<p className="card-text text-orange font-weight-bold ">
												{ItemFlashSale.price}
											</p>
											<p className="card-text text-disabled text-gray">
												<del>{ItemFlashSale.sale}</del>{" "}
												<span className="text-danger">
													{ItemFlashSale.discount}
												</span>
											</p>
											<div className="progress">
												<div
													className="progress-bar w-50 bg-success"
													role="progressbar"
													aria-valuenow="75"
													aria-valuemin="0"
													aria-valuemax="100"
												></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
