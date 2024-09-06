import React from 'react';

function LogoSection() {
  const logos = [
    { src: "/src/assets/Logos/PR.png", alt: "Logo 1", number: "01", width: '250px', height: '250px' },
    { src: "/src/assets/Logos/Studios.png", alt: "Logo 2", number: "02", width: '300px', height: '200px' },
    { src: "/src/assets/Logos/Talent.png", alt: "Logo 3", number: "03", width: '350px', height: '300px' },
    { src: "/src/assets/Logos/Finance.png", alt: "Logo 4", number: "04", width: '400px', height: '200px' }
  ];

  return (
    <section className="relative bg-[#121212] py-16 rounded-[4rem]">
      <div className="absolute top-0 left-0 p-8">
        <h2 className="text-white text-[75px] font-bold mb-8 mt-[8rem] w-[60%]" style={{ lineHeight: '5rem' }}>
          Our Trusted Partners
        </h2>
      </div>
      <div className="flex justify-center items-center mt-[26rem]">
        <div className="flex space-x-4">
          {logos.map((logo, index) => (
            <div key={index} className="relative bg-[#1c1c1c] p-8 w-[450px] h-[450px] rounded-[1rem] flex items-center justify-center">
              <span className="absolute top-14 left-14 text-white text-3xl font-bold">{logo.number}</span>
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ width: logo.width, height: logo.height }}
                className="object-contain filter grayscale brightness-100 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoSection;
