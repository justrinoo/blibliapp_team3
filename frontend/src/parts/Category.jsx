import React from "react";

export default function Category({
	dataRekomendasi,
	dataNewNormal,
	dataConsumerGoods,
	dataLifeStyle,
	dataGadgetAksesoris,
	dataOtomotif,
	dataVoucher,
	dataHomeLiving,
}) {
	return (
		<>
			<div className="container ">
				<ul
					className="nav nav-pills mb-3 navbar_category"
					id="pills-tab"
					role="tablist"
				>
					<li className="nav-item" role="presentation">
						<a
							className="nav-link active"
							id="pills-produkrekomendasi-tab"
							data-toggle="pill"
							href="#pills-produkrekomendasi"
							role="tab"
							aria-controls="pills-produkrekomendasi"
							aria-selected="true"
						>
							Produk Rekomendasi
						</a>
					</li>
					<li className="nav-item" role="presentation">
						<a
							className="nav-link"
							id="pills-newnormal-tab"
							data-toggle="pill"
							href="#pills-newnormal"
							role="tab"
							aria-controls="pills-newnormal"
							aria-selected="false"
						>
							New Normal
						</a>
					</li>
					<li className="nav-item" role="presentation">
						<a
							className="nav-link"
							id="pills-consumergoods-tab"
							data-toggle="pill"
							href="#pills-consumergoods"
							role="tab"
							aria-controls="pills-consumergoods"
							aria-selected="false"
						>
							Consumer Goods
						</a>
					</li>
					<li className="nav-item" role="presentation">
						<a
							className="nav-link"
							id="pills-lifestyle-tab"
							data-toggle="pill"
							href="#pills-lifestyle"
							role="tab"
							aria-controls="pills-lifestyle"
							aria-selected="false"
						>
							Life Style
						</a>
					</li>
					<li className="nav-item" role="presentation">
						<a
							className="nav-link"
							id="pills-gadgedandaksesoris-tab"
							data-toggle="pill"
							href="#pills-gadgedandaksesoris"
							role="tab"
							aria-controls="pills-gadgedandaksesoris"
							aria-selected="false"
						>
							Gadget & Aksesories
						</a>
					</li>
					<li className="nav-item" role="presentation">
						<a
							className="nav-link"
							id="pills-otomotif-tab"
							data-toggle="pill"
							href="#pills-otomotif"
							role="tab"
							aria-controls="pills-otomotif"
							aria-selected="false"
						>
							Otomotif
						</a>
					</li>
					<li className="nav-item" role="presentation">
						<a
							className="nav-link"
							id="pills-voucherandtravel-tab"
							data-toggle="pill"
							href="#pills-voucherandtravel"
							role="tab"
							aria-controls="pills-voucherandtravel"
							aria-selected="false"
						>
							Voucher & Travel
						</a>
					</li>
					<li className="nav-item" role="presentation">
						<a
							className="nav-link"
							id="pills-homeandliving-tab"
							data-toggle="pill"
							href="#pills-homeandliving"
							role="tab"
							aria-controls="pills-homeandliving"
							aria-selected="false"
						>
							Home & Living
						</a>
					</li>
				</ul>
				<div className="tab-content" id="pills-tabContent">
					<div
						className="tab-pane fade show active"
						id="pills-produkrekomendasi"
						role="tabpanel"
						aria-labelledby="pills-produkrekomendasi-tab"
					>
						<div className="container">
							<div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
								{dataRekomendasi.map((ItemRekomendasi, index) => {
									return (
										<div key={index} className="col-md">
											<div
												className="card-deck  mt-4 "
												style={{ width: "100%" }}
											>
												<div
													className="card card-category"
													style={{
														borderRadius: "20px",
													}}
												>
													<img
														src={ItemRekomendasi.imageUrls}
														className="img-fluid"
														alt="FlashSaleImage"
													/>
													<div className="card-body ">
														<div className="card-item-title">
															<span className="card-title ">
																{ItemRekomendasi.name}
															</span>
														</div>
														<p className="card-text text-orange font-weight-bold ">
															{ItemRekomendasi.price}
														</p>
														<p className="card-text text-disabled text-gray">
															<del>{ItemRekomendasi.sale}</del>{" "}
															<span className="text-danger">
																{ItemRekomendasi.discount}
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="pills-newnormal"
						role="tabpanel"
						aria-labelledby="pills-newnormal-tab"
					>
						<div className="container">
							<div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
								{dataNewNormal.map((ItemNewNormal, index) => {
									return (
										<div key={index} className="col-md">
											<div
												className="card-deck  mt-4 "
												style={{ width: "100%" }}
											>
												<div
													className="card card-category"
													style={{
														borderRadius: "20px",
													}}
												>
													<img
														src={ItemNewNormal.imageUrls}
														className="img-fluid"
														alt="FlashSaleImage"
													/>
													<div className="card-body ">
														<div className="card-item-title">
															<span className="card-title ">
																{ItemNewNormal.name}
															</span>
														</div>
														<p className="card-text text-orange font-weight-bold ">
															{ItemNewNormal.price}
														</p>
														<p className="card-text text-disabled text-gray">
															<del>{ItemNewNormal.sale}</del>{" "}
															<span className="text-danger">
																{ItemNewNormal.discount}
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="pills-consumergoods"
						role="tabpanel"
						aria-labelledby="pills-consumergoods-tab"
					>
						<div className="container">
							<div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
								{dataConsumerGoods.map((ItemConsumer, index) => {
									return (
										<div key={index} className="col-md">
											<div
												className="card-deck  mt-4 "
												style={{ width: "100%" }}
											>
												<div
													className="card card-category"
													style={{
														borderRadius: "20px",
													}}
												>
													<img
														src={ItemConsumer.imageUrls}
														className="img-fluid"
														alt="FlashSaleImage"
													/>
													<div className="card-body ">
														<div className="card-item-title">
															<span className="card-title ">
																{ItemConsumer.name}
															</span>
														</div>
														<p className="card-text text-orange font-weight-bold ">
															{ItemConsumer.price}
														</p>
														<p className="card-text text-disabled text-gray">
															<del>{ItemConsumer.sale}</del>{" "}
															<span className="text-danger">
																{ItemConsumer.discount}
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="pills-lifestyle"
						role="tabpanel"
						aria-labelledby="pills-lifestyle-tab"
					>
						<div className="container">
							<div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
								{dataLifeStyle.map((ItemLifeStyle, index) => {
									return (
										<div key={index} className="col-md">
											<div
												className="card-deck  mt-4 "
												style={{ width: "100%" }}
											>
												<div
													className="card card-category"
													style={{
														borderRadius: "20px",
													}}
												>
													<img
														src={ItemLifeStyle.imageUrls}
														className="img-fluid"
														alt="FlashSaleImage"
													/>
													<div className="card-body ">
														<div className="card-item-title">
															<span className="card-title ">
																{ItemLifeStyle.name}
															</span>
														</div>
														<p className="card-text text-orange font-weight-bold ">
															{ItemLifeStyle.price}
														</p>
														<p className="card-text text-disabled text-gray">
															<del>{ItemLifeStyle.sale}</del>{" "}
															<span className="text-danger">
																{ItemLifeStyle.discount}
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="pills-gadgedandaksesoris"
						role="tabpanel"
						aria-labelledby="pills-gadgedandaksesoris-tab"
					>
						<div className="container">
							<div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
								{dataGadgetAksesoris.map((ItemGadgetAksesoris, index) => {
									return (
										<div key={index} className="col-md">
											<div
												className="card-deck  mt-4 "
												style={{ width: "100%" }}
											>
												<div
													className="card card-category"
													style={{
														borderRadius: "20px",
													}}
												>
													<img
														src={ItemGadgetAksesoris.imageUrls}
														className="img-fluid"
														alt="FlashSaleImage"
													/>
													<div className="card-body ">
														<div className="card-item-title">
															<span className="card-title ">
																{ItemGadgetAksesoris.name}
															</span>
														</div>
														<p className="card-text text-orange font-weight-bold ">
															{ItemGadgetAksesoris.price}
														</p>
														<p className="card-text text-disabled text-gray">
															<del>{ItemGadgetAksesoris.sale}</del>{" "}
															<span className="text-danger">
																{ItemGadgetAksesoris.discount}
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="pills-otomotif"
						role="tabpanel"
						aria-labelledby="pills-otomotif-tab"
					>
						<div className="container">
							<div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
								{dataOtomotif.map((ItemOtomotif, index) => {
									return (
										<div key={index} className="col-md">
											<div
												className="card-deck  mt-4 "
												style={{ width: "100%" }}
											>
												<div
													className="card card-category"
													style={{
														borderRadius: "20px",
													}}
												>
													<img
														src={ItemOtomotif.imageUrls}
														className="img-fluid"
														alt="FlashSaleImage"
													/>
													<div className="card-body ">
														<div className="card-item-title">
															<span className="card-title ">
																{ItemOtomotif.name}
															</span>
														</div>
														<p className="card-text text-orange font-weight-bold ">
															{ItemOtomotif.price}
														</p>
														<p className="card-text text-disabled text-gray">
															<del>{ItemOtomotif.sale}</del>{" "}
															<span className="text-danger">
																{ItemOtomotif.discount}
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="pills-voucherandtravel"
						role="tabpanel"
						aria-labelledby="pills-voucherandtravel-tab"
					>
						<div className="container">
							<div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
								{dataVoucher.map((ItemVoucerTravel, index) => {
									return (
										<div key={index} className="col-md">
											<div
												className="card-deck  mt-4 "
												style={{ width: "100%" }}
											>
												<div
													className="card card-category"
													style={{
														borderRadius: "20px",
													}}
												>
													<img
														src={ItemVoucerTravel.imageUrls}
														className="img-fluid"
														alt="FlashSaleImage"
													/>
													<div className="card-body ">
														<div className="card-item-title">
															<span className="card-title ">
																{ItemVoucerTravel.name}
															</span>
														</div>
														<p className="card-text text-orange font-weight-bold ">
															{ItemVoucerTravel.price}
														</p>
														<p className="card-text text-disabled text-gray">
															<del>{ItemVoucerTravel.sale}</del>{" "}
															<span className="text-danger">
																{ItemVoucerTravel.discount}
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="pills-homeandliving"
						role="tabpanel"
						aria-labelledby="pills-homeandliving-tab"
					>
						<div className="container">
							<div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
								{dataHomeLiving.map((ItemHomeLiving, index) => {
									return (
										<div key={index} className="col-md">
											<div
												className="card-deck  mt-4 "
												style={{ width: "100%" }}
											>
												<div
													className="card card-category"
													style={{
														borderRadius: "20px",
													}}
												>
													<img
														src={ItemHomeLiving.imageUrls}
														className="img-fluid"
														alt="FlashSaleImage"
													/>
													<div className="card-body ">
														<div className="card-item-title">
															<span className="card-title ">
																{ItemHomeLiving.name}
															</span>
														</div>
														<p className="card-text text-orange font-weight-bold ">
															{ItemHomeLiving.price}
														</p>
														<p className="card-text text-disabled text-gray">
															<del>{ItemHomeLiving.sale}</del>{" "}
															<span className="text-danger">
																{ItemHomeLiving.discount}
															</span>
														</p>
													</div>
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
		</>
	);
}
