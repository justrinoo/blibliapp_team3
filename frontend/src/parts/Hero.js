import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import Logo from "../assets/images/Banner-1.jpg";
import Logo1 from "../assets/images/Banner-2.jpg";
import Logo2 from "../assets/images/Banner-3.jpg";
import Logo3 from "../assets/images/Bannner-4.jpg";
import Logo4 from "../assets/images/Banner-5.jpg";
import Logo5 from "../assets/images/Banner-6.jpg";
import Logo6 from "../assets/images/Banner-7.jpg";
import Logo7 from "../assets/images/Banner-8.jpg";
import Logo8 from "../assets/images/open-menu.png";
import Logo9 from "../assets/images/shopping-cart.png";
import Logo10 from "../assets/images/handphone.png";
import Logo11 from "../assets/images/ticket.png";
import Logo12 from "../assets/images/cook.png";
import Logo13 from "../assets/images/sofa.png";
import Logo14 from "../assets/images/parfum.png";
import Logo15 from "../assets/images/plane.png";
import Logo16 from "../assets/images/globe.png";
import Logo17 from "../assets/images/customer.jpg";
import Logo18 from "../assets/images/delivery.png";
import Logo19 from "../assets/images/100.png";
import Logo20 from "../assets/images/box.png";
export default function Hero() {
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const chevronWidth = 40;
	return (
		<div style={{ padding: `0 ${chevronWidth}px` }}>
			<ItemsCarousel
				requestToChangeActive={setActiveItemIndex}
				activeItemIndex={activeItemIndex}
				numberOfCards={2}
				gutter={0}
				leftChevron={
					<button
						style={{
							borderRadius: "100px",
							backgroundColor: "transparent",
							color: "blue",
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="11"
							height="19"
							style={{ padding: "8px" }}
						>
							<path
								fill="#0095DA"
								fill-rule="evenodd"
								d="M.3 9.5c0-.44.18-.85.5-1.13l8.24-7.33a1.31 1.31 0 0 1 1.94.19c.49.62.4 1.54-.18 2.06L3.82 9.5l6.99 6.2c.58.53.66 1.45.17 2.07a1.31 1.31 0 0 1-1.94.19L.8 10.63A1.5 1.5 0 0 1 .3 9.5"
							/>
						</svg>
					</button>
				}
				rightChevron={
					<button
						style={{
							borderRadius: "100px",
							backgroundColor: "transparent",
							color: "blue",
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="11"
							height="19"
							style={{ padding: "8px" }}
						>
							<path
								fill="#0095DA"
								fill-rule="evenodd"
								d="M10.97 9.5c0 .44-.18.85-.5 1.13l-8.24 7.33a1.31 1.31 0 0 1-1.94-.19c-.48-.62-.4-1.54.18-2.06L7.45 9.5.47 3.3a1.53 1.53 0 0 1-.18-2.07 1.31 1.31 0 0 1 1.94-.19l8.25 7.33c.31.28.5.7.5 1.13"
							/>
						</svg>
					</button>
				}
				outsideChevron
				chevronWidth={chevronWidth}
			>
				<img src={Logo} alt="test" style={{ borderRadius: "10px" }} />
				<img src={Logo1} alt="halo" style={{ borderRadius: "10px" }} />
				<img src={Logo2} alt="org pantai" style={{ borderRadius: "10px" }} />
				<img src={Logo3} alt="cewe cantik" style={{ borderRadius: "10px" }} />
				<img src={Logo4} alt="seni" style={{ borderRadius: "10px" }} />
				<img
					src={Logo5}
					alt="Tango"
					style={{ width: "93%", borderRadius: "10px" }}
				/>
				<img
					src={Logo6}
					alt="mie"
					style={{ width: "93%", borderRadius: "10px" }}
				/>
				<img
					src={Logo7}
					alt="mie"
					style={{ width: "93%", borderRadius: "10px" }}
				/>
			</ItemsCarousel>

			<h4
				style={{
					marginTop: "0px",
					fontSize: "30px",
					lineHeight: "2.4rem",
					fontWeight: "500",
					fontFamily: "effra,Helvetica,Arial,sans-serif",
				}}
			>
				Favorit kamu
			</h4>

			<div style={{ padding: `0 ${chevronWidth}px` }}>
				<ItemsCarousel
					requestToChangeActive={setActiveItemIndex}
					activeItemIndex={activeItemIndex}
					numberOfCards={9}
					gutter={0}
					leftChevron={
						<button
							style={{
								borderRadius: "100px",
								backgroundColor: "transparent",
								color: "blue",
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="11"
								height="19"
								style={{ padding: "5px" }}
							>
								<path
									fill="#0095DA"
									fill-rule="evenodd"
									d="M.3 9.5c0-.44.18-.85.5-1.13l8.24-7.33a1.31 1.31 0 0 1 1.94.19c.49.62.4 1.54-.18 2.06L3.82 9.5l6.99 6.2c.58.53.66 1.45.17 2.07a1.31 1.31 0 0 1-1.94.19L.8 10.63A1.5 1.5 0 0 1 .3 9.5"
								/>
							</svg>
						</button>
					}
					rightChevron={
						<button
							style={{
								borderRadius: "100px",
								backgroundColor: "transparent",
								color: "blue",
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="11"
								height="19"
								style={{ padding: "5px" }}
							>
								<path
									fill="#0095DA"
									fill-rule="evenodd"
									d="M10.97 9.5c0 .44-.18.85-.5 1.13l-8.24 7.33a1.31 1.31 0 0 1-1.94-.19c-.48-.62-.4-1.54.18-2.06L7.45 9.5.47 3.3a1.53 1.53 0 0 1-.18-2.07 1.31 1.31 0 0 1 1.94-.19l8.25 7.33c.31.28.5.7.5 1.13"
								/>
							</svg>
						</button>
					}
					outsideChevron
					chevronWidth={chevronWidth}
				>
					<div
						className="box1"
						style={{
							opacity: "10",
							boxShadow: "10px 10px 24px -4px rgba(0,0,0,.12)",
							width: "118px",
							height: "40px",
							borderRadius: "8px",
							fontFamily: " effra,Helvetica,Arial,sans-serif",
							fontSize: "15px",
						}}
					>
						<a
							href="#"
							style={{
								textDecoration: "none",
								color: "black",
								textAlign: "center",
							}}
						>
							{" "}
							<img
								src={Logo8}
								alt="memew"
								style={{
									padding: "5px",
									width: "25px",
									height: "20px",
									marginRight: "5px",
									marginBottom: "-10px",
								}}
							/>
							Semua
						</a>
					</div>
					<div
						className="box1"
						style={{
							opacity: "10",
							boxShadow: "10px 10px 24px -4px rgba(0,0,0,.12)",
							width: "118px",
							height: "40px",
							borderRadius: "8px",
							fontFamily: " effra,Helvetica,Arial,sans-serif",
							fontSize: "13px",
						}}
					>
						<a
							href="#"
							style={{
								padding: "5px",
								textDecoration: "none",
								color: "black",
								marginLeft: "10px",
							}}
						>
							<img
								src={Logo9}
								alt="aaaah"
								style={{
									padding: "5px",
									width: "25px",
									height: "20px",
									marginRight: "5px",
									marginBottom: "-9px",
								}}
							/>
							Bliblimart
						</a>
					</div>
					<div
						className="box1"
						style={{
							opacity: "10",
							boxShadow: "0 0 24px -4px rgba(0,0,0,.12)",
							width: "118px",
							height: "40px",
							borderRadius: "8px",
							fontFamily: " effra,Helvetica,Arial,sans-serif",
							fontSize: "12px",
						}}
					>
						<a
							href="#"
							style={{ padding: "5px", textDecoration: "none", color: "black" }}
						>
							<img
								src={Logo10}
								alt="enpon"
								style={{
									padding: "5px",
									width: "25px",
									height: "25px",
									alignItems: "center",
									lineHeight: "1.14",
									WebkitBoxAlign: "center",
									marginLeft: "-5px",
									marginBottom: "-18px",
									marginRight: "10px",
									textAlign: "center",
									justifyContent: "center",
								}}
							/>
							Handphone &Tablet
						</a>
					</div>
					<div
						className="box1"
						style={{
							opacity: "10",
							boxShadow: "0 0 24px -4px rgba(0,0,0,.12)",
							width: "118px",
							height: "40px",
							borderRadius: "8px",
							fontFamily: " effra,Helvetica,Arial,sans-serif",
							fontSize: "15px",
						}}
					>
						<a
							href="#"
							style={{ padding: "5px", textDecoration: "none", color: "black" }}
						>
							<img
								src={Logo10}
								alt="pulsa"
								style={{
									padding: "5px",
									width: "25px",
									height: "25px",
									alignItems: "center",
									lineHeight: "1.14",
									WebkitBoxAlign: "center",
									marginLeft: "-5px",
									marginBottom: "-10px",
									marginRight: "10px",
									textAlign: "center",
									justifyContent: "center",
								}}
							/>
							Pulsa
						</a>
					</div>
					<div
						className="box1"
						style={{
							opacity: "10",
							boxShadow: "0 0 24px -4px rgba(0,0,0,.12)",
							width: "118px",
							height: "40px",
							borderRadius: "8px",
							fontFamily: "effra,Helvetica,Arial,sans-serif",
							fontSize: "12px",
						}}
					>
						<a
							href="#"
							style={{ padding: "5px", textDecoration: "none", color: "black" }}
						>
							<img
								src={Logo11}
								alt="ticket"
								style={{
									padding: "5px",
									width: "25px",
									height: "25px",
									alignItems: "center",
									lineHeight: "1.14",
									WebkitBoxAlign: "center",
									marginLeft: "-5px",
									marginBottom: "-12px",
									marginRight: "10px",
									textAlign: "center",
									justifyContent: "center",
								}}
							/>
							Ticket & Voucher
						</a>
					</div>
					<div
						className="box1"
						style={{
							opacity: "10",
							boxShadow: "0 0 24px -4px rgba(0,0,0,.12)",
							width: "118px",
							height: "40px",
							borderRadius: "8px",
							fontFamily: " effra,Helvetica,Arial,sans-serif",
							fontSize: "15px",
						}}
					>
						<a
							href="#"
							style={{ padding: "5px", textDecoration: "none", color: "black" }}
						>
							<img
								src={Logo12}
								alt="cook"
								style={{
									padding: "5px",
									width: "25px",
									height: "25px",
									alignItems: "center",
									lineHeight: "1.14",
									WebkitBoxAlign: "center",
									marginLeft: "-5px",
									marginBottom: "-10px",
									marginRight: "10px",
									textAlign: "center",
									justifyContent: "center",
								}}
							/>
							Elektronik
						</a>
					</div>
					<div
						className="box1"
						style={{
							opacity: "10",
							boxShadow: "0 0 24px -4px rgba(0,0,0,.12)",
							width: "118px",
							height: "40px",
							borderRadius: "8px",
							fontFamily: " effra,Helvetica,Arial,sans-serif",
							fontSize: "12px",
						}}
					>
						<a
							href="#"
							style={{ padding: "5px", textDecoration: "none", color: "black" }}
						>
							<img
								src={Logo13}
								alt="sofa"
								style={{
									padding: "5px",
									width: "25px",
									height: "25px",
									alignItems: "center",
									lineHeight: "1.14",
									WebkitBoxAlign: "center",
									marginLeft: "-5px",
									marginBottom: "-15px",
									marginRight: "10px",
									textAlign: "center",
									justifyContent: "center",
								}}
							/>
							Home & Living
						</a>
					</div>
					<div
						className="box1"
						style={{
							opacity: "10",
							boxShadow: "0 0 24px -4px rgba(0,0,0,.12)",
							width: "118px",
							height: "40px",
							borderRadius: "8px",
							fontFamily: " effra,Helvetica,Arial,sans-serif",
							fontSize: "12px",
						}}
					>
						<a
							href="#"
							style={{ padding: "5px", textDecoration: "none", color: "black" }}
						>
							<img
								src={Logo14}
								alt="cntik"
								style={{
									padding: "5px",
									width: "25px",
									height: "25px",
									alignItems: "center",
									lineHeight: "1.14",
									WebkitBoxAlign: "center",
									marginLeft: "-5px",
									marginBottom: "-15px",
									marginRight: "10px",
									textAlign: "center",
									justifyContent: "center",
								}}
							/>
							Kesehatan & Kecantikan
						</a>
					</div>
					<div
						className="box1"
						style={{
							opacity: "10",
							boxShadow: "0 0 24px -4px rgba(0,0,0,.12)",
							width: "118px",
							height: "40px",
							borderRadius: "8px",
							fontFamily: " effra,Helvetica,Arial,sans-serif",
							fontSize: "15px",
						}}
					>
						<a
							href="#"
							style={{ padding: "5px", textDecoration: "none", color: "black" }}
						>
							<img
								src={Logo15}
								alt="pesawat"
								style={{
									padding: "5px",
									width: "25px",
									height: "25px",
									alignItems: "center",
									lineHeight: "1.14",
									WebkitBoxAlign: "center",
									marginLeft: "-5px",
									marginBottom: "-15px",
									marginRight: "10px",
									textAlign: "center",
									justifyContent: "center",
								}}
							/>
							Pesawat
						</a>
					</div>
					<div
						className="box1"
						style={{
							opacity: "10",
							boxShadow: "0 0 24px -4px rgba(0,0,0,.12)",
							width: "118px",
							height: "40px",
							borderRadius: "8px",
							fontFamily: " effra,Helvetica,Arial,sans-serif",
							fontSize: "12px",
						}}
					>
						<a
							href="#"
							style={{ padding: "5px", textDecoration: "none", color: "black" }}
						>
							<img
								src={Logo16}
								alt="global"
								style={{
									padding: "5px",
									width: "25px",
									height: "25px",
									alignItems: "center",
									lineHeight: "1.14",
									WebkitBoxAlign: "center",
									marginLeft: "-5px",
									marginBottom: "-15px",
									marginRight: "15px",
									textAlign: "center",
									justifyContent: "center",
								}}
							/>
							Global Collection
						</a>
					</div>
				</ItemsCarousel>
			</div>

			<div
				className="grid"
				style={{
					opacity: "10",
					boxShadow: "0 0 24px -4px rgba(0,0,0,.12)",
					width: "1220px",
					height: "56px",
					padding: "0 4px",
					position: "relative",
					borderRadius: "8px",
					letterSpacing: "normal",
					marginRight: "100px",
					marginTop: "40px",
					background:
						"-webkit-gradient(linear,left top,right top,from(#3795d9),color-stop(35%,#3795d9),to(#00d4ff))",
					color: "white",
				}}
			>
				<div
					className="box1"
					style={{ fontFamily: "effra,Helvetica,Arial,sans-serif" }}
				>
					<img
						src={Logo17}
						alt="customer"
						style={{ width: "110px", height: "56px", borderRadius: "10px" }}
					/>
					<p
						style={{
							marginLeft: "110px",
							marginTop: "-50px",
							fontSize: "12px",
						}}
					>
						Customer
					</p>
					<p
						style={{
							fontSize: "1em",
							marginLeft: "110px",
							marginTop: "-15px",
							lineHeight: "5px",
						}}
					>
						{" "}
						Satisfaction # 1
						<img
							src={Logo18}
							style={{
								width: "25px",
								heigt: "15px",
								marginLeft: "30px",
								marginTop: "-5px",
							}}
						/>
						<img
							src={Logo19}
							alt="100"
							style={{
								width: "30px",
								height: "25px",
								marginLeft: "140px",
								marginTop: "-40%",
							}}
						/>
						<img
							src={Logo20}
							alt="box"
							style={{
								width: "40px",
								height: "30px",
								marginLeft: "130px",
								marginTop: "-20px",
							}}
						/>
						<p
							style={{
								marginTop: "-12px",
								marginLeft: "173px",
								fontSize: "14px",
							}}
						>
							Gratis Ongkir
						</p>
						<p
							style={{
								marginTop: "-20px",
								marginLeft: "343px",
								fontSize: "14px",
							}}
						>
							100% Orisinil
						</p>
						<p
							style={{
								marginTop: "-20px",
								marginLeft: "508px",
								fontSize: "14px",
							}}
						>
							15 Hari Retur
						</p>
					</p>
				</div>
			</div>
		</div>
	);
}
