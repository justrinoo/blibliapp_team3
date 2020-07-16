import React, { useState } from 'react'
import Header from '../parts/Header';
import Timer from "react-compound-timer";
import LogoEpson from '../assets/images/epson.jpg';
import Star from '../assets/images/icons/star.svg';
import Printer from '../assets/images/printer1.jpg';
import Heart from '../assets/images/heart.png';
import Facebook from '../assets/images/facebook.png';
import Twitter from '../assets/images/twitter.png';
import IconLokasi from '../assets/images/location.png';
import IconPengiriman from '../assets/images/truck.png';
import Email from '../assets/images/email.png';
import Discount from '../assets/images/price.png';
import L3150 from '../assets/images/l3150.jpg';
import Epson from '../assets/images/epsonwifi.jpg';


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
<div>
  <div className="lokasi d-flex">
    <div className="image mt-1">
      <img src={IconLokasi} style={{ width: 20 }} alt="" />
    </div>
    <div className="wrapper-right align-self-center" style={{ lineHeight: 1 }}>
      <span className="ml-2" style={{
        fontSize: 12,
        fontWeight: "normal",
        textAlign:"justift",
      }}
      >DKI Jakarta,Kota Jakarta Barat,<br></br>
      <div className="ml-2">Palmerah, Slipi</div>
      </span>
    </div>
  </div>
</div>
<div className="delivery">
  <img src={IconPengiriman} style={{ width: 20 }} alt="" />
  <span className="ml-2" style={{ fontSize:12 }}>
    Ekspres
  </span>
  <div className="" style={{ lineHeight: 1 }}>
    <span style={{ fontSize: 12, marginLeft: 30, color: "#878787" }}>
      2-7 hari 
    </span>
  </div>
</div>

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
  <div class="fitur-produk" style={{marginTop: "-250px", fontSize: "14px", fontFamily: "effra,Helvetica,Arial,sans-serif"}}>
    <h6 style={{fontWeight:"bold"}}>Fitur Produk</h6>
    <li>Print/Scan/Copy</li>
    <li>Wi-Fi & Wi-Fi Direct</li>
    <li>Epson Connect Enabled</li>
    <li>Tinta 003 (CMYK)</li>
  </div>
  <div class="pelayanan-produk mt-5" style={{fontSize: "14px", fontFamily: "effra,Helvetica,Arial,sans-serif"}}>
    <h6 style={{fontWeight:"bold"}}>Pelayanan Produk</h6>
    <li>Garansi: Garansi Resmi 2 Tahun    <a href="#" style={{textDecoration: "none"}}>Info</a></li>
    <li>15 hari Pengembalian Produk    <a href="#" style={{textDecoration: "none"}}>Info</a></li>
  </div>
</div>

        </div>

  {/* Navs */}
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{backgroundColor: "#0095DA"}}>
  <li class="nav-item" role="presentation ml-4">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item" role="presentation" style={{color: "white"}}>
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <h6>Epson L3150 EcoTank WiFi Multifungsi Printer</h6>
    <p class="mt-3"style={{fontSize: "16px"}}>Setelah sukses dalam menghadirkan printer pendahulunya, kali ini Epson kembali memperkenalkan mesin pencetak series Epson L3150. Produk terbarunya kali ini, mampu memberikan hasil pencetakan yang lebih cepat dengan kualitas yang tajam. Bahkan, printer Epson diklaim bisa menghasilkan cetakan hingga 7500 untuk dokumen berwarna dan 4500 halaman hitam-putih. Disisi lain, desain tangki yang terintegrasi juga memungkinkan Anda bisa melakukan pengisian tinta printer tanpa khawatir tertumpah. </p>
    <img src={L3150} alt="epson" class="mt-3"style={{width: "560px", heigt: "279px"}}/>
    <h4 class="mt-3">Handal dalam Kualitas & Kecepatan Cetak Dokumen </h4>
    <p class="mt-3"style={{fontSize: "16px"}}>Agar menjadikannya produk yang bisa di andalkan dalam melakukan pencetakan dokumen dengan hasil yang jelas dan bisa dilakukan secara cepat. Maka Epson L3150 Printer telah dilengkapi resolusi cetak hingga 5760 dpi guna menghasilkan cetakan berkualitas tinggi. Apalagi kemampuan kecepatan yang dimiliki yakni 10 ipm untuk halaman hitam – putih dan 5.0ipm untuk dokumen berwarna memungkin printer Epson bisa dipercaya. </p>
    <img src={Printer} alt="epson"style={{width: "560px", heigt: "256px"}}/>
    <h4>Handal dalam Kualitas & Kecepatan Cetak Dokumen </h4>
    <p style={{fontSize: "16px"}}>Sepertinya sang produsen menghadirkan inovasi terbaru pada series Epson L3150 Printer. Dimana, produk ini telah dilengkapinya teknologi nirkabel yang tentu memudahkan Anda dalam melakukan pencetakan melalui ponsel Anda. Ditambah lagi adanya teknologi Wi-Fi Direct memungkinkan Anda untuk menghubungkan hingga 4 perangkat printer tanpa sebuah router. Sebagai pelengkap, mesin pencetak Epson juga telah kompatibel dengan Google Cloud Print yang mencetak langsung dari smartphone Android, table atau PC menggunakan akun Google Anda.</p>
    <img src={Epson} alt="epson"style={{width: "560px", heigt: "256px"}}/>
    <p class="mt-3"style={{fontSize: "16px", fontWeight: "bold"}}>Spesifikasi :</p>
    <p style={{fontSize: "16px", fontWeight: "bold"}}>Print :</p>
    <li>Direction : Bi-directional</li>
    <li>Printing Language : ESC/P-R</li>
    <li>Resolution : 5760x1440 dpi</li>
    <li>Speed (Draft, A4) : Up to 33ppm (black) / 15ppm (Color)</li>
    <li>Speed (ISO 24734, A4, Simplex) : Up to 10ipm (black) / 5ipm (Color)</li>
    <p class="mt-3"style={{fontSize: "16px", fontWeight: "bold"}}>Scan :</p>
    <li>Sensor : CIS Optical</li>
    <li>Resolution : 1200x2400 dpi Speed (Flatbed 200dpi) : 11sec (Black) / 28sec (Color)</li>
    <p class="mt-3"style={{fontSize: "16px", fontWeight: "bold"}}>Copy :</p>
    <li>Speed (ISO 29183, A4, Simplex) : Up to 7.7ipm (Black) / 3.8ipm (Color)</li>
    <li>Max Resolution : 600x600 dpi</li>
    <li>Max Size : A4, Letter</li>
    <li>Ukuran Kertas : Legal Indian-Legal (215 x 345 mm) Letter, A4 16K (195 x 270 mm) B5, A5, B6, A6 Hagaki (100 x 148 mm) Envelope</li>
   <ul  class="mt-5" style={{boxSizing: "border-box"}}>
     <li>
       <span>
         SKU Number
       </span>
       <span>	MYA-25532-00266</span>
     </li>
   </ul>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>

        </div>
        </div>
    )}