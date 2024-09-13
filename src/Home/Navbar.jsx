import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-screen shadow-md bg-[#252525]">
      <div className="flex items-center justify-between py-8 px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src="/assets/TFS-LOGO-BANNER-alpha2.gif" alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="flex-grow flex justify-center">
          <div className="flex space-x-8">
            <Link to="/" className="text-white font-medium text-lg hover:text-[#fdb913]">
              HOME
            </Link>
            <Link to="/pr" className="text-white font-medium text-lg hover:text-[#fdb913]">
              PUBLIC RELATIONS
            </Link>
            <Link to="/studio" className="text-white font-medium text-lg hover:text-[#fdb913]">
              STUDIOS
            </Link>
            <Link to="/finance" className="text-white font-medium text-lg hover:text-[#fdb913]">
              FINANCE
            </Link>
            <Link to="/contact" className="text-white font-medium text-lg hover:text-[#fdb913]">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
