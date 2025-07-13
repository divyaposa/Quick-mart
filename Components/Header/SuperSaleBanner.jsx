import React from 'react';
import './SuperSaleBanner.css';
import { Link } from 'react-router-dom';

import banner1 from '../../assets/images/super-sale1.jpg';
import banner2 from '../../assets/images/super-sale2.jpg';
import banner3 from '../../assets/images/super-sale3.jpg';

const SuperSaleBanner = () => {
  return (
    <div className="super-sale-banner container mt-4 mb-4 position-relative">
      <div id="superSaleCarousel" className="carousel slide rounded" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="Sale 1" />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="Sale 2" />
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="Sale 3" />
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#superSaleCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#superSaleCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* 🔽 Text below image in bottom-left corner */}
      <div className="sale-bottom-text">
        <h2>🔥 Big Deals This Week!</h2>
        <p>
          <Link to="/mobiles" className="category-link">📱 Mobiles</Link> |{' '}
          <Link to="/beauty" className="category-link">💄 Beauty</Link> |{' '}
          <Link to="/fashion" className="category-link">👕 Fashion</Link> |{' '}
          <Link to="/gaming" className="category-link">🎮 Gaming</Link>
        </p>
      </div>
    </div>
  );
};

export default SuperSaleBanner;
