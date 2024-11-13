import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
        </div>
        
        <div className="footer-contacts">
          <h3>Contact Us</h3>
          <p><strong>Email:</strong> support@buyhive.com</p>
          <p><strong>Phone:</strong> 07111111111</p>
          <p><strong>Address:</strong> 123 nairobi</p>
        </div>
        
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} BuyHive.com. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
