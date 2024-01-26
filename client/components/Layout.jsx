/**
 * Layout.jsx
 * Reynaldo Jr Pena
 * 301354757
 * January 24, 2024
 */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../src/assets/ReynaldoLogo.png';
import contactMeImg from '../src/assets/contactlogo.png';
import wallpaperbg from '../src/assets/bg.png'

export default function Layout() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav>
        <img src={logo} alt="Logo" className='logo' />
        <div className='homeMenu'>
          <Link to="/" className={`navBarMenuItem ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`navBarMenuItem ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/project" className={`navBarMenuItem ${isActive('/project') ? 'active' : ''}`}>Project</Link>
          <Link to="/services" className={`navBarMenuItem ${isActive('/services') ? 'active' : ''}`}>Services</Link>
          <Link to="/contact" className={`navBarMenuItem ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
        </div>
        <button className='contactMenuBtn'>
          <Link to="/contact">
            <img src={contactMeImg} alt="" className='contactBtnImg' />
            Contact Me
          </Link>
        </button>
      </nav>
      <br />
    </>
  );
}
