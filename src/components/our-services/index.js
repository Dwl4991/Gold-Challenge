import React from 'react';
import './style.css'
const OurServices = () => {
  // const [nama, setNama] = useState("");


  return (
    <div id="our-services" className='our-services'>
      <section className="our-service" id="our-service">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="img-service">
              {/* <img src="./images/img_service.png" alt=""> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="deskripsi">
              <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
              <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain,
                kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
                dll.</p>
              <ul>
                {/* <img src="./images/Group 53.png" alt=""> */}
                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
              </ul>
              <ul>
                {/* <img src="./images/Group 53.png" alt=""> */}
                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
              </ul>
              <ul>
                {/* <img src="./images/Group 53.png" alt=""> */}
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
              </ul>
              <ul>
                {/* <img src="./images/Group 53.png" alt=""> */}
                <li>Gratis Antar - Jemput Mobil di Bandara</li>
              </ul>
              <ul>
                {/* <img src="./images/Group 53.png" alt=""> */}
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
      
    </div>
  );
};
export default OurServices;
