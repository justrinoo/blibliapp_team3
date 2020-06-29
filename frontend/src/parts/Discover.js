import React from "react";
import Button from "../elements/Button";
import IcDiscover from "../assets/images/icons/ic_discover.png";

export default function Discover({ dataBanner, dataCard }) {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<section className="jumbotron jumbotron-discover mt-5">
							<span className="title_discover font-weight-bold">
								Discover Blibli
							</span>
							<div className="card p-4 my-3">
								<div className="container">
									<div className="card-title">
										<nav className="navbar navbar-expand-lg navbar-light">
											<img src={IcDiscover} width={60} alt="DiscoverIcon" />
											<span
												className="title_card_discover"
												style={{ fontSize: "20px" }}
											>
												Offical Store
											</span>
											<ul className="navbar-nav ">
												<li
													className="nav-item"
													style={{ marginLeft: "620px" }}
												>
													<Button
														type="link"
														href="/official-store"
														className="btn btn-primary"
														style={{
															borderRadius: "10px",
															backgroundColor: "#0095da",
														}}
													>
														Lihat Semua
													</Button>
												</li>
											</ul>
										</nav>
										{/* Card */}
										<div className="row row-cols-1 row-cols-md-4">
											{dataBanner.map((item, index) => (
												<div key={index} className="col mb-4">
													<div className="card" style={{ maxWidth: "100%" }}>
														<Button type="link" href="/official-store">
															<img
																src={item.imageUrls}
																className="img-fluid"
																alt="ImageDiscover"
																style={{ width: "100%" }}
															/>
														</Button>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
							<div className="row row-cols-1 row-cols-md-5">
								{dataCard.map((itemCard, index) => (
									<div key={index} className="col mb-4">
										<div className="card">
											<div className="img-wrapper">
												<img
													src={itemCard.imageUrls}
													className="img-fluid"
													alt="Iklandiscover"
													style={{
														width: "100%",
														maxHeight: "80%",
														borderRadius: "16px",
													}}
												/>
											</div>
										</div>
									</div>
								))}
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}
