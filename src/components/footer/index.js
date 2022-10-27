import './style.css';
import Imgfb from './assets/icon_facebook.png';
import Imgig from './assets/icon_instagram.png';
import Imgtw from './assets/icon_twitter.png';
import Imgem from './assets/icon_mail.png';
import Imgtwc from './assets/icon_twitch.png';
import logo from './assets/2.svg';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="address">
              <h1>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h1>
              <h1>binarcarrental@gmail.com</h1>
              <h1>081-233-334-808</h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <ul className="nav-footer">
                <li>
                  <span>Our Service</span>
                </li>
                <li>
                  <span>Why Us</span>
                </li>
                <li>
                  <span>Testimonial</span>
                </li>
                <li>
                  <span>FAQ</span>
                </li>
            </ul>
          </div>
            <div className="col-lg-4 col-md-6">
              <div className="info-binar">
                <h1>Connect with us</h1>
                <a href="https://">
                  <img src={Imgfb} alt="" />
                </a>
                <a href="https://">
                  <img src={Imgig} alt="" />
                </a>
                <a href="https://">
                  <img src={Imgtw} alt="" />
                </a>
                <a href="https://">
                  <img src={Imgem} alt="" />
                </a>
                <a href="https://">
                  <img src={Imgtwc} alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="copyright">
                <h1>Copyright Binar 2022</h1>
                <img src={logo} alt="logo Rentcar" />
              </div>
            </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;