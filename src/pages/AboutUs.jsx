// AboutUs.js
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>Our mission is to provide the best electronic products with exceptional customer service.</p>
      </div>

      <div className="about-us-content">
        <h2>Who We Are</h2>
        <p>
          Buy Hive is an online marketplace dedicated to offering top-quality electronics from around the globe. We specialize in sourcing the latest gadgets, including laptops, smartphones, headphones, and more. Our aim is to create a seamless and transparent shopping experience for tech enthusiasts and professionals alike.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is simple: To make technology accessible and affordable for everyone, anywhere. We work directly with manufacturers and trusted global distributors to bring you the best deals without the hassle of high importation fees and scams. Whether you're upgrading your tech or buying your first gadget, Buy Hive is here to help.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li><strong>Customer Focused:</strong> We prioritize customer satisfaction above all.</li>
          <li><strong>Innovation:</strong> We keep up with the latest trends in technology.</li>
          <li><strong>Integrity:</strong> We aim to provide transparent and reliable services.</li>
          <li><strong>Sustainability:</strong> We value eco-friendly practices and sustainability in technology.</li>
        </ul>

        <h2>Get In Touch</h2>
        <p>If you have any questions or feedback, feel free to contact us. We’d love to hear from you!</p>
      </div>
    </div>
  );
}

export default AboutUs;
