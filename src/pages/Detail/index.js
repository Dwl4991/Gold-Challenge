import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
// import { CheckCircle, Eye } from 'react-feather';
import { Link } from 'react-router-dom';
import {currencyFormat } from '../CariMobil/helper';
import './style.scss'

const Detail = () => {

  const [detail, setDetail] = useState({});
  let { productId } = useParams();

  // const baseUrl = 'http://localhost:4000';
  const baseUrl = 'https://bootcamp-rent-cars.herokuapp.com/customer';

  const fetch = useRef(true);

  const getDetail = (id) => {
    Axios.get(`${baseUrl}/car/${id}`)
    .then((response) => {
      setDetail(response.data);
    })
    .catch((error) =>
      // handle error
      console.log(error)
    );
  };

  useEffect(() => {
    if (fetch.current) {
      fetch.current = false;
      getDetail(productId)
    }
  }, [productId]);

  return (
    <section>
    
    <div className="car-desc">
      <div className="container">
        <div className="car-desc-border">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="package-desc">
                <div className="card">
                  <h3>Tentang Paket</h3>
                  <h3>Include</h3>
                  <ul>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                  <h3>Exclude</h3>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                  <h3>Refund, Reschedule, Overtime</h3>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.0000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.0000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.0000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </div>
                 <div className="Button">
                      <Link to={`/cari-mobil`} className="btn btn-success">
                        Kembali
                      </Link>
                    </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="card-detail">
                <div className="card">
                  <img
                    src={detail.image }
                    className="card-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{detail.name}</h5>
                    <div className="category">
                   
                    </div>
                    <div className="price">
                      <h4>Total</h4>
                      <h4>Rp {currencyFormat(detail.price)}</h4>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    // <div>
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <CheckCircle className='icon-check' color="red" size={48} />
    //   <Eye color="red" size={48} />
    //   <h1>{detail.name}</h1>
    //   <img src={detail?.image} alt="" />
    // </div>
  );
};

export default Detail;
