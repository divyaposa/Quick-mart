import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TfiMenuAlt } from "react-icons/tfi";
import { FaAngleDoubleDown, FaAngleUp, FaMobileAlt, FaLaptop, FaTabletAlt, FaPlug, FaBatteryFull, FaShieldAlt, FaBriefcase, FaTv, FaGamepad, FaCamera, FaSnowflake, FaTshirt, FaShirtsinbulk, FaWatchmanMonitoring, FaShoePrints, FaBlender, FaHandSparkles, FaShoppingBasket, FaMugHot, FaCookieBite, FaFemale, FaShoppingBag, FaRing, FaPumpSoap } from "react-icons/fa";
import { MdComputer, MdFaceRetouchingNatural } from "react-icons/md";
import { GiClothes, GiSandal, GiLipstick } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowAll(false);
    setOpenSubMenu(null);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (label) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  const getRoutePath = (label) => {
    switch (label) {
      case "Beauty & Grooming":
      case "Make-up":
        return "/beauty";
      case "Snack Foods":
        return "/snacks";
      case "All Mobile Phones":
        return "/mobiles";
      default:
        return "/";
    }
  };

  const basicCategories = [
    { label: "Mobiles, Computers", hasSubmenu: true },
    { label: "TV, Audio & Cameras", hasSubmenu: true },
    { label: "Men's Fashion", hasSubmenu: true },
    { label: "Women's Fashion", hasSubmenu: true }
  ];

  const allCategories = [
    ...basicCategories,
    { label: "Beauty, Health & Grocery", hasSubmenu: true }
  ];

  const mobileSubmenu = [
    { label: "All Mobile Phones", icon: <FaMobileAlt /> },
    { label: "Laptops", icon: <FaLaptop /> },
    { label: "Tablets", icon: <FaTabletAlt /> },
    { label: "All Mobile Accessories", icon: <FaPlug /> },
    { label: "Power Banks", icon: <FaBatteryFull /> },
    { label: "Screen Protectors", icon: <FaShieldAlt /> },
    { label: "Cases & Covers", icon: <FaBriefcase /> },
    { label: "All Computers & Accessories", icon: <MdComputer /> }
  ];

  const tvSubmenu = [
    { label: "Televisions", icon: <FaTv /> },
    { label: "Gaming Consoles", icon: <FaGamepad /> },
    { label: "Cameras", icon: <FaCamera /> },
    { label: "Refrigerators", icon: <FaSnowflake /> },
    { label: "Washing Machines", icon: <FaBlender /> }
  ];

  const beautyGrocerySubmenu = [
    { label: "Beauty & Grooming", icon: <MdFaceRetouchingNatural /> },
    { label: "Make-up", icon: <GiLipstick /> },
    { label: "Health & Personal Care", icon: <FaHandSparkles /> },
    { label: "Personal Care Appliances", icon: <FaPumpSoap /> },
    { label: "All Grocery & Gourmet Foods", icon: <FaShoppingBasket /> },
    { label: "Coffee, Tea & Beverages", icon: <FaMugHot /> },
    { label: "Snack Foods", icon: <FaCookieBite /> }
  ];

  const menFashionSubmenu = [
    { label: "T-shirts & Polos", icon: <FaTshirt /> },
    { label: "Shirts", icon: <FaShirtsinbulk /> },
    { label: "Jeans", icon: <GiClothes /> },
    { label: "Watches", icon: <FaWatchmanMonitoring /> },
    { label: "Sports Shoes", icon: <FaShoePrints /> }
  ];

  const womenFashionSubmenu = [
    { label: "Western Wear", icon: <FaFemale /> },
    { label: "Ethnic Wear", icon: <GiClothes /> },
    { label: "Fashion Sandals", icon: <GiSandal /> },
    { label: "Handbags & Clutches", icon: <FaShoppingBag /> },
    { label: "Fashion & Silver Jewellery", icon: <FaRing /> }
  ];

  const getSubMenuItems = (label) => {
    switch (label) {
      case "Mobiles, Computers":
        return mobileSubmenu;
      case "TV, Audio & Cameras":
        return tvSubmenu;
      case "Beauty, Health & Grocery":
        return beautyGrocerySubmenu;
      case "Men's Fashion":
        return menFashionSubmenu;
      case "Women's Fashion":
        return womenFashionSubmenu;
      default:
        return [];
    }
  };

  return (
    <nav>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3 navpart1 position-relative'>
            <Button className='allCatTab d-flex align-items-center' onClick={toggleDropdown}>
              <span className='icon1 me-2'><TfiMenuAlt /></span>
              <span className='text'>All CATEGORIES</span>
              <span className='icon2 ms-2'>{showDropdown ? <FaAngleUp /> : <FaAngleDoubleDown />}</span>
            </Button>

            {showDropdown && (
              <ul className='dropdown-menu-custom'>
                <li><strong>Shop by Category</strong></li>
                {(showAll ? allCategories : basicCategories).map((category, idx) => (
                  <li key={idx} className='position-relative category-item'>
                    {category.hasSubmenu ? (
                      <div onClick={() => toggleSubMenu(category.label)} style={{ cursor: 'pointer', fontWeight: '500' }}>
                        {category.label}
                        <span style={{ float: 'right' }}>▶</span>
                      </div>
                    ) : (
                      category.label
                    )}

                    {category.hasSubmenu && openSubMenu === category.label && (
                      <ul className='side-dropdown'>
                        {getSubMenuItems(category.label).map((item, i) => (
                          <li key={i} className='d-flex align-items-center gap-2'>
                            <Link to={getRoutePath(item.label)} className='d-flex align-items-center gap-2 text-decoration-none text-dark'>
                              {item.icon}<span>{item.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li style={{ color: 'blue', cursor: 'pointer', paddingTop: '10px' }} onClick={toggleShowAll}>
                  {showAll ? 'See less' : 'See all'}
                </li>
              </ul>
            )}
          </div>

          <div className='col-sm-9 navpart2'>
            <ul className='list list-inline mb-0'>
              <li className='list-inline-item'>
                <Link to='/' className='nav-link'></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
