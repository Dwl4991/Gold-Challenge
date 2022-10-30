import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { queryData, currencyFormat } from './helper';
import Filter from './filter';
// import HeroSection from '../../components/hero-section';
import './style.scss';

import { Bars } from 'react-loader-spinner';

const CariMobil = () => {
  const [cars, setCars] = useState([]);
  // const [inputSample, setInputSample] = useState('');

  const [loading, setLoading] = useState(true);

  // const baseUrl = "http://localhost:4000";
  const baseUrl = 'https://bootcamp-rent-cars.herokuapp.com/customer';

  const getCars = () => {
    Axios.get(`${baseUrl}/car`)
      .then((response) => {
        setCars(response.data);
        setLoading(false);
      })
      .catch((error) =>
        // handle error
        console.log(error)
      );
  };

  const fetch = useRef(true);

  useEffect(() => {
    if (fetch.current) {
      getCars();
      fetch.current = false;
    }
  }, []);
  const carName = useRef('');
  const category = useRef('');
  const priceRange = useRef('');
  const statusOrder = useRef('');

  const price = () => {
    switch (priceRange.current.value) {
      case 'small':
        return { maxPrice: 400000 };
      case 'medium':
        return { minPrice: 400000, maxPrice: 600000 };
      case 'large':
        return { minPrice: 600000 };
      default:
        return '';
    }

  };

  const getData = (e) => {
    e.preventDefault();

    

    const params = {
      name: carName.current.value,
      category: category.current.value,
      minPrice: price().minPrice,
      maxPrice: price().maxPrice,
      isRented: statusOrder.current.value,
    };

    setLoading(true);
    // setEmptyData(false);
    setCars([]);

    Axios.get(`${baseUrl}/v2/car?${queryData(params)}`)
      .then((response) => {
        if (response.data.cars.length > 0) {
          setCars(response.data.cars);
        } else {
          // setEmptyData(true);
        }
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const filterData = {
    getData,
    carName,
    category,
    priceRange,
    statusOrder,
  };

  // const submitData = () => {
  //   // Axios.post('https://testapi.org/post', { name: 'John Doe' });

  //   const formData = {
  //     name: inputSample,
  //     "category": 6,
  //     "price": 7290,
  //     "status": true,
  //     "start_rent_at": "2040-07-03T03:00:07.069Z",
  //     "finish_rent_at": "2002-02-26T07:56:36.623Z",
  //     "image": "http://loremflickr.com/640/480/brazil,rio",
  //     "createdAt": "2097-04-15T17:34:57.248Z",
  //     "updatedAt": "2019-10-28T13:24:33.132Z",
  //     "description": "odio.",
  //   }

  //   Axios.post(`${baseUrl}/cars`, formData)
  //   .then((response) => {
  //     if(response) {
  //       getCars();
  //       setInputSample('')
  //     }
  //   })
  //   .catch((error) =>
  //     // handle error
  //     console.log(error)
  //   );
  // }

  return (
    <div className="carimobil">
      
      <div className="container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <Filter{...filterData} />
        {loading ? (
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass="bars-loading"
          />
        ) : (
          <div className="row">
            {cars.map((car, index) => {
              return (
                <div className="col-lg-4 col-md-12 " key={index}>
                  <div className="card">
                    <div className="card-thumbnail">
                      <img src={car.image } alt="" />
                    </div>
                    <div className="card-desctiption">
                      <h3 className="name">{car.name}</h3>
                      <p className="price">Rp {currencyFormat(car.price)} / hari</p>
                      <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <Link className='btn btn-success d-block' to={`/cari-mobil/${car.id}`}>Pilih Mobil</Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* <div className="form d-flex flex-column">
          <label htmlFor="" style={{ marginBottom: 10 }}>Input Data</label>
          <div className="d-inline-flex">
            <input type="text" value={inputSample} onChange={(e) => setInputSample(e.target.value)}/>
            <button style={{ marginLeft: 10 }} className='btn btn-success' type='button' onClick={submitData} >Submit</button>
          </div>
        </div> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* {!loading && <div className="row">
          {cars.map((car, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <div className="card">
                  <div className="card-thumbnail">
                    <img src={car.image} alt="" />
                  </div>
                  <div className="card-desctiption">
                    <h3 className="name">{car.name}</h3>
                    <p className="price">Rp {car.price} / hari</p>
                    <p className="description">{car.description}</p>
                  </div>
                  <Link to={`/cari-mobil/${car.id}`}>Pilih Mobil</Link>
                </div>
              </div>
            );
          })}
        </div>}
         */}
      </div>
    </div>
    
  );
};

export default CariMobil;
