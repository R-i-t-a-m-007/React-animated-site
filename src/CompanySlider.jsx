import React from 'react';
import './App.css'; // Import the CSS for styling
import image1 from '/public/assets/Novotel.png';
import image2 from '/public/assets/turtle.png';
import image3 from '/public/assets/wildstone.png'

function CompanySlider() {
  // Array of company icons
  const companies = [
    image1,
    image2,
    image3,
    '/src/assets/Clients/HRC.png',
    '/src/assets/Clients/Novotel.png',
    '/src/assets/Clients/olterra.png',
    '/src/assets/Clients/Sumangalp.png',
    '/src/assets/Clients/The Park.jpeg',
    '/src/assets/Clients/Titas.png',
    '/src/assets/Clients/trident.png',
  ];

  return (
    <div className="company-slider-container">
      <div className="company-slider flex overflow-x-scroll space-x-4">
        {companies.map((src, index) => (
          <div key={index} className="company-slide flex-shrink-0 w-48 h-48">
            <img 
              src={src} 
              alt={`Company ${index + 1}`} 
              className="company-icon grayscale transition duration-300 ease-in-out grayscale-0" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanySlider;
