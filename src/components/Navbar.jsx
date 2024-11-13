import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" className="navbar-brand">BuyHive.com</Link>
      </div>

      {/* Navbar Links (Visible in Desktop) */}
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/newForm-container">Add New Device</Link>
  
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="navbar-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/newForm-container">Add New Device</Link>
          
        </div>
      )}
    </nav>
  );
}

export default Navbar;
