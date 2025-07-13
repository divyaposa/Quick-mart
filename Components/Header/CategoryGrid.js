import React from 'react';
import './CategoryGrid.css';
import { Link } from 'react-router-dom';

import beauty from '../../assets/images/beauty.jpg';
import fashion from '../../assets/images/fashion-accessories.jpg';
import footwear from '../../assets/images/footwear.webp';
import handbags from '../../assets/images/handbags-clutches.jpg';
import health from '../../assets/images/health-personal-car.png';
import jewelry from '../../assets/images/jewelry.webp';
import kids from '../../assets/images/kids-baby-wear.webp';
import kitchen from '../../assets/images/kitchen.jpg';
import laptops from '../../assets/images/laptops.webp';
import mens from '../../assets/images/mens-fashion.jpg';
import mobile from '../../assets/images/mobile-phones.jpg';
import pet from '../../assets/images/pet-care.jpg';
import snacks from '../../assets/images/snack-foods.png';
import watches from '../../assets/images/watches.jpg';
import womens from '../../assets/images/womens-clothing.jpg';
import gaming from '../../assets/images/gaming-console.avif';

// 👇 Map specific category names to their actual HTML file names
const htmlFileNames = {
  'Beauty': 'beauty.html',
  'Fashion Accessories': 'fashion-accessories.html',
  'Footwear': 'footwear.html',
  'Jewelry': 'jewelry.html',
  'Kids Wear': 'kidswear.html',
  'Kitchen': 'kitchen.html' ,
  'Laptops':'laptop.html',
  'Mens Fashion': 'men.html',
  'Mobile Phones' : 'mobile.html',// ✅ FIXED HERE
};

const categories = [
  { name: 'Beauty', image: beauty },
  { name: 'Fashion Accessories', image: fashion },
  { name: 'Footwear', image: footwear },
  { name: 'Handbags', image: handbags },
  { name: 'Personal Care', image: health },
  { name: 'Jewelry', image: jewelry },
  { name: 'Kids Wear', image: kids },
  { name: 'Kitchen', image: kitchen },
  { name: 'Laptops', image: laptops },
  { name: 'Mens Fashion', image: mens },
  { name: 'Mobile Phones', image: mobile },
  { name: 'Pet Care', image: pet },
  { name: 'Snacks & Foods', image: snacks },
  { name: 'Watches', image: watches },
  { name: 'Women’s Clothing', image: womens },
  { name: 'Gaming Console', image: gaming },
];

const CategoryGrid = () => {
  return (
    <div className="category-grid">
      {categories.map((cat, index) => {
        const htmlFile = htmlFileNames[cat.name];

        if (htmlFile) {
          return (
            <a
              href={`/${htmlFile}`}
              key={index}
              className="category-item"
            >
              <img src={cat.image} alt={cat.name} className="category-img" />
              <p className="category-name">{cat.name}</p>
            </a>
          );
        } else {
          return (
            <Link
              to={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
              key={index}
              className="category-item"
            >
              <img src={cat.image} alt={cat.name} className="category-img" />
              <p className="category-name">{cat.name}</p>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default CategoryGrid;
