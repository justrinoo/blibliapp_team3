import React from "react";
import Button from "../elements/Button";

export default function PromoLainya({ data }) {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<h3 className="h5 ml-3">Promo Lainnya</h3>
						<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
							<li className="nav-item" role="presentation">
								<Button
									className="nav-link text-primary"
									id="pills-home-tab"
									data-toggle="pill"
									role="tab"
									aria-controls="pills-home"
									aria-selected="true"
									type="link"
									href=""
								>
									Featured
								</Button>
							</li>
						</ul>
						<div className="tab-content" id="pills-tabContent">
							<div
								className="tab-pane fade show active"
								id="pills-home"
								role="tabpanel"
								aria-labelledby="pills-home-tab"
							>
								<div className="row row-cols-1 row-cols-sm-1 row-cols-md-7">
									{data.map((ItemImage, index) => {
										return (
											<div key={index} className="col-md">
												<div className="card-deck">
													<div className="card">
														<Button type="link" href="">
															<img
																src={ItemImage.imageUrls}
																className="card-img-top img-fluid"
																alt={ItemImage.name}
															/>
														</Button>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
