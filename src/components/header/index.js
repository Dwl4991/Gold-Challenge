import React, { useState } from 'react';
import './style.css';
import Logo from './assets/2.svg';
import Menu from './assets/menu.png';
import CloseButton from './assets/close.svg';
import { Link } from 'react-router-dom';
const Header = () => {
  const [active, setActive] = useState(false);

  const openSidebar = () => {
    setActive(true);
  };
  

  return (
    
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo saya" />
            </Link>
          </div>
          <div className={`overlay-bg ${active ? 'menu-active' : ''}`} />
          <div className={`sidebar ${active ? 'menu-active' : ''}`}>
            <div className="top-sidebar">
              <h3>BCR</h3>
              <div className="close-icon">
                <img src={CloseButton} alt="" />
              </div>
            </div>
            <ul className="menu">
              <li>
                <a href="#our-services">Our Services</a>
              </li>
              <li>
                <a href="#why">Why Us</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="burger-icon" onClick={openSidebar}>
            <img src={Menu} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
