import React from 'react';
import './style.css'
import complete from './assets/icon_complete.svg';
import price from './assets/icon_price.svg';
import hrs from './assets/icon_24hrs.svg';
import profesional from './assets/icon_professional.svg';

const Why = () => {
  // const [nama, setNama] = useState("");


  return (
<div id="why" className='why'>
<section className="why" id="why">
      <div className="container">
        <div className="why-head">
          <h1>Why Us?</h1>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <div className="why-border">
              <div className="why-content">
                <img src= {complete} alt="" />
                <h1>Mobil Lengkap</h1>
                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="why-border">
              <div className="why-content">
                <img src={price} alt="" />
                <h1>Harga Murah</h1>
                <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="why-border">
              <div className="why-content">
                <img src={hrs} alt="" />
                <h1>Layanan 24 Jam</h1>
                <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="why-border">
              <div className="why-content">
                <img src={profesional} alt="" />
                <h1>Sopir Profesional</h1>
                <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
              </div>
            </div>
          </div>
          <div className="spasi"></div>
        </div>
      </div>
    </section>
</div>
    



  );
};
export default Why;
