import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';

function ClientNumber() {
  const controls = useAnimation(); // Animation controls for masking effect
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow animation to trigger every time it's in view
    threshold: 0.4, // Trigger when 50% of the section is in view
  });

  const [count, setCount] = useState(0); // State to manage the count

  useEffect(() => {
    if (inView) {
      controls.start({ x: '100%' }); // Slide mask to the right to reveal image when in view

      // GSAP animation for counting from 0 to 150
      gsap.to({}, {
        duration: 1.5, // Duration of the counting animation
        delay: 0.5, // Optional delay before the animation starts
        onUpdate: function () {
          setCount(Math.ceil(gsap.utils.interpolate(0, 150, this.progress()))); // Animate the count
        },
      });
    } else {
      controls.start({ x: '0%' }); // Reset mask to cover the image when out of view
      setCount(0); // Reset the count to 0 when out of view
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="more-work relative w-full h-fit bg-[#252525] rounded-[4rem] py-16">
      <div className="absolute top-0 left-0 p-8">
        <h2 className="text-white text-[75px] font-bold mb-8 mt-[8rem] w-[100%]" style={{ lineHeight: '5rem', fontFamily: '"Rowdies", sans-serif' }}>
          With Over 150+ <br></br> Clients Nationwide - <br></br> Because Good Ideas Travel Fast!
        </h2>
      </div>
      <div className="flex justify-center ml-[-20rem] items-center mt-[26rem] relative">
        {/* Reveal Wrapper */}
        <div className="w-[500px] h-[800px] relative overflow-hidden flex-shrink-0">
          {/* Mask Layer */}
          <motion.div
            className="absolute inset-0 bg-[#252525] z-10" // Mask on top of the image
            initial={{ x: '0%' }} // Start with the mask covering the image
            animate={controls} // Use animation controls
            transition={{ duration: 2.5, ease: 'easeInOut' }} // Adjust animation duration and easing
          />
          {/* Centered Image */}
          <img
            src="/src/assets/line-img-light.webp"
            alt="Centered Image"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Huge Number to the Right */}
        <div className="text-white text-[350px] font-bold flex-shrink-0 ml-24" style={{ width: '300px', textAlign: 'center' }}>
          {count}+
        </div>
      </div>
    </div>
  );
}

export default ClientNumber;
