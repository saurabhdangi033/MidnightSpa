import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      {/* Top Info Bar */}
    <div className="top-bar">
  <div className="top-left">📧 midnightspa@email.com</div>
  <div className="top-center">
    <marquee>🌟 Welcome to Midnight Spa — +91 8871216273 , +91 8878873358 🌿</marquee>
  </div>
  <div className="top-right">
    <a href="https://www.instagram.com/midnightspaandsalon?igsh=MzNlNGNkZWQ4Mg=="><FaInstagram /></a>
    <a href="https://www.facebook.com/profile.php?id=61569186301548"><FaFacebookF /></a>
    <a href="https://maps.app.goo.gl/4cVRNAPz4Lm7ZJbF6?g_st=awb" target="_blank" rel="noopener noreferrer">
      <FaMapMarkerAlt />
    </a>
  </div>
</div>


      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/images/logo.png" alt="logo" className="logo" />
        </div>
        <div className="link-binder">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="navbar-right">
            <a href="tel:+918871216273" title="Call us">
              <FaPhoneAlt />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
