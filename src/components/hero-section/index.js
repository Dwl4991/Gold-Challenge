import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Link  className="btn btn-success" to="/cari-mobil">Mulai Sewa Mobil</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-thumbnail">
        <img src="" alt="" />
      </div>
    </section>
   
  );
};
export default HeroSection;
