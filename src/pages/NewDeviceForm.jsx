import React, { useState } from "react";
import './NewDeviceForm.css';

function NewDeviceForm() {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/devices", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
        brand: brand,
        model: model,
        type: type,
        image_url: image, 
        price: price,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Device added:", data);
      
      setCategory("");
      setBrand("");
      setModel("");
      setType("");
      setImage("");
      setPrice("");
    })
    .catch((error) => {
      console.error("Error adding device:", error);
    });
  };

  return (
    <div>
      <div className="newForm-container">
        <h5>Add New Device</h5>
        <form className="newForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">Add Device</button>
        </form>
      </div>
    </div>
  );
}

export default NewDeviceForm;
