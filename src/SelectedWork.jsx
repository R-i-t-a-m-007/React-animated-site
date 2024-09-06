import React from 'react';
import CompanySlider from './CompanySlider'; // Import the slider component

function SelectedWork() {
  const images = [
    "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1505201372024-aedc618d47c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1531727991582-cfd25ce79613?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1580215935060-a5adc57c5157?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80",
    "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?fit=crop&w=634&h=634&q=80",
    "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?fit=crop&w=634&h=634&q=80"
  ];

  return (
    <div className="selected-work relative bg-[#121212] rounded-[4rem] py-16 h-fit">
      <div className="top-0 left-0 p-8">
        <h2 className="text-white text-8xl font-bold mb-8 mt-[8rem]">Selected<br /> Work</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group perspective-1000"
          >
            <div className="relative transition-transform duration-500 transform-style-preserve-3d">
              <img
                src={src}
                alt={`City ${index + 1}`}
                className="w-[845px] h-[650px] rounded-3xl object-cover transition-transform duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.5s ease-out'
                }}
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e, e.currentTarget)}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Slider Section */}
      <section className="slider-section mt-16">
        <CompanySlider />
      </section>
    </div>
  );
}

const handleMouseMove = (event, target) => {
  const rect = target.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const deltaX = (mouseX - centerX) / centerX;
  const deltaY = (mouseY - centerY) / centerY;

  target.style.transform = `rotateY(${deltaX * 10}deg) rotateX(${-deltaY * 15}deg)`;
};

const handleMouseLeave = (event, target) => {
  target.style.transform = 'rotateY(0deg) rotateX(0deg)';
};

export default SelectedWork;
