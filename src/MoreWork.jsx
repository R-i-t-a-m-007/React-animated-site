import React from 'react';

function MoreWork() {
  return (
    <div className="more-work relative w-full h-fit bg-[#252525] rounded-[4rem] py-16">
      <div className="absolute top-0 left-0 p-8">
        <h2 className="text-white text-[75px] font-bold mb-8 mt-[8rem] w-[60%]" style={{ lineHeight: '5rem' }}>
          Designing great products is so hard. But we've done more than 150 of them this year.
        </h2>
      </div>
      <div className="flex justify-center items-center mt-[26rem]">
        {/* Centered Image */}
        <img
          src="/src/assets/line-img-light.webp"
          alt="Centered Image"
          className="w-[500px] h-[800px] object-cover"
        />
        {/* Huge Number to the Right */}
        <div className="text-white text-[450px] font-bold ml-52">
          150
        </div>
      </div>
      
    </div>
  );
}

export default MoreWork;
