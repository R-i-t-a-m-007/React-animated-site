import React from 'react';

function WhoWeAre() {
  return (
    <div className="who-we-are flex flex-col md:flex-row items-start justify-between py-16 px-8">
      {/* Left Side */}
      <div className="w-full md:w-1/2">
        <h2 className="text-6xl font-semibold text-black mb-4" style={{ fontFamily: '"Kanit", sans-serif' }}>
          Who We Are
        </h2>
      </div>
      
      {/* Right Side */}
      <div className="w-full md:w-2/3">
        <div className="flex flex-col space-y-4">
          <p className="text-9xl text-black font-medium" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
            Lorem ipsum<br /> dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
