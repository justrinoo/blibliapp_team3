import React from 'react'
import Logo from "../assets/images/logo-checkout.svg";
import TruckLogo from "../assets/images/truck.png";
import CreditCard from "../assets/images/credit-card.png";


export default function Checkout() {
    return (
        <div>
            <header className="spicing-sm">
			<nav className="navbar navbar-menu navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<img src={Logo} alt="Blibli" style={{width: "114px",}} />
                    <p style={{paddingLeft: "16%", fontSize: "18px", fontWeight: "700", fontFamily: "effra, sans-serif"}}>Pengiriman</p>
					<img src={TruckLogo} alt="Truck" style={{ height: "25px",}}/>
					<img src={CreditCard} alt="Credit-Card" style={{ height: "25px",}}/>
				</div>
			</nav>
		    </header>
            <div class="container">
                <div class="row row-cols-2" >
                     <div class="col mt-5">
                         <p style={{border: "1px", borderRadius : "8px", display: "flex", backgroundColor: "#daf3ff", padding: "10px 16px", marginBottom: "15px", fontSize: "14px", fontFamily: "effra,sans-serif", lineHeight: "1.4rem"}}>Blibli tidak akan meminta kata sandi, PIN, OTP, CVV, atau kode rahasia apa pun melalui SMS, telepon, WhatsApp, ataupun meminta klik link/tautan di luar Blibli. Jika menerima pesan mencurigakan, segera hubungi Customer Care Blibli.</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div>
                    <p style={{fontFamily: "effra,sans-serif", fontSize: "14px", color: "rgba(0,0,0,.6)", marginBottom: "10px", }}>Alamat Pengiriman</p>
                </div>
                <div class="row row-cols-2" >
                     <div class="col">
                         <a href="#" style={{border: "1px", borderRadius : "8px", display: "flex", backgroundColor: "#fde2c2", padding: "10px 16px", marginBottom: "15px", fontSize: "14px", fontFamily: "effra,sans-serif", lineHeight: "1.4rem", color: "#0095da",  filter: "drop-shadow(0 0 7px rgba(0,0,0,.1))"}}>Tambah Alamat</a>
                    </div>
                </div>
                <div>
                    <p style={{fontFamily: "effra,sans-serif", fontSize: "14px", color: "rgba(0,0,0,.6)", marginBottom: "10px", }}>Pesanan Anda</p>
                </div>
                <div class="row row-cols-2" >
                     <div class="col">
                         <p style={{border: "1px", borderRadius : "8px", display: "flex", backgroundColor: "#fff", padding: "10px 16px", marginBottom: "15px", fontSize: "14px", fontFamily: "effra,sans-serif", lineHeight: "1.4rem", filter: "drop-shadow(0 0 7px rgba(0,0,0,.1))"}}>Blibli.com</p>
                    </div>
                </div>
                <div>
                    <p style={{fontFamily: "effra,sans-serif", fontSize: "14px", color: "rgba(0,0,0,.6)", marginBottom: "10px", }}>Voucher & Promo</p>
                </div>
                <div class="row row-cols-2" >
                     <div class="col">
                         <p style={{border: "1px", borderRadius : "8px", display: "flex", backgroundColor: "#fff", padding: "10px 16px", marginBottom: "15px", fontSize: "14px", fontFamily: "effra,sans-serif", lineHeight: "1.4rem", color: "#0095da", fontWeight: "600", position: "relative", filter: "drop-shadow(0 0 7px rgba(0,0,0,.1))"}}>Pakai voucher/kode promo</p>
                    </div>
                </div>
                <div>
                    <p style={{fontFamily: "effra,sans-serif", fontSize: "14px", color: "rgba(0,0,0,.6)", marginBottom: "10px", }}>Rincian Pembayaran</p>
                </div>
                <div class="row row-cols-2" >
                     <div class="col">
                         <span style={{border: "1px", borderRadius : "8px", display: "flex", backgroundColor: "#fff", padding: "10px 16px", marginBottom: "15px", fontSize: "14px", fontFamily: "effra,sans-serif", lineHeight: "1.4rem", position: "relative", filter: "drop-shadow(0 0 7px rgba(0,0,0,.1))"}}>Total Belanja</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
