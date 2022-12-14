import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const CtaBanner = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-body">
          <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. </p>
          <Link to={'/cari-mobil'} className="btn btn-primary">Mulai Sewa Mobil</Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;