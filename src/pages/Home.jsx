import React, { useState, useEffect } from 'react';
import './Home.css';
import ImageSlider from '../components/ImageSlider';

function Home() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/devices')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);  // Log the fetched data
        setDevices(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Delete device
  const deleteDevice = (id) => {
    fetch(`http://localhost:5000/devices/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete device');
        }
        // Remove deleted device from state
        setDevices(devices.filter((device) => device.id !== id));
      })
      .catch((error) => {
        alert('Error deleting device: ' + error.message);
      });
  };

  // Update device
  const updateDevice = (id, updatedDevice) => {
    fetch(`http://localhost:5000/devices/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedDevice),
    })
      .then((response) => response.json())
      .then((data) => {
        setDevices(devices.map((device) => (device.id === id ? data : device)));
      })
      .catch((error) => {
        alert('Error updating device: ' + error.message);
      });
  };

  // Filter devices based on search query
  const filteredDevices = devices.filter((device) => 
    device.brand.toLowerCase().includes(search.toLowerCase()) || 
    device.model.toLowerCase().includes(search.toLowerCase()) ||
    device.category.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredDevices);  // Log the filtered devices

  if (loading) {
    return <p>Loading devices...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ImageSlider />

      {/* Search Bar */}
      <div className="search-container">
        <label htmlFor="search-input" className="search-label">Search for a device:</label>
        <input
          type="text"
          id="search-input"
          placeholder="Enter electronic device name..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h1>Available Devices</h1>
      <div className="device-list">
        {filteredDevices.map((device) => (
          <div key={device.id} className="device-item">
            <img src={device.image_url} alt={`${device.brand} ${device.model}`} />
            <h3>{device.brand} {device.model}</h3>
            <p>Category: {device.category}</p>
            <p>Price: ksh{device.price}</p>
            
            {/* Delete Button */}
            <button onClick={() => deleteDevice(device.id)}>Delete</button>

            {/* Update Button */}
            <button onClick={() => {
              const updatedDevice = { 
                ...device, 
                price: device.price + 100 
              };
              updateDevice(device.id, updatedDevice);
            }}>
              Update Price
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
