import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUs';
import NewDeviceForm from './pages/NewDeviceForm';


function App() {
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    // Fetch items data from the API
    fetch('https://phase-2-project-4-lfsw.onrender.com/devices') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setItems(data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <p>Loading items...</p>; 
  }

  if (error) {
    return <p>Error: {error}</p>; 
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home items={items} />} /> 
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/newForm-container" element={<NewDeviceForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
