// Fetch ramen data from the json-server
function fetchRamens() {
  fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => {
      ramens = data; // Update the ramens array with the fetched data
      displayRamens();
    })
    .catch(error => console.error('Error fetching ramens:', error));
}

// Display ramen images in the menu
function displayRamens() {
  const ramenMenu = document.getElementById('ramen-menu');
  ramenMenu.innerHTML = ''; // Clear the menu before adding new images

  ramens.forEach((ramen, index) => {
    const ramenImage = document.createElement('img');
    ramenImage.src = ramen.image;
    ramenImage.alt = ramen.name;
    ramenImage.addEventListener('click', () => handleClick(index));
    ramenMenu.appendChild(ramenImage);
  });
}

// Display ramen details when an image is clicked
function handleClick(index) {
  const ramen = ramens[index];
  document.getElementById('ramen-name').textContent = ramen.name;
  document.getElementById('ramen-restaurant').textContent = ramen.restaurant;
  document.getElementById('ramen-rating').textContent = ramen.rating;
  document.getElementById('ramen-comment').textContent = ramen.comment;
}

// Handle form submission to add new ramen
function addSubmitListener() {
  const form = document.getElementById('new-ramen-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const restaurant = document.getElementById('restaurant').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    const image = "https://via.placeholder.com/150"; // Placeholder for image

    const newRamen = {
      name,
      restaurant,
      image,
      rating,
      comment
    };

    // Send new ramen to the server
    fetch('http://localhost:3000/ramens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRamen)
    })
      .then(response => response.json())
      .then(data => {
        ramens.push(data); // Add the new ramen to the array
        displayRamens(); // Re-render ramen menu
      })
      .catch(error => console.error('Error adding ramen:', error));

    form.reset(); // Reset the form
  });
}

// Initialize app and call the necessary functions
function main() {
  fetchRamens(); // Fetch and display ramen images
  addSubmitListener(); // Set up form submission
  // Optionally, show the first ramen details on page load
  // handleClick(0);
}

// Ensure DOM content is loaded before calling main function
document.addEventListener('DOMContentLoaded', main);
