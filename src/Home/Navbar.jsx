import React from 'react';

function Navbar() {
  return (
    <nav className="w-screen shadow-md bg-[#121212]">
      <div className="flex items-center justify-between py-8 px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#home">
            <img src="/assets/TFS-LOGO-BANNER-alpha2.gif" alt="Logo" className="h-16 w-auto" />
          </a>
        </div>

        {/* Navigation Items */}
        <div className="flex-grow flex justify-center">
          <div className="flex space-x-8">
            <a href="#home" className="text-white font-medium text-lg hover:text-blue-500">
              HOME
            </a>
            <a href="#about" className="text-white font-medium text-lg hover:text-blue-500">
              ABOUT
            </a>
            <a href="#services" className="text-white font-medium text-lg hover:text-blue-500">
              SERVICES
            </a>
            <a href="#portfolio" className="text-white font-medium text-lg hover:text-blue-500">
              PORTFOLIO
            </a>
            <a href="#press" className="text-white font-medium text-lg hover:text-blue-500">
              PRESS & MEDIA
            </a>
            <a href="#contact" className="text-white font-medium text-lg hover:text-blue-500">
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
