import React from 'react';

function CircularTextSection() {
  const data = [
    { text: "Influencer Marketing" },
    { text: "Media Relations" },
    { text: "Talent Management" },
    { text: "Brand Associations" },
    { text: "Reputation Management" },
    { text: "Crisis Management" },
  ];

  return (
    <div className="circular-text-section bg-[#121212] rounded-[4rem] py-16 px-8 h-fit">
      {/* Top Left Heading */}
      <div className="top-0 left-0 p-8">
        <h2 className="text-white text-8xl font-bold mb-8">Domain Expertise</h2>
      </div>

      {/* Circular Text Containers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-8">
        {data.map((item, index) => (
          <div 
            key={index} 
            className={`relative p-8 ${index % 3 !== 1 ? 'border-r-2' : ''} ${index % 3 !== 1 ? 'border-l-2' : ''} border-[#ffffff1a] flex justify-center items-center`}
          >
            <div className="p-8 flex justify-center items-center rounded-full">
              <p className="text-white text-2xl font-semibold text-center border-2 border-[#ffffff1a] rounded-full px-36 py-20">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CircularTextSection;
