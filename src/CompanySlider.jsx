import React from 'react';
import './App.css' // Import the CSS for styling

function CompanySlider() {
  // Array of company icons
  const companies = [
    '/src/assets/Clients/baxy.png',
    '/src/assets/Clients/gozo.png',
    '/src/assets/Clients/hashtag.png',
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
      <div className="company-slider">
        {companies.map((src, index) => (
          <div key={index} className="company-slide">
            <img src={src} alt={`Company ${index + 1}`} className="company-icon" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanySlider;
