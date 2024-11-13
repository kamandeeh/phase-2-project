import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6rgLa7aTOmjvZJDUI_j__3jkmbKCJg0TNxA&s",
    "https://www.phoneplacekenya.com/wp-content/uploads/2022/05/iPhone-14-Pro-Max-Purple.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jjCQB4tKkPLAfWWkkt9QBYFCeJ6JeySicw&s",
    "https://smartphonestorekenya.com/wp-content/uploads/2022/07/SAMSUNG-GALAXY-S22-ULTRA.jpeg"
  ];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="slider-container">
      <img src={images[currentIndex]} alt="Featured" className="slider-image" />
      <div className="slider-buttons">
        <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>❮</button>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>❯</button>
      </div>
    </div>
  );
}

export default ImageSlider;
