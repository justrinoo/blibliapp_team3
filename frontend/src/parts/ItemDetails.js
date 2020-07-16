<<<<<<< HEAD
import React, { useState } from 'react'
import Header from '../parts/Header';
import Timer from "react-compound-timer";
import LogoEpson from '../assets/images/epson.jpg';
import Star from '../assets/images/icons/star.svg';
import Printer from '../assets/images/printer1.jpg';
import Heart from '../assets/images/heart.png';
import Facebook from '../assets/images/facebook.png';
import Twitter from '../assets/images/twitter.png';
import Email from '../assets/images/email.png';
import Discount from '../assets/images/price.png';


export default function ItemDetails() {
  const [count, setCount] = useState(1);
    return (
        <div>
            <Header/>
            <div class="container">
            <nav aria-label="breadcrumb" className="mt-5 " >
  <ol class="breadcrumb " style={{backgroundColor: "#eee"}}>
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Komputer & Leptop</a></li>
    <li class="breadcrumb-item"><a href="#">MFC , Scanner, Fax</a></li>
    <li class="breadcrumb-item active" aria-current="page">MFC</li>
  </ol>
</nav>
    <div class="card" style={{height: "1010px"}}>
  <div class="card-body" >
    <div className="img-wrapper" style={{backgroundColor: "#eee", width: '70px', height: "70px", borderRadius: '50px'}}>
        <img src={LogoEpson}  alt="asas" style={{width: '70px', marginTop: "27px", marginLeft: "0px"}}
          />
    </div>
    
    <h1 style={{display: "block" , fontSize: "24px",fontFamily: "effra,Helvetica,Arial,sans-serif", marginBlockStart: "0.67em", marginBlockEnd: "0.67em", marginInlineStart: "0px", marginInlineEnd: "0px", fontWeight: "normal", marginLeft: "90px", marginTop: "-70px" }}>Epson L3150 EcoTank WiFi Multifungsi Printer</h1>
    <div class="container">
  <div class="row" style={{marginLeft: "60px"}}>
    <div class="col-sm">
      Brand:
      <a href="#" style={{textDecoration: "none", marginLeft: "5px"}}>Epson</a>
    </div>
    <div class="col-sm ">
    <img src={Star} alt="" style={{width: "20px", height: "20px"}}/>
    <img src={Star} alt="" style={{width: "20px", height: "20px"}}/>
    <img src={Star} alt="" style={{width: "20px", height: "20px"}}/>
    <img src={Star} alt="" style={{width: "20px", height: "20px"}}/>
    <img src={Star} alt="" style={{width: "20px", height: "20px"}}/>
    <a href="#" style={{textDecoration: "none", marginLeft: "10px"}} >9 ulasan produk</a>
    </div>
    <div class="col-sm" >
      Garansi: Garansi Resmi 2 Tahun <a href="#" style={{textDecoration:"none"}}>Info</a>
    </div>
  </div>
</div>
<hr/>

<div class="container">
  <div class="row">
    <div class="col">
    <img src={Printer} alt="" style={{width: "425px", height: "425px"}}/>
    </div>
  
 <div class="card" style={{ width: "600px", height: "870px"}}>
   <div class="card-body">
   <div class="timer" style={{fontWeight: "bold", color: "#b34d34"}}> 
    <span>SISA WAKTU </span>  
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
				</Timer></div>

      <div class="container">
        <div class="row mt-3">
    <div class="col" style={{fontSize: "14px", fontWeight: "bold"}}>
     Harga
    </div>
    <div class="col" style={{}}>
      <span style={{fontSize: "24px", fontWeight: "bold", color: "#f7931e", position: "relative"}}>Rp2.847.000</span>
      <br/>
      <span><a href="#" style={{textDecoration: "none", fontSize: "8.5px"}}>41 penawaran lain mulai dari Rp2.655.000</a></span>
    </div>
    <div class="col">
      
    </div>
  </div>
</div>

<hr/>
 
<div class="row">
    <div class="col" style={{fontSize: "14px", fontWeight: "bold"}}>
      <span>Blibli Rewards</span>
    </div>
    <div class="col"  style={{fontSize: "14px"}}>
      <span style={{color: "#00B25A", fontWeight: "bold"}}>+ 266</span>
      point Blibli Rewards
    </div>
    <div class="col">
      <a href="#" style={{textDecoration: "none", marginLeft: "75px"}}>Info</a>
    </div>
  </div>

<hr/>

<div class="row">
    <div class="col" style={{fontSize: "14px", fontWeight: "bold"}}>
      Cicilan
    </div>
    <div class="col"  style={{fontSize: "14px" }}>
    <span style={{color: "#00B25A", fontWeight: "bold"}}>Cicilan 0%</span>
    mulai dari <b>Rp221.250</b>/bulan
    </div>
    <div class="col">
    <a href="#" style={{textDecoration: "none", marginLeft: "75px"}}>Info</a>
    </div>
  </div>

  <div class="row">
    <div class="col" style={{fontSize: "14px", fontWeight: "bold"}}>
      
    </div>
    <div class="col"  style={{fontSize: "14px" }}>
    Cicilan tanpa kartu kredit <span style={{color: "#00B25A", fontWeight: "bold"}}>Tersedia</span>
    </div>
    <div class="col">
    <a href="#" style={{textDecoration: "none", marginLeft: "75px"}}>Info</a>
    </div>
  </div>
 
 <hr/>
 <div class="row">
    <div class="col"  style={{fontSize: "14px", fontWeight: "bold"}}>
      Warna
    </div>
    <div class="col">
      -
    </div>
    <div class="col">

    </div>
  </div>
  <hr/>

  <div class="row">
    <div class="col"  style={{fontSize: "14px", fontWeight: "bold"}}>
      Metode Pengiriman
    </div>
    <div class="col" style={{fontSize: "14px", fontWeight: "bold"}}>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label" for="exampleRadios1">
    Pengiriman Langsung
  </label>
  <span  style={{fontSize: "7px", marginLeft: "0px"}}>Pesanan dikirim langsung ke tempat Anda</span>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
    Ambil di Toko
  </label>
  <br/>
  <span  style={{fontSize: "7px", marginLeft: "0px"}}>Ambil pesanan langsung di store</span>
</div>
    </div>
    <div class="col">
    <span style={{color: "#00B25A", fontWeight: "bold", fontSize: "14px"}}>Stok Tersedia</span><br/>
    <span style={{color: "#00B25A", fontWeight: "bold", fontSize: "14px", marginTop: "60px"}}>Stok Tersedia</span>
    </div>
  </div>

<hr/>
  {/* <div class="row">
    <div class="col"  style={{fontSize: "14px", fontWeight: "bold"}}>
      
    </div>
    <div class="col" style={{fontSize: "14px", fontWeight: "bold"}}>
    <input type="radio" aria-label="Radio button for following text input"/><span class="ml-2">Ambil di Toko</span><br/>
    <span  style={{fontSize: "6px", marginLeft: "20px"}}>Ambil pesanan langsung di store yang dipilih</span>
    </div>
    <div class="col">
    <span style={{color: "#00B25A", fontWeight: "bold", fontSize: "14px"}}>Stok Tersedia</span>
    </div>
  </div>
<hr/> */}

<div class="row">
    <div class="col"  style={{fontSize: "14px", fontWeight: "bold"}}>
      Jumlah
    </div>
    <div class="col">
      <button onClick={() => setCount(count - 1)}>
       -
    </button>
<input type="text" value={count} style={{width: "60px", textAlign: "center"}}/>
      <button onClick={() => setCount(count + 1)}>
       +
      </button>
    </div>
</div>
<div class="col">
    <button type="button" class="btn btn-warning mt-3 ml-3" style={{width: "200px", color : "#fff", fontWeight: "bold"}}>BELI SEKARANG</button>
    <button type="button" class="btn btn-primary mt-3 ml-3" style={{width: "200px", color: "#fff", fontWeight: "bold"}}>TAMBAH KE BAG</button>
    </div>
<hr/>

<div class="row">
    <div class="col">
      <a href="#"><img src={Heart} alt="lope" style={{height: "1em", width: "1em"}}/></a>
      <span class="ml-2" style={{fontFamily: "effra,Helvetica,Arial,sans-serif", fontSize: "14px"}}>Tambah ke Wishlist</span>
    </div>
    <div class="col mr-5">
    <span class="mr-2" style={{fontFamily: "effra,Helvetica,Arial,sans-serif", fontSize: "14px"}}>Share</span>
      <a href="#"><img src={Facebook} alt="lope" style={{height: "25px", width: "25px"}}/></a>
      <a href="#"><img src={Twitter} alt="lope" class="ml-2" style={{height: "25px", width: "25px"}}/></a>
      <a href="#"><img src={Email} alt="lope" class="ml-2" style={{height: "25px", width: "25px"}}/></a>
    </div>
    </div>

    <hr/>
    <div class="card-body" style={{backgroundColor: "#f9f9f9", height: "170px"}}>
    <img src={Discount} alt="dis" style={{width: "24px", height: "24px"}}/>
    <span class="ml-3" style={{color: "#00b45a", fontSize: "14px", fontWeight: "bold"}}>Dapatkan potongan harga spesial setiap hari</span>

<div class="container">
  <div class="row">
    <div class="col">
  <div class="card mt-2" style={{width: "15rem", height: "100px"}}>
  <div class="card-body" style={{fontSize: "14px"}}>
    <h6 class="card-title">SCB Thursday Deal</h6>
    <p class="card-text" style={{opacity: "0.5"}}>Lebih Hemat Rp100Ribu Setiap Hari Kamis</p>
  </div>
  </div>
  </div>
  <div class="col">
  <div class="card mt-2" style={{width: "15rem", height: "100px"}}>
  <div class="card-body" style={{fontSize: "14px"}}>
    <h6 class="card-title">Ekstra Diskon Rp 15rb</h6>
    <p class="card-text" style={{opacity: "0.5", marginTop: "-12px"}}>Berlaku untuk min. Transaksi Rp 200rb dengan Kartu Kredit Permata</p>
  </div>
  </div>
  </div>

</div>
</div>

  </div>

  </div>
  
</div>
 </div>

  </div>
  <p>halooooooo</p>
</div>

        </div>
        </div>
        </div>
    )
=======
import React from "react";

export default function ItemDetails({ data, props }) {
	return (
		<div>
			<div className="container mt-5">
				<h4>Item Details</h4>
			</div>
		</div>
	);
>>>>>>> 98b45861cdccb9cbbd8fd34972e8c880bcaf75e7
}
