import React from 'react';
import './ProductGrid.css';
import { Button } from '@mui/material';
import { FaStar } from 'react-icons/fa';
import newsletterBg from '../../assets/images/newsletter-graphic.jpg';

// Product Images
import iphoneImg from '../../assets/images/iphone-product.webp';
import shoeImg from '../../assets/images/shoe-product.jpeg';
import laptopImg from '../../assets/images/laptop-product.jpg';
import watchImg from '../../assets/images/watch-product.jpg';
import bagImg from '../../assets/images/bag-product.webp';
import cameraImg from '../../assets/images/camera-product.png';
import perfumeImg from '../../assets/images/perfume-product.jpg';
import earbudsImg from '../../assets/images/earbuds-product.webp';
import tshirtImg from '../../assets/images/tshirt-product.jpg';
import microwaveImg from '../../assets/images/microwave-product.jpg';
import sunglassesImg from '../../assets/images/sunglasses-product.webp';
import kettleImg from '../../assets/images/kettle-product.jpeg';

const products = [
  {
    name: 'Nike Running Shoes',
    image: shoeImg,
    price: 2999,
    rating: 4.5,
    description: 'Comfortable and stylish running shoes perfect for all terrains.',
  },
  {
    name: 'Apple iPhone 14',
    image: iphoneImg,
    price: 79999,
    rating: 4.8,
    description: 'The latest iPhone with advanced camera and powerful performance.',
  },
  {
    name: 'Dell Laptop',
    image: laptopImg,
    price: 55999,
    rating: 4.6,
    description: 'Lightweight laptop with long battery life and Intel i7 processor.',
  },
  {
    name: 'Titan Smart Watch',
    image: watchImg,
    price: 5999,
    rating: 4.3,
    description: 'Smartwatch with heart rate monitor, fitness tracking, and alerts.',
  },
  {
    name: 'American Tourister Bag',
    image: bagImg,
    price: 2499,
    rating: 4.1,
    description: 'Spacious and durable travel bag with sleek design.',
  },
  {
    name: 'Canon DSLR Camera',
    image: cameraImg,
    price: 44999,
    rating: 4.7,
    description: 'Capture moments with this 24MP DSLR for photography lovers.',
  },
  {
    name: 'Fogg Perfume',
    image: perfumeImg,
    price: 299,
    rating: 4.0,
    description: 'Long-lasting fragrance with a bold and refreshing scent.',
  },
  {
    name: 'boAt Airdopes 141',
    image: earbudsImg,
    price: 1299,
    rating: 4.4,
    description: 'Wireless earbuds with powerful bass and long battery life.',
  },
  {
    name: 'Men’s Cotton T-Shirt',
    image: tshirtImg,
    price: 499,
    rating: 4.2,
    description: 'Casual wear cotton T-shirt with soft fabric and fit style.',
  },
  {
    name: 'Samsung Microwave Oven',
    image: microwaveImg,
    price: 8999,
    rating: 4.3,
    description: '20L Solo Microwave with quick heating and defrosting options.',
  },
  {
    name: 'Ray-Ban Sunglasses',
    image: sunglassesImg,
    price: 3499,
    rating: 4.5,
    description: 'Classic aviator sunglasses with UV protection and sleek design.',
  },
  {
    name: 'Havells Electric Kettle',
    image: kettleImg,
    price: 1599,
    rating: 4.2,
    description: '1.5L stainless steel electric kettle with auto shut-off and rapid boil.',
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-warning" />);
  }
  if (hasHalfStar) {
    stars.push(<FaStar key="half" className="text-warning" style={{ opacity: 0.5 }} />);
  }
  while (stars.length < 5) {
    stars.push(<FaStar key={`empty-${stars.length}`} className="text-secondary" style={{ opacity: 0.3 }} />);
  }

  return stars;
};

const ProductGrid = ({ onAddToCart }) => {
  return (
    <div className="product-grid container my-4">
      <h2 className="text-center mb-4">✨ Top Picks for You</h2>

      <div className="row">
        {products.map((prod, index) => (
          <div className="col-md-4 col-lg-3 mb-4" key={index}>
            <div className="card h-100 product-card">
              <img src={prod.image} alt={prod.name} className="card-img-top product-img" />
              <div className="card-body text-center">
                <h5 className="card-title">{prod.name}</h5>
                <p className="text-muted small">{prod.description}</p>
                <div className="mb-2">{renderStars(prod.rating)}</div>
                <p className="card-text fw-bold">₹{prod.price}</p>
                <Button
                  variant="contained"
                  fullWidth
                  style={{ backgroundColor: 'purple', color: 'white' }}
                  onClick={() => onAddToCart(prod)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div
        className="newsletter-section container my-5 p-4 rounded shadow"
        style={{
          backgroundImage: `url(${newsletterBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '2rem',
            borderRadius: '1rem',
          }}
        >
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 text-md-start text-center">
              <h3 className="fw-bold mb-2">💌 Join our newsletter and get...</h3>
              <h5 className="mb-2" style={{ color: '#90ee90' }}>₹20 discount for your first order</h5>
              <p className="text-light mb-0">
                Join our email subscription now to get updates on promotions and coupons.
              </p>
            </div>
            <div className="col-md-6 text-md-end text-center mt-4 mt-md-0">
              <div className="d-flex flex-column flex-md-row justify-content-md-end align-items-center gap-2">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="form-control"
                  style={{ maxWidth: '300px' }}
                />
                <Button variant="contained" style={{ backgroundColor: 'purple', color: 'white' }}>
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Row */}
      <div className="container my-5 text-center floating-benefits">
        <span className="floating-item">🥬 Everyday fresh products</span>
        <span className="floating-item">🚚 Free delivery for orders over ₹70</span>
        <span className="floating-item">🎉 Daily Mega Discounts</span>
        <span className="floating-item">💰 Best price on the market</span>
      </div>
    </div>
  );
};

export default ProductGrid;
