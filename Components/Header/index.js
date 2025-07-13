import React from 'react';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CountryDropdown from './CountryDropdown';
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import SuperSaleBanner from './SuperSaleBanner';
import CategoryGrid from './CategoryGrid';
import ProductGrid from './ProductGrid';

import Button from '@mui/material/Button';
import { FaRegUser, FaApple, FaXbox, FaDove } from "react-icons/fa";
import { BsBagHeart } from "react-icons/bs";

// Brand Icons
import { SiNike, SiJbl, SiSamsung, SiAdidas, SiDell, SiLg, SiReebok, SiLogitech, SiAnkermake, SiPuma, SiSony } from "react-icons/si";
import { GrHp } from "react-icons/gr";


const Header = () => {
  return (
    <div className='headerWrapper'>

      {/* Top Strip */}
      <div className='top-strip bg-purple'>
        <div className='container'>
          <p className='mb-0 mt-0 text-center'>
            ✨ This is more than an order. It is a reflection of our commitment to 
            <b> quality 🛍️,</b> <b> care 💖,</b> and <b> trust 🤝.</b> 
            Thank you for choosing us to be part of your journey 🌿.
          </p>
        </div>
      </div>

      {/* Header with Logo and Location */}
      <header className='header'>
        <div className='container'>
          <div className='row align-items-center'>

            {/* Logo + Dropdown + Search */}
            <div className='col-sm-12 d-flex align-items-center gap-3'>
              <Link to='/' className='me-3'>
                <img src={Logo} alt='QuickMart Logo' className='logo-img' />
              </Link>
              <CountryDropdown />

              {/* Search Box */}
              <SearchBox />

              {/* User Icons + Price */}
              <div className='part3 d-flex align-items-center gap-2 ms-auto'>
                <Button className='circle'><FaRegUser /></Button>
                <span className='price' style={{ fontWeight: 'bold', color: 'black', fontFamily: 'Roboto, sans-serif' }}>₹350</span>
                <div className='ml-auto cartTab'>
                  <div className='position-relative ml-2'>
                    <Button className='circle'><BsBagHeart /></Button>
                    <span className='count d-flex align-items-center justify-content-center'>1</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </header>

      {/* Sticky Navigation Bar */}
      <div className="sticky-navbar">
        <Navigation />
      </div>

      {/* Scrolling Brand Marquee */}
    <div className="scrolling-brands-section">
  <div className="scrolling-brands">
    <span>
      <SiNike /> Nike &nbsp;&nbsp; &nbsp;&nbsp;
      <FaApple /> Apple &nbsp;&nbsp; &nbsp;&nbsp;
      <SiSamsung /> Samsung &nbsp;&nbsp; &nbsp;&nbsp;
      <SiSony /> Sony &nbsp;&nbsp; &nbsp;&nbsp;
      <SiAdidas /> Adidas &nbsp;&nbsp; &nbsp;&nbsp;
      <SiDell /> Dell &nbsp;&nbsp; &nbsp;&nbsp;
      <GrHp /> HP &nbsp;&nbsp; &nbsp;&nbsp;
      <FaXbox /> Xbox &nbsp;&nbsp; &nbsp;&nbsp;
      📷 Canon &nbsp;&nbsp; &nbsp;&nbsp;
      <SiPuma /> Puma &nbsp;&nbsp; &nbsp;&nbsp;
      🕶️ Ray-Ban &nbsp;&nbsp; &nbsp;&nbsp;
      🎒 American Tourister &nbsp;&nbsp; &nbsp;&nbsp;
      <FaDove /> Dove &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
      🧴 Nivea &nbsp;&nbsp; &nbsp;&nbsp;
      📷 Nikon &nbsp;&nbsp; &nbsp;&nbsp;
      🖨️ Epson &nbsp;&nbsp; &nbsp;&nbsp;
      <SiLg /> LG &nbsp;&nbsp; &nbsp;&nbsp;
      <SiReebok /> Reebok &nbsp;&nbsp; &nbsp;&nbsp;
      <SiLogitech /> Logitech &nbsp;&nbsp; &nbsp;&nbsp;
      <SiJbl /> JBL &nbsp;&nbsp; &nbsp;&nbsp;
      <SiAnkermake /> Anker &nbsp;&nbsp; &nbsp;&nbsp;
      💄 Lakmé &nbsp;&nbsp; &nbsp;&nbsp;
      🧽 L'Oréal &nbsp;&nbsp; &nbsp;&nbsp;
      👔 Van Heusen &nbsp;&nbsp; &nbsp;&nbsp;
      🍫 Cadbury &nbsp;&nbsp; &nbsp;&nbsp;
      🧃 Tropicana &nbsp;&nbsp; &nbsp;&nbsp;
      🚿 Himalaya
    </span>
  </div>
</div>


      {/* Sale Banner + Categories */}
      <SuperSaleBanner />
      <CategoryGrid />
      <ProductGrid />
{/* Footer Taskbar */}
<footer className="footer-taskbar bg-dark text-white py-3 mt-5">
  <div className="container text-center">
    <span className="mx-3"><a href="/contact.html" className="text-white text-decoration-none">📞 Contact Us</a></span>
    <span className="mx-3"><a href="/about.html" className="text-white text-decoration-none">👤 About Us</a></span>
    <span className="mx-3"><a href="/privacy.html" className="text-white text-decoration-none">🔒 Privacy Policy</a></span>
    <span className="mx-3"><a href="/terms.html" className="text-white text-decoration-none">📃 Terms & Conditions</a></span>
  </div>
</footer>
    </div>
  );
};

export default Header;

