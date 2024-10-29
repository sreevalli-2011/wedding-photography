import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SliderComponent from './SliderComponent';
import logoImage from './assets/images/logo.png'; // Import the image

import './style.css';

const NavBannerComponent = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className="navbar-banner" style={{ backgroundImage: `url(./assets/images/banner.jpg)` }}>
         <div className="logo-container">
                <img src={logoImage} alt="Logo" className="logo" />
            </div>

            <div className="hamburger-icon" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className={`nav-links ${menuActive ? 'active' : ''}`}>
                <div className="menu-container">
                <p class="menu-title">Menu</p>
                    <Link to="/">Home</Link>
                    <Link to="/unitstills">Unit Stills</Link>
                    <Link to="/about">About</Link>
                 
                    <Link to="/contact">Contact</Link>
                    <Link to="/private portfolio">Private Portfolio</Link>

                </div>
                <p class="menu-container">
    Please contact{' '}
    <a href="mailto:devkvasu@gmail.com" target="_blank">
      devkvasu@gmail.com
    </a>{' '}
    to request a password
  </p>
            </div>
        </div>
    );
};

export default NavBannerComponent;













