import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CompanySlider from '../CompanySlider';

function SelectedWork() {
  const images = [
    "/assets/TrustedBy/2.png",
    "/assets/TrustedBy/8.png",
    "https://images.unsplash.com/photo-1531727991582-cfd25ce79613?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1580215935060-a5adc57c5157?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80",
    "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?fit=crop&w=634&h=634&q=80",
    "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?fit=crop&w=634&h=634&q=80"
  ];

  // Animation controls for the text
  const textControls = useAnimation();
  // Animation controls for the images
  const imageControls = useAnimation();
  
  // InView hook for the entire section
  const { ref, inView } = useInView({
    triggerOnce: true, // Allow the animation to trigger once when in view
    threshold: 0.1, // Adjust this value to control when the animation should trigger
  });

  // Animate when the section is in view
  React.useEffect(() => {
    if (inView) {
      // Trigger text animation
      textControls.start({ opacity: 1, y: 0 });
      // Trigger image mask reveal animation
      imageControls.start({ x: '100%' });
    } else {
      // Reset text animation
      textControls.start({ opacity: 0, y: 50 });
      // Reset image mask
      imageControls.start({ x: '0%' });
    }
  }, [inView, textControls, imageControls]);

  return (
    <div ref={ref} className="selected-work relative bg-[#121212] rounded-[4rem] py-16 h-fit">
      <div className="top-0 left-0 p-8">
        <motion.h2
          className="text-white text-8xl font-bold mb-8 mt-[4rem]"
          style={{ fontFamily: '"Rowdies", sans-serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={textControls} // Use animation controls for text
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Our Portfolio
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {images.map((src, index) => (
          <div key={index} className="relative group perspective-1000">
            <div className="relative w-full h-[650px] overflow-hidden rounded-3xl">
              {/* Mask Layer */}
              <motion.div
                className="absolute inset-0 bg-[#121212] z-10"
                initial={{ x: '0%' }} // Start with the mask covering the image
                animate={imageControls} // Use animation controls for the mask
                transition={{ duration: 2, ease: 'easeInOut', delay: index * 0.2 }} // Stagger the animation for each image
              />
              {/* Image */}
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500"
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
    </div>
  );
}

// Handle hover effect
const handleMouseMove = (event, target) => {
  const rect = target.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const deltaX = (mouseX - centerX) / centerX;
  const deltaY = (mouseY - centerY) / centerY;

  target.style.transform = `rotateY(${deltaX * 15}deg) rotateX(${-deltaY * 15}deg)`;
};

const handleMouseLeave = (event, target) => {
  target.style.transform = 'rotateY(0deg) rotateX(0deg)';
};

export default SelectedWork;
